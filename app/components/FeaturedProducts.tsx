import Image from 'next/image'
import React from 'react'
import chair1 from '@/public/images/chair1.png'
import chair2 from '@/public/images/chair2.png'
import chair3 from '@/public/images/chair3.png'
import chair4 from '@/public/images/chair4.png'
export default function FeaturedProducts() {
  return (
    <div className='px-24'>
        <h2 className='text-3xl text-center p-6 font-josefin'>Featured Products</h2>
        <div className='flex gap-4 items-center justify-center'>
            <div className='p-4'>
                <Image
                src={chair1}
                alt="image"
                height={250}
                width={250}
                />
                <p className='text-[#FB2E86] font-bold'>Cantilever chair</p>
                <p className='text-[#151875]'>Code - Y523201</p>
                <p className='text-[#151875]'>$42.00</p>
            </div>
            <div className='p-4'>
                <Image
                src={chair2}
                alt="image"
                height={250}
                width={250}
                />
                <p className='text-[#FB2E86] font-bold'>Cantilever chair</p>
                <p className='text-[#151875]'>Code - Y523201</p>
                <p className='text-[#151875]'>$42.00</p>
            </div>
            <div className='p-4'>
                <Image
                src={chair3}
                alt="image"
                height={250}
                width={250}
                />
                <p className='text-[#FB2E86] font-bold'>Cantilever chair</p>
                <p className='text-[#151875]'>Code - Y523201</p>
                <p className='text-[#151875]'>$42.00</p>
            </div>
            <div className='p-4'>
                <Image
                src={chair4}
                alt="image"
                height={250}
                width={250}
                />
                <p className='text-[#FB2E86] font-bold'>Cantilever chair</p>
                <p className='text-[#151875]'>Code - Y523201</p>
                <p className='text-[#151875]'>$42.00</p>
            </div>
          
        </div>
    </div>
  )
}
