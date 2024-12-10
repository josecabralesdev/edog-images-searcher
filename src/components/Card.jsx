import React from 'react'

const Card = ({ dog }) => {
  return (
    <div>
      <img className="h-auto max-w-full rounded-lg" src={dog} alt='dog image' />
    </div>
  )
}

export default Card