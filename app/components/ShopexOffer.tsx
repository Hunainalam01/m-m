import Image from 'next/image'
import React from 'react'
import offer1 from '@/public/images/offer1.png'
import offer2 from '@/public/images/offer2.png'
import offer3 from '@/public/images/offer3.png'
import offer4 from '@/public/images/offer4.png'
export default function ShopexOffer() {

  return (
    <div className='px-24 py-12'>
        <h3 className='text-3xl text-center font-josefin'>What Shopex Offer!</h3>
       <div className='grid grid-cols-4 gap-4 p-4 justify-center items-center'>
       <div className='flex flex-col items-center justify-center gap-2 shadow-lg px-8 py-12'>
            <Image
            src={offer1}
            alt='image'
            width={65}
            height={65}
            />
            <p className='font-bold text-[#151875]'>24/7 Support</p>
            <p className='text-[#1A0B5B] text-base  '>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.</p>
        </div>
       <div className='flex flex-col items-center justify-center gap-2 shadow-lg px-8 py-12'>
            <Image
            src={offer2}
            alt='image'
            width={65}
            height={65}
            />
            <p className='font-bold text-[#151875]'>24/7 Support</p>
            <p className='text-[#1A0B5B] text-base  '>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.</p>
        </div>
       <div className='flex flex-col items-center justify-center gap-2 shadow-lg px-8 py-12'>
            <Image
            src={offer3}
            alt='image'
            width={65}
            height={65}
            />
            <p className='font-bold text-[#151875]'>24/7 Support</p>
            <p className='text-[#1A0B5B] text-base  '>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.</p>
        </div>
       <div className='flex flex-col items-center justify-center gap-2 shadow-lg px-8 py-12'>
            <Image
            src={offer4}
            alt='image'
            width={65}
            height={65}
            />
            <p className='font-bold text-[#151875]'>24/7 Support</p>
            <p className='text-[#1A0B5B] text-base  '>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.</p>
        </div>
     </div>
    </div>
  )
}
