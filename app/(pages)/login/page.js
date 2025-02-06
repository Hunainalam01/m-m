import Header from '@/app/components/Header'
import React from 'react'
import Button from '@/app/components/Button'

export default function page() {
  return (
    <div>
        <Header
        title="My Account"
        subTitle="Home.pages"
        subTitle2=".My Account"
        />
        <div className='flex items-center justify-center bg-white'>
            <div className='flex flex-col gap-4 shadow-md shadow-gray-500 p-20'>
                <h2 className='text-xl text-center font-bold'>Login</h2>
                <p>Please login using account details below.</p>
                <input
                type='email'
                name='email'
                placeholder='Email Address'
                className='p-2 border border-gray-500'
                />
                <input
                type='password'
                name='password'
                placeholder='Password'
                className='p-2 border border-gray-500'

                />
                <a href='#'>Forgot your password?</a>
                <Button
                text="Sign In"
                
                />
                <p>Dont't have an Account? Create account</p>

            </div>
        </div>
    </div>
  )
}
