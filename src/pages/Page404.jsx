import gif404 from '../assets/gifs/dog-dogs.gif'

const Page404 = () => {
  return (
    <div className='bg-gradient-to-tr from-myWhite via-myViolet to-myBlue max-w-full min-h-screen flex flex-col gap-20 justify-center items-center p-4'>
      <h1 className='text-center text-4xl font-serif font-semibold'>Where you were going?</h1>
      <img className='w-60' src={gif404} alt='dog gif' />
      <h2 className='text-center text-3xl font-serif font-semibold'>Error 404</h2>
    </div>
  )
}

export default Page404