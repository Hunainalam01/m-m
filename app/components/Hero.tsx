import Image from 'next/image'
import React from 'react'
import lamp from '@/public/images/lamp.png'
import sofa from '@/public/images/sofa.png'
export default function Hero() {
  return (
    <div className='bg-[#F2F0FF] h-96 w-full px-24'>
        <div className='flex relative p-2'>
        <div
        className='top-0 left-0 absolute'>
            <Image
            src={lamp}
            alt="image"
            height={150}
            width={150}
            />
        </div>
        <div className='absolute left-[20%] top-24'>
            <h2 className='text-3xl'>New Furniture Collection
            </h2>
            <h2 className='text-3xl'>Trends in 2020
            </h2>
            <h6 className='max-w-xl'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing
            in phasellus non in justo.
            </h6>
        </div>
        <div
        className='right-0 top-0 absolute p-2'>
            <Image
            src={sofa}
            alt="image"
            height={300}
            width={300}
            />
        </div>
        </div>

    </div>
  )
}
