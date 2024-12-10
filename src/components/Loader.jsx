import loaderGif from '../assets/gifs/loading-thinking.gif'

export const Loader = ({ size }) => {
  return (
    <div> <img className={`max-w-${size}`} src={loaderGif} alt='loader dog gif' /></div>
  )
}
