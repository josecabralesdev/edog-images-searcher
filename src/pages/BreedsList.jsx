import keys from "../utils/breedsArray"
import listIcon from '../assets/icons/dog-nose.png'
import tapIcon from '../assets/icons/tap-svgrepo-com.svg'
import SectionHeader from "../components/SectionHeader"
import { toast } from "sonner"

const BreedsList = () => {

  const handleClick = async (e) => {
    const breed = e.target.innerText

    try {
      await navigator.clipboard.writeText(breed)
      toast.success(`Breed: ${breed} was copied to clipboard`)
    } catch (err) {
      toast.error('Something went wrong! Try again')
    }
  }

  return (
    <div className='bg-gradient-to-tr from-myWhite via-myViolet to-myBlue max-w-full min-h-screen flex flex-col gap-10 justify-center items-start p-4'>
      <SectionHeader title='Breeds List' />
      <h2 className="flex gap-2 items-center bg-myWhite p-2 rounded bg-opacity-60">Tap on a breed to copy it to your clipboard.<img className="size-8" src={tapIcon} alt="tap icon" /></h2>

      <div className="outline outline-slate-600 p-4 w-full rounded-md grid gap-4">
        {keys.map(breed => (
          <div key={breed} className="flex gap-10 items-center p-2 w-full border-b-2 last:border-none border-slate-600 cursor-pointer">
            <img className="size-6" src={listIcon} alt="dog nose icon" />
            <span className="w-full text-lg font-semibold" onClick={handleClick}>{breed}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

export default BreedsList