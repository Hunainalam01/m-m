import Image from 'next/image'
import React from 'react'
import chair1 from '@/public/images/latestproducts1.png'
import chair2 from '@/public/images/latestproducts2.png'
import chair3 from '@/public/images/latestproducts3.png'
import chair4 from '@/public/images/latestproducts4.png'
import chair5 from '@/public/images/latestproducts5.png'
import chair6 from '@/public/images/latestproducts6.png'
export default function LatestProducts() {
  return (
    <div className='px-24'>
        <h2 className='text-3xl text-center p-6 font-josefin'>Latest Products</h2>
        <div className='grid grid-cols-3 gap-4 items-center justify-center'>
            <div className='p-4 bg-[#F7F7F7] '>
                <Image
                src={chair1}
                alt="image"
                height={250}
                width={250}
                />
                <div className='flex justify-between'>
                <p className=' text-xs  text-[#151875] font-bold'>Comfort Handy Craft</p>
                <div className='flex gap-4'>
                <p className=' text-xs text-[#151875]'>$42.00</p>
                <p className=' text-xs text-[#FB2E86]'>$65.00</p>
                </div>
                </div>
            </div>
            <div className='p-4 bg-[#F7F7F7] '>
                <Image
                src={chair2}
                alt="image"
                height={250}
                width={250}
                />
                  <div className='flex justify-between'>
                <p className=' text-xs  text-[#151875] font-bold'>Comfort Handy Craft</p>
                <div className='flex gap-4'>
                <p className=' text-xs text-[#151875]'>$42.00</p>
                <p className=' text-xs text-[#FB2E86]'>$65.00</p>
                </div>
                </div>
                 </div>
            <div className='p-4 bg-[#F7F7F7] '>
                <Image
                src={chair3}
                alt="image"
                height={250}
                width={250}
                className=''
                />
                  <div className='flex justify-between'>
                <p className=' text-xs  text-[#151875] font-bold'>Comfort Handy Craft</p>
                <div className='flex gap-4'>
                <p className=' text-xs text-[#151875]'>$42.00</p>
                <p className=' text-xs text-[#FB2E86]'>$65.00</p>
                </div>
                </div>
                 </div>
            <div className='p-4 bg-[#F7F7F7] '>
                <Image
                src={chair4}
                alt="image"
                height={250}
                width={250}
                />
                  <div className='flex justify-between'>
                <p className=' text-xs  text-[#151875] font-bold'>Comfort Handy Craft</p>
                <div className='flex gap-4'>
                <p className=' text-xs text-[#151875]'>$42.00</p>
                <p className=' text-xs text-[#FB2E86]'>$65.00</p>
                </div>
                </div>
                  </div>
            <div className='p-4 bg-[#F7F7F7] '>
                <Image
                src={chair5}
                alt="image"
                height={250}
                width={250}
                />
                 <div className='flex justify-between'>
                <p className=' text-xs  text-[#151875] font-bold'>Comfort Handy Craft</p>
                <div className='flex gap-4'>
                <p className=' text-xs text-[#151875]'>$42.00</p>
                <p className=' text-xs text-[#FB2E86]'>$65.00</p>
                </div>
                </div>
                 </div>
            <div className='p-4 bg-[#F7F7F7] '>
                <Image
                src={chair6}
                alt="image"
                height={250}
                width={250}
                />
                 <div className='flex justify-between'>
                <p className=' text-xs  text-[#151875] font-bold'>Comfort Handy Craft</p>
                <div className='flex gap-4'>
                <p className=' text-xs text-[#151875]'>$42.00</p>
                <p className=' text-xs text-[#FB2E86]'>$65.00</p>
                </div>
                </div>
                 </div>
          
          
        </div>
    </div>
  )
}
