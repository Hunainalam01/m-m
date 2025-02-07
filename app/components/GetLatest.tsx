import Image from 'next/image'
import React from 'react'
import Link from 'next/link'
function GetLatest() {
  return (
    <div className='get-latest-bg gap-3 w-full  h-[462px] flex flex-col items-center justify-center  '>
      {/* one */}
      <div className='font-semibold md:text-4xl text-3xl text-center text-[#151875] tracking-wider w-full p-5   '>
        <h2>
          Get Leatest Update By Subscribe
          0ur Newslater
        </h2>
      </div>

      {/* two */}
      <div className='p-3 sm:w-[173px] w-[30%] h-[50px] bg-[#fb2e86] font-thin text-white flex items-center justify-center'>
        <Link href={"/shop"}>
          Shop Now
        </Link>
      </div>
    </div>

  )
}

export default GetLatest
