import Image from 'next/image'
import React from 'react'
import accesories1 from "@/app/assets/images/accessories1.png"
import accesories2 from "@/app/assets/images/accessories2.png"
import accesories3 from "@/app/assets/images/accessories3.png"
import accesories4 from "@/app/assets/images/accessories4.png"
import accesories5 from "@/app/assets/images/accessories5.png"
export default function CartInformation() {
  return (
    <div className='bg-white px-24 pb-12'>
        <h2 className='text-2xl pt-24 pb-12 text-[#1D3178]'>Hekto Demo</h2>
        <p className='text-sm pb-12 text-[#1D3178]' >Cart/ Information/ Shipping/ Payment</p>
        <div className='flex gap-4'>
    <div className='h-full w-2/3 bg-[#F8F8FD] p-8'>
        <div className='h-full w-full'>
            <div className='flex justify-between py-12'>
                <h3 className='text-xl font-bold text-[#1D3178]'>Contact Information</h3>
                <a href='#' className='text-[#C1C8E1]'>Already have an account? Log in </a>
            </div>
            <p className='text-[#C1C8E1]'>Email or mobile phone number</p>
            <div className='w-full border-b border-2 border-[#BFC6E0] mt-2'></div>
            <div>
            <div className='flex gap-2 justify-start items-center py-12'>
            <svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="8" height="8" rx="1" fill="#19D16F"/>
<path d="M6.23746 2.40335C6.20648 2.37211 6.16961 2.34731 6.12899 2.33038C6.08837 2.31346 6.0448 2.30475 6.0008 2.30475C5.95679 2.30475 5.91322 2.31346 5.8726 2.33038C5.83198 2.34731 5.79512 2.37211 5.76413 2.40335L3.2808 4.89001L2.23746 3.84335C2.20529 3.81227 2.16731 3.78783 2.12569 3.77143C2.08407 3.75503 2.03963 3.74698 1.9949 3.74776C1.95018 3.74853 1.90604 3.75811 1.86501 3.77594C1.82399 3.79377 1.78688 3.81951 1.7558 3.85168C1.72472 3.88386 1.70028 3.92184 1.68388 3.96345C1.66748 4.00507 1.65943 4.04951 1.66021 4.09424C1.66098 4.13897 1.67056 4.1831 1.68839 4.22413C1.70622 4.26516 1.73196 4.30227 1.76413 4.33335L3.04413 5.61335C3.07512 5.64459 3.11199 5.66939 3.1526 5.68631C3.19322 5.70323 3.23679 5.71195 3.2808 5.71195C3.3248 5.71195 3.36837 5.70323 3.40899 5.68631C3.44961 5.66939 3.48648 5.64459 3.51746 5.61335L6.23746 2.89335C6.2713 2.86213 6.2983 2.82425 6.31677 2.78208C6.33524 2.73992 6.34477 2.69438 6.34477 2.64835C6.34477 2.60231 6.33524 2.55678 6.31677 2.51461C6.2983 2.47245 6.2713 2.43456 6.23746 2.40335V2.40335Z" fill="white"/>
</svg>

<p className='text-sm text-[#8A91AB]' >Keep me up to date on news and excluive offers</p>
            </div>
            </div>

            <div className='flex justify-start py-12'>
                <h3 className='text-xl font-bold text-[#1D3178]'>Shipping address</h3>
            </div>
            <div className='flex flex-col gap-8'>
            <div className='flex justify-between w-full gap-4'>
           <div className='w-full'>
           <p className='text-[#C1C8E1]'>First name (optional)</p>
           <div className='w-full border-b border-2 border-[#BFC6E0] mt-2'></div>
           </div>
           <div className='w-full'>
           <p className='text-[#C1C8E1]'>Last name</p>
           <div className='w-full border-b border-2 border-[#BFC6E0] mt-2'></div>
           </div>
            </div>
            <div>
           <p className='text-[#C1C8E1]'>Address</p>
           <div className='w-full border-b border-2 border-[#BFC6E0] mt-2'></div>
           </div>
            <div>
           <p className='text-[#C1C8E1]'>Appaetnentment,suit,e.t.c (optinal)</p>
           <div className='w-full border-b border-2 border-[#BFC6E0] mt-2'></div>
           </div>
            <div>
           <p className='text-[#C1C8E1]'>City</p>
           <div className='w-full border-b border-2 border-[#BFC6E0] mt-2'></div>
           </div>
            <div>
            <div className='flex justify-between w-full gap-4'>
           <div className='w-full'>
           <p className='text-[#C1C8E1]'>Bangladesh</p>
           <div className='w-full border-b border-2 border-[#BFC6E0] mt-2'></div>
           </div>
           <div className='w-full'>
           <p className='text-[#C1C8E1]'>Postal Code</p>
           <div className='w-full border-b border-2 border-[#BFC6E0] mt-2'></div>
           </div>
            </div>
            </div>
            <button
            type='submit'
            className='bg-[#FB2E86] h-11 w-[182px] text-white rounded-sm'>
                Continue Shopping
            </button>
            </div>


        </div>
    </div>
    <div className='w-1/3 '>
    <div className='flex flex-col gap-4'>
    <div className='flex justify-between border-b border-[#E1E1E4]'>
        <Image
        src={accesories1}
        alt="image"
        width={83}
        height={87}
        />
        <div>
            <h6>Ut diam consequat</h6>
            <p className='text-[#A1A8C1]'>Color:Brown</p>
            <p className='text-[#A1A8C1]'>Size:XL</p>
        </div>
        <div className='flex justify-center items-center'>
            <h6>$32.00</h6>
        </div>
    </div>
    <div className='flex justify-between border-b border-[#E1E1E4]'>
        <Image
        src={accesories2}
        alt="image"
        width={83}
        height={87}
        />
        <div>
            <h6>Ut diam consequat</h6>
            <p className='text-[#A1A8C1]'>Color:Brown</p>
            <p className='text-[#A1A8C1]'>Size:XL</p>
        </div>
        <div className='flex justify-center items-center'>
            <h6>$32.00</h6>
        </div>
    </div>
    <div className='flex justify-between border-b border-[#E1E1E4]'>
        <Image
        src={accesories3}
        alt="image"
        width={83}
        height={87}
        />
        <div>
            <h6>Ut diam consequat</h6>
            <p className='text-[#A1A8C1]'>Color:Brown</p>
            <p className='text-[#A1A8C1]'>Size:XL</p>
        </div>
        <div className='flex justify-center items-center'>
            <h6>$32.00</h6>
        </div>
    </div>
    <div className='flex justify-between border-b border-[#E1E1E4]'>
        <Image
        src={accesories4}
        alt="image"
        width={83}
        height={87}
        />
        <div>
            <h6>Ut diam consequat</h6>
            <p className='text-[#A1A8C1]'>Color:Brown</p>
            <p className='text-[#A1A8C1]'>Size:XL</p>
        </div>
        <div className='flex justify-center items-center'>
            <h6>$32.00</h6>
        </div>
    </div>
    <div className='flex justify-between border-b border-[#E1E1E4]'>
        <Image
        src={accesories5}
        alt="image"
        width={83}
        height={87}
        />
        <div>
            <h6>Ut diam consequat</h6>
            <p className='text-[#A1A8C1]'>Color:Brown</p>
            <p className='text-[#A1A8C1]'>Size:XL</p>
        </div>
        <div className='flex justify-center items-center'>
            <h6>$32.00</h6>
        </div>
    </div>
    <div className='bg-[#F4F4FC] p-6'>
        <div className='flex justify-between border-b-2 border-[#E8E6F1] py-4 '>
        <h6>Subtotals:</h6>
        <p>£219.00</p>
        </div>
        <div className='flex justify-between border-b-2 border-[#E8E6F1] py-4 '>
        <h6>Totals:</h6>
        <p>£325.00</p>
        </div>
        <div className='flex gap-2 justify-start items-center py-12'>
            <svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="8" height="8" rx="1" fill="#19D16F"/>
<path d="M6.23746 2.40335C6.20648 2.37211 6.16961 2.34731 6.12899 2.33038C6.08837 2.31346 6.0448 2.30475 6.0008 2.30475C5.95679 2.30475 5.91322 2.31346 5.8726 2.33038C5.83198 2.34731 5.79512 2.37211 5.76413 2.40335L3.2808 4.89001L2.23746 3.84335C2.20529 3.81227 2.16731 3.78783 2.12569 3.77143C2.08407 3.75503 2.03963 3.74698 1.9949 3.74776C1.95018 3.74853 1.90604 3.75811 1.86501 3.77594C1.82399 3.79377 1.78688 3.81951 1.7558 3.85168C1.72472 3.88386 1.70028 3.92184 1.68388 3.96345C1.66748 4.00507 1.65943 4.04951 1.66021 4.09424C1.66098 4.13897 1.67056 4.1831 1.68839 4.22413C1.70622 4.26516 1.73196 4.30227 1.76413 4.33335L3.04413 5.61335C3.07512 5.64459 3.11199 5.66939 3.1526 5.68631C3.19322 5.70323 3.23679 5.71195 3.2808 5.71195C3.3248 5.71195 3.36837 5.70323 3.40899 5.68631C3.44961 5.66939 3.48648 5.64459 3.51746 5.61335L6.23746 2.89335C6.2713 2.86213 6.2983 2.82425 6.31677 2.78208C6.33524 2.73992 6.34477 2.69438 6.34477 2.64835C6.34477 2.60231 6.33524 2.55678 6.31677 2.51461C6.2983 2.47245 6.2713 2.43456 6.23746 2.40335V2.40335Z" fill="white"/>
</svg>

<p className='text-xs text-[#8A91AB]' >Keep me up to date on news and excluive offers</p>
            </div>
            <div className='flex items-center justify-center w-full'>
                <button type='submit' className='bg-[#19D16F] text-white w-full h-full p-2  rounded-sm'>
                    Proceed to Checkout
                </button>
            </div>
    </div>
    </div>
   
    </div>
    </div>
    </div>
  )
}
