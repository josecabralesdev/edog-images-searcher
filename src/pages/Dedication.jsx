import doghuge from '../assets/gifs/dog-hug.gif'

const Dedication = () => {
  return (
    <div className='bg-gradient-to-tr from-myWhite via-myViolet to-myBlue max-w-full min-h-screen flex flex-col gap-20 justify-center items-center p-4'>
      <h1 className='text-center text-4xl font-serif font-semibold italic'>For you ❤ who love dogs more than everyone</h1>
      <img src={doghuge} alt='dog huge gif' />
    </div>
  )
}

export default Dedication