import React from 'react'
import blog1 from '../../public/images/blog-1.png'
import blog2 from '../../public/images/blog-2.png'
import blog3 from '../../public/images/blog-3.png'
import blog4 from '../../public/images/blog-4.png'
import Image from 'next/image'


function Blog() {
    return (
        <div className='w-full h-auto border-2 border-black flex flex-col items-center p-10 '>
            {/* one */}
            <div className='py-6 border-2 border-black'>
                <Image className=' '
                    src={blog4}
                    width={600}
                    height={100}
                    alt='banner-image'
                >
                </Image>
            </div>
            {/* two */}
            <div className='border-2 border-black w-full text-center text-3xl font-semibold p-6'>
                <h1>Leatest Blog</h1>
            </div>


            {/* three */}
            <div className='w-full py-4 h-auto gap-4 flex flex-col items-center justify-center px-14 bg-green-400 sm:grid- sm:grid-cols-12 '>
                {/* blog-1 */}
                <div className='border-2 border-black h-[420px] overflow-hidden rounded-md w-full' >

                    {/* image */}
                    <div className='relative h-[45%] border-2 border-white'>
                        <Image src={blog1} alt='blog-image' layout='fill' objectFit="cover" />
                    </div>
                    {/* content */}

                    {/* <Link sr>Read More</Link> */}
                    <div>

                    </div>
                </div>

                {/* blog-2 */}
                <div></div>
                {/* blog-3 */}
                <div></div>
            </div>
        </div>
    )
}

export default Blog
