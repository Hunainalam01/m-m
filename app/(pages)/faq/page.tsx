import Button from '@/app/components/Button'
import H2 from '@/app/components/H2'
import Header from '@/app/components/Header'
import React from 'react'
import bannerImage from '@/public/images/banner.png'
import Image from 'next/image'
export default function page() {
  return (
    <div>
        <Header
               title="FAQ"
               subTitle="Home.pages"
               subTitle2=".Faq"
               />
               <div className='flex gap-8 p-10'>
                <div className='flex flex-col gap-8'>
                    <H2
                    text="General Information"
                    />
                    <div>
                    <p className='font-bold py-2'>Eu dictumst cum at sed euismood condimentum?</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt sed tristique mollis vitae, consequat gravida sagittis.</p>
                    </div>
                    <div>
                    <p className='font-bold py-2'>Eu dictumst cum at sed euismood condimentum?</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt sed tristique mollis vitae, consequat gravida sagittis.</p>
                    </div>
                    <div>
                    <p className='font-bold py-2'>Eu dictumst cum at sed euismood condimentum?</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt sed tristique mollis vitae, consequat gravida sagittis.</p>
                    </div>
                    <div>
                    <p className='font-bold py-2'>Eu dictumst cum at sed euismood condimentum?</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt sed tristique mollis vitae, consequat gravida sagittis.</p>
                    </div>
                </div>
                <div className='bg-grey flex gap-6 flex-col p-10'>
                <H2
                    text="Ask a Question"
                    />
                     <input
                                    type='text'
                                    name='email'
                                    placeholder='Your Name'
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
                                    <a href='#'>Forgot your password?</a>
                                    <Button
                                    text="Send Mail"
                                    
                                    />
                </div>
               </div>
               <Image
               src={bannerImage}
               alt="image"
               />
    </div>
  )
}
