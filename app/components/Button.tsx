import React from 'react'

export default function Button(props:any) {
    const {type, onClick, text} = props
  return (
    <button
    type={type}
    onClick={onClick}
    className='bg-pink px-4 py-2 text-white w-40'
    >{text}</button>
  )
}
