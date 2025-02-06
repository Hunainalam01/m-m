import React from 'react'

export default function Header(props) {
  const {title, subTitle, subTitle2} = props
  return (
    <div className='text-left bg-[#F6F5FF] flex flex-col items-start justify-center p-10'>
      <h2 className='text-3xl font-josefin font-bold text-secondary'>
      {title}
      </h2>
      <div className='flex font-lato font-bold'>
      <h3 className='text-xl text-secondary'>

      {subTitle}
      </h3>
      <h3 className='text-xl text-[#FB2E86]'>
      {subTitle2}
      </h3>
      </div>
    </div>
  )
}
