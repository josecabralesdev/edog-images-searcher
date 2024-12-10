import loaderGif from '../assets/gifs/loading-thinking.gif'

const Fallback = () => {
  return (
    <div className='bg-gradient-to-tr from-myWhite via-myViolet to-myBlue w-full h-screen p-4 grid place-items-center gap-10'>
      <img className='max-w-48' src={loaderGif} alt='this is fine meme gif' />
      <h2 className='text-center font-semibold text-xl italic'>Wait for a moment please.</h2>
    </div>
  )
}

export default Fallback