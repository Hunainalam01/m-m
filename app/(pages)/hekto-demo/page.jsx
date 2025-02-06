import Header from '@/app/components/Header'
import CartInformation from '@/app/components/CartInformation'
import React from 'react'
export default function page() {
  return (
    <div>
        <Header
        title="Hekto Demo"
        />
        <CartInformation/>
    </div>
  )
}
