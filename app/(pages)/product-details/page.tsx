import Header from '@/app/components/Header'
import Image from 'next/image'
import React from 'react'
import product1 from '@/app/assets/images/product1.png'
import product2 from '@/app/assets/images/product2.png'
import product3 from '@/app/assets/images/product3.png'
import product4 from '@/app/assets/images/product4.png'
export default function page() {
  return (
    <div>
        <Header
        title="Product Details"
        subTitle="Home.Pages"
        subTitle2=".Product Details"
        />
        <div className='shadow-2xl h-full w-full px-24'>
        <div className='flex'>
          <div className='flex flex-col gap-2'>
      <Image
      src={product1}
      alt="image"
      height={155}
      width={155}
      />
      <Image
      src={product2}
      alt="image"
      height={155}
      width={155}
      />
      <Image
      src={product3}
      alt="image"
      height={155}
      width={155}
      />
          </div>
          <Image
      src={product2}
      alt="image"
      height={350}
      width={350}
      />
          </div>
          <div>
          </div>
        </div>
    </div>
  )
}
