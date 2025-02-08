import Image from 'next/image'
import React from 'react'
import trendy1 from '../../public/images/trendy1.png'
import trendy2 from '../../public/images/trendy2.png'
import trendy3 from '../../public/images/trendy3.png'
import trendy4 from '../../public/images/trendy4.png'
import trendy5 from '../../public/images/trendy5.png'
import trendy6 from '../../public/images/trendy6.png'
import trendy7 from '../../public/images/trendy7.png'
import trendy8 from '../../public/images/trendy8.png'
import trendy9 from '../../public/images/trendy9.png'

function TrendyProducts() {
    const trendingProducts = [
        { id: 1, name: 'Cantilever chair', price: '$42.00', image: trendy1 },
        { id: 2, name: 'Cantilever chair', price: '$38.00', image: trendy2 },
        { id: 3, name: 'Cantilever chair', price: '$39.00', image: trendy3 },
        { id: 4, name: 'Cantilever chair', price: '$40.00', image: trendy4 }
    ]

    const executiveChairs = [
        { id: 1, name: 'Executive Seat chair', price: '$32.00', image: trendy7  },
        { id: 2, name: 'Executive Seat chair', price: '$32.00', image: trendy8 },
        { id: 3, name: 'Executive Seat chair', price: '$32.00', image: trendy9 }
    ]

    return (
        <div className="w-full px-4 md:px-8 lg:px-16 py-12 bg-white">
            {/* Trending Products Section */}
            <div className="mb-12">
                <h2 className="text-[#1A0B5B] text-2xl md:text-3xl font-bold text-center mb-8">
                    Trending Products
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
                    {trendingProducts.map((product) => (
                        <div
                            key={product.id}
                            className="flex flex-col items-center p-4 bg-[#F6F7FB] rounded-lg hover:shadow-lg transition-shadow"
                        >
                            <div className="relative w-full aspect-square mb-4">
                                <Image
                                    src={product.image}
                                    alt={product.name}
                                    fill
                                    className="object-contain"
                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                                />
                            </div>
                            <h3 className="text-[#151875] text-lg font-medium text-center">
                                {product.name}
                            </h3>
                            <p className="text-[#151875] font-semibold mt-1">{product.price}</p>
                        </div>
                    ))}
                </div>
            </div>

            {/* Promotional Sections */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                {/* Left Promo */}
                <div className="bg-[#FFF6FB] p-6 rounded-lg">
                    <h3 className="text-xl font-semibold mb-4">23% off in all products</h3>
                    <button className="text-[#FB2E86] font-medium hover:underline">
                        Shop Now
                    </button>
                    <div className="relative w-full aspect-square mt-4">
                        <Image
                            src={trendy5}
                            alt="Promotional clock"
                            fill
                            className="object-contain"
                            sizes="(max-width: 768px) 100vw, 33vw"
                        />
                    </div>
                </div>

                {/* Middle Promo */}
                <div className="bg-[#EEEFFB] p-6 rounded-lg">
                    <h3 className="text-xl font-semibold mb-4">23% off in all products</h3>
                    <button className="text-[#FB2E86] font-medium hover:underline">
                        View Collection
                    </button>
                    <div className="relative w-full aspect-square mt-4">
                        <Image
                            src={trendy6}
                            alt="Promotional furniture"
                            fill
                            className="object-contain"
                            sizes="(max-width: 768px) 100vw, 33vw"
                        />
                    </div>
                </div>

                {/* Right Side Executive Chairs */}
                <div className="space-y-4">
                    {executiveChairs.map((chair) => (
                        <div
                            key={chair.id}
                            className="flex items-center space-x-4 p-3 bg-white rounded-lg hover:shadow-md transition-shadow"
                        >
                            <div className="relative w-20 h-20">
                                <Image
                                    src={chair.image}
                                    alt={chair.name}
                                    fill
                                    className="object-contain"
                                    sizes="80px"
                                />
                            </div>
                            <div>
                                <h4 className="text-[#151875] font-medium">{chair.name}</h4>
                                <p className="text-[#151875] font-semibold">{chair.price}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default TrendyProducts
