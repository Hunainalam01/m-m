import Image from 'next/image'
import React from 'react'
import uniqueImage from '../../public/images/unique-image.png'
import Link from 'next/link'

function Unique() {
    return (
        <div className="bg-[#f1f0ff] min-h-screen md:h-[579px] w-full flex flex-col md:flex-row items-center justify-center p-4 md:p-8">
            {/* left */}
            <div className='w-full md:w-1/2 flex justify-center md:justify-end mb-8 md:mb-0'>
                <div className="relative w-full max-w-[500px] aspect-square">
                    <Image
                        alt='Product showcase image'
                        src={uniqueImage}
                        fill
                        className="object-contain"
                        sizes="(max-width: 768px) 100vw, 500px"
                    />
                </div>
            </div>

            {/* right */}
            <div className="w-full md:w-1/2 flex flex-col justify-center items-center md:items-start px-4 md:px-8">
                <div className="w-full max-w-[500px]">
                    {/* heading */}
                    <div className="mb-6">
                        <h1 className="text-xl md:text-2xl lg:text-3xl font-semibold text-[#151875]">
                            Unique Features Of Latest &
                            Trending Products
                        </h1>
                    </div>

                    {/* content */}
                    <div className="space-y-4 mb-8">
                        {/* line 1 */}
                        <div className='flex items-start'>
                            <div className='h-[11px] w-[11px] bg-red-600 rounded-full mt-1.5 mr-3 flex-shrink-0'></div>
                            <p className='text-[#ACABC3] text-sm md:text-base'>All frames constructed with hardwood solids and laminates</p>
                        </div>

                        {/* line 2 */}
                        <div className='flex items-start'>
                            <div className='h-[11px] w-[11px] bg-blue-600 rounded-full mt-1.5 mr-3 flex-shrink-0'></div>
                            <p className='text-[#ACABC3] text-sm md:text-base'>Reinforced with double wood dowels, glue, screw - nails corner
                                blocks and machine nails</p>
                        </div>

                        {/* line 3 */}
                        <div className='flex items-start'>
                            <div className='h-[11px] w-[11px] bg-[#2bf5cc] rounded-full mt-1.5 mr-3 flex-shrink-0'></div>
                            <p className='text-[#ACABC3] text-sm md:text-base tracking-wide'>Arms, backs and seats are structurally reinforced</p>
                        </div>
                    </div>

                    {/* button and price */}
                    <div className="flex flex-col sm:flex-row items-start gap-4">
                        <Link 
                            href="/show" 
                            className="w-full sm:w-auto px-6 py-3 bg-[#fb2e86] text-white text-center rounded hover:bg-[#e91d75] transition-colors"
                        >
                            Add To Cart
                        </Link>

                        <div className="flex flex-col">
                            <p className='font-semibold text-sm md:text-base text-[#151875]'>
                                B&B Italian Sofa
                            </p>
                            <h2 className="text-lg md:text-xl font-bold text-[#151875]">
                                $32.00
                            </h2>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Unique