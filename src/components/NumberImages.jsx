import React from 'react'

const NumberImages = ({ option, onClick }) => {
  return (
    <span onClick={onClick} className='bg-myOrange px-6 py-1 rounded-md font-bold text-slate-600 hover:bg-opacity-70 hover:cursor-pointer'>{option}</span>
  )
}

export default NumberImages