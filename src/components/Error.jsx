import errorGif from '../assets/gifs/dog-computer.gif'

const Error = ({ size }) => {
  return (
    <div>
      <img className={`max-w-${size}`} src={errorGif} alt='this is fine meme gif' />
    </div>
  )
}

export default Error