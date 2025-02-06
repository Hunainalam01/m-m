import Header from '@/app/components/Header'
import React from 'react'
import Button from '@/app/components/Button'
import Image from 'next/image'
import H2 from '@/app/components/H2'

export default function page() {
  return (
    <div>
        <Header
        title="Contact Us"
        subTitle="Home.pages"
        subTitle2=".Contact Us"
        />
        <div className='w-full items-center justify-center bg-white'>
          <div className='flex'>

            <div className='w-1/2 flex flex-col gap-4 shadow-md p-10'>
                <h2 className='text-xl text-center font-bold'>Information About Us</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis neque ultrices mattis aliquam, malesuada diam est. Malesuada sem tristique amet erat vitae eget dolor lobortis. Accumsan faucibus vitae lobortis quis bibendum quam.</p>
               <div className='flex gap-4'>
                <div className='bg-blue-600 h-10 w-10 rounded-full'></div>
                <div className='bg-pink h-10 w-10 rounded-full'></div>
                <div className='bg-sky-400 h-10 w-10 rounded-full'></div>
               </div>
            </div>
            <div className='w-1/2 flex flex-col gap-4 shadow-md p-10'>
                <h2 className='text-xl text-center font-bold'>Contact Way</h2>
               
               <div className='grid grid-cols-2 gap-4'>
                <div className='flex gap-2'>
                <div className='bg-blue-600 h-10 w-10 rounded-full'></div>
                Tel: 877-67-88-99
                E-Mail: shop@store.com
                 </div>
                <div className='flex gap-2'>
                <div className='bg-pink h-10 w-10 rounded-full'></div>
                Support Forum
                For over 24hr
                                 </div>
                <div className='flex gap-2'>
                <div className='bg-sky-400 h-10 w-10 rounded-full'></div>
                20 Margaret st, London Great britain, 3NM98-LK
                 </div>
                <div className='flex gap-2'>
                <div className='bg-green-500 h-10 w-10 rounded-full'></div>
                Free standard shipping on all orders.
                 </div>
                   </div>
            </div>
          </div>
          <div className='flex'>

            <div className='w-1/2 p-10'>
          <div className='flex flex-col gap-8'>

               <H2
                                  text="Get in Touch"
                                  />
                                  <p >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis neque ultrices  tristique amet erat vitae eget dolor los vitae lobortis quis bibendum quam.</p>
                                   <input
                                                  type='text'
                                                  name='name'
                                                  placeholder='Your Name'
                                                  className='p-2 border border-gray-500'
                                                  />
                                                  <input
                                                  type='email'
                                                  name='email'
                                                  placeholder='Your Email'
                                                  className='p-2 border border-gray-500'
                                  
                                                  />
                                                  <input
                                                  type='text'
                                                  name='subject'
                                                  placeholder='Subject'
                                                  className='p-2 border border-gray-500'
                                  
                                                  />
                                                  <textarea
                                                  name='message'
                                                  placeholder='Type your message'
                                                  className='p-2 border border-gray-500'
                                                  cols={6}
                                                  />
                                                  
                                                  <Button
                                                  text="Send Mail"
                                                  
                                                  />
                              
            </div>
            </div>
            <div className='w-1/2 p-10'>
            <Image src="@/public/images/Group.png" 
                  alt="image" 
                  width={300}
                  height={300}
                  className="w-full object-cover"
                  />
            </div>
            </div>
        </div>
    </div>
  )
}
