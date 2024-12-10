import keys from "./breedsArray"

const pickUpRandomBreed = () => {
  const randomNumber = Math.floor(Math.random() * keys.length - 1)
  const randomBreed = keys[randomNumber]
  return randomBreed
}

const randomBreed = pickUpRandomBreed()
export default randomBreed