import { useEffect, useState } from 'react'

const useFetchRandomImages = (breed, imagesAmount) => {
  const [data, setData] = useState({})
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    fetch(`https://dog.ceo/api/breed/${breed}/images/random/${imagesAmount}`)
      .then(res => res.json())
      .then(data => setData(data))
      .catch(err => setError(err))
      .finally(() => setLoading(false))
  }, [breed, imagesAmount])

  return { data, loading, error }
}

export default useFetchRandomImages