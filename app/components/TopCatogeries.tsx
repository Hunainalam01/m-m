'use client'

import Image from 'next/image'
import React, { useState } from 'react'
import category1 from '../../public/images/cat1.png'
import category2 from '../../public/images/cat2.png'
import category3 from '../../public/images/cat3.png'
import category4 from '../../public/images/cat1.png'


function TopCategories() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const products = [
    {
      id: 1,
      name: 'Mini LCW Chair',
      price: '$56.00',
      image: category1,
      tag: 'New'
    },
    {
      id: 2,
      name: 'Mini LCW Chair',
      price: '$56.00',
      image: category2
    },
    {
      id: 3,
      name: 'Mini LCW Chair',
      price: '$56.00',
      image: category3
    },
    {
      id: 4,
      name: 'Mini LCW Chair',
      price: '$56.00',
      image: category4
    }
  ]

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % products.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + products.length) % products.length)
  }

  const goToSlide = (index:any) => {
    setCurrentSlide(index)
  }

  return (
    <div className="w-full px-4 md:px-8 lg:px-16 py-12 bg-white">
      {/* Heading */}
      <h2 className="text-[#1A0B5B] text-2xl md:text-3xl font-bold text-center mb-12">
        Top Categories
      </h2>

      {/* Product Slider */}
      <div className="relative max-w-6xl mx-auto">
        {/* Products Container */}
        <div className="overflow-hidden">
          <div 
            className="flex transition-transform duration-300 ease-in-out"
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            <div className="flex w-full justify-center gap-6 md:gap-8 flex-nowrap min-w-full">
              {products.map((product, index) => (
                <div 
                  key={product.id}
                  className={`relative flex-shrink-0 w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-4 ${
                    index === currentSlide ? 'border-2 border-[#9877E7] rounded-lg' : ''
                  }`}
                >
                  {/* Product Card */}
                  <div className="relative group">
                    {/* Image Container with Circle Background */}
                    <div className="relative aspect-square bg-[#F6F7FB] rounded-full p-4 mb-4">
                      <Image
                        src={product.image}
                        alt={product.name}
                        fill
                        className="object-contain p-4"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                      />
                      {product.tag && (
                        <span className="absolute top-4 left-4 bg-[#00FF66] text-white text-sm px-3 py-1 rounded-full">
                          {product.tag}
                        </span>
                      )}
                    </div>
                    
                    {/* Product Info */}
                    <div className="text-center">
                      <h3 className="text-[#151875] font-medium mb-1">{product.name}</h3>
                      <p className="text-[#151875] font-semibold">{product.price}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Navigation Arrows */}
        <button 
          onClick={prevSlide}
          className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-6 bg-white p-2 rounded-full shadow-lg hover:bg-gray-100"
        > .
          <svg className="w-6 h-6 text-[#9877E7]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <button 
          onClick={nextSlide}
          className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-6 bg-white p-2 rounded-full shadow-lg hover:bg-gray-100"
        >.
          <svg className="w-6 h-6 text-[#9877E7]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>

        {/* Navigation Dots */}
        <div className="flex justify-center gap-2 mt-8">
          {products.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-2 h-2 rounded-full transition-colors ${
                index === currentSlide ? 'bg-[#FB2E86]' : 'bg-gray-300'
              }`}
            >.</button>



          ))}
        </div>
      </div>
    </div>
  )
}

export default TopCategories