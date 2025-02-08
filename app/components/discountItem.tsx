import Image from 'next/image'
import Link from 'next/link'
import trendy10 from '../../public/images/trendy10.png'
import React from 'react'

function DiscountSection() {
  return (
    <div className="w-full px-4 md:px-8 lg:px-16 py-12 bg-white">
      {/* Heading and Categories */}
      <div className="text-center mb-8">
        <h2 className="text-[#1A0B5B] text-2xl md:text-3xl font-bold mb-6">
          Discount Item
        </h2>
        <div className="flex flex-wrap justify-center gap-4 md:gap-8">
          <Link 
            href="#wood" 
            className="text-[#FB2E86] hover:underline"
          >
            Wood Chair
          </Link>
          <span className="text-gray-400">•</span>
          <Link 
            href="#plastic" 
            className="text-[#151875] hover:text-[#FB2E86]"
          >
            Plastic Chair
          </Link>
          <span className="text-gray-400">•</span>
          <Link 
            href="#sofa" 
            className="text-[#151875] hover:text-[#FB2E86]"
          >
            Sofa Collection
          </Link>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12">
        {/* Left Content */}
        <div className="w-full md:w-1/2 max-w-xl">
          <h3 className="text-[#151875] text-xl md:text-2xl font-bold mb-4">
            20% Discount Of All Products
          </h3>
          <h4 className="text-[#FB2E86] text-lg md:text-xl mb-4">
            Eams Sofa Compact
          </h4>
          <p className="text-[#B7BACB] mb-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu eget 
            feugiat habitasse nec, bibendum condimentum.
          </p>

          {/* Features List */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4 text-[#FB2E86]" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
              </svg>
              <span className="text-[#B7BACB]">Material expose like metals</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4 text-[#FB2E86]" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
              </svg>
              <span className="text-[#B7BACB]">Clear lines and geomatric figures</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4 text-[#FB2E86]" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
              </svg>
              <span className="text-[#B7BACB]">Simple neutral colours</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4 text-[#FB2E86]" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
              </svg>
              <span className="text-[#B7BACB]">Material expose like metals</span>
            </div>
          </div>

          <button className="bg-[#FB2E86] text-white px-8 py-3 rounded hover:bg-[#e91d75] transition-colors">
            Shop Now
          </button>
        </div>

        {/* Right Image */}
        <div className="w-full md:w-1/2 relative">
          <div className="relative aspect-square max-w-[500px] mx-auto">
            <div className="absolute inset-0  "></div>
            <Image
              src={trendy10} 
              alt="Discount Chair"
              fill
              className="object-contain"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        
        </div>
      </div>
    </div>
  )
}

export default DiscountSection
