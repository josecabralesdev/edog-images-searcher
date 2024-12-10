import randomBreed from '../utils/pickRandomBreed'
import { useState } from 'react'
import useFetchRandomImages from '../hooks/useFetchRandomImages'
import Error from '../components/Error'
import { Loader } from '../components/Loader'
import useDebounce from '../hooks/useDebounce'
import Card from '../components/Card'
import NumberImages from '../components/NumberImages'

const Home = () => {
  const [search, setSearch] = useState(randomBreed)
  const [imagesNumber, setImagesNumber] = useState('4')

  const { debouncedValue } = useDebounce(search)
  const { data, loading, error } = useFetchRandomImages(debouncedValue, imagesNumber)

  const searchDog = (e) => {
    setSearch(e.target.value !== '' ? e.target.value.toLowerCase() : randomBreed)
  }

  const handleClick = (e) => {
    const number = e.target.innerText

    switch (number) {
      case '1':
        setImagesNumber('1')
        break
      case '4':
        setImagesNumber('4')
        break
      case '8':
        setImagesNumber('8')
        break
      case 'All':
        setImagesNumber('50')
        break
      default:
        return
    }
  }

  return (
    <div className='bg-gradient-to-tr from-myWhite via-myViolet to-myBlue max-w-full min-h-screen flex flex-col gap-20 justify-between items-center p-4'>
      <h1 className='text-center text-4xl font-serif font-semibold italic mt-20'>EDog Images Searcher</h1>

      <div className='flex flex-col gap-2 justify-center items-center'>
        <label className='text-xl underline font-semibold text-slate-800' htmlFor='search'>Breed:</label>
        <input
          className='p-3 rounded-md placeholder:italic outline-none border-0'
          placeholder='ex: greyhound'
          onChange={searchDog}
          name='search'
        />
      </div>

      <div className='outline p-3 outline-2 rounded-md outline-slate-600 grid place-items-center gap-4'>
        <span className='font-semibold text-slate-700 underline text-lg'>Number of images</span>
        <div className='flex flex-wrap justify-center items-center gap-4'>
          <NumberImages option='1' onClick={handleClick} />
          <NumberImages option='4' onClick={handleClick} />
          <NumberImages option='8' onClick={handleClick} />
          <NumberImages option='All' onClick={handleClick} />
        </div>
      </div>

      <div className='gird place-items-center'>
        <h2 className='text-center my-4 uppercase font-semibold text-xl'>{search === '' ? randomBreed : search}</h2>
        {error && <Error size='48' />}
        {loading && <Loader size='48' />}
        <div className="grid gap-4">
          <div className="w-full place-items-center grid gap-4">
            {data && data.message?.map(dog => (
              <Card key={dog} dog={dog} />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home