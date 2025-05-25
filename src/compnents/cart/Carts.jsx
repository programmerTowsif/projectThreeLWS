import React from 'react'
import Cart from './Cart'
import Orders from './Orders'

export default function Carts() {
  return (
    <div class="lg:col-span-1">
        <div class="bg-white rounded-lg p-6 border border-gray-200">
          <h2 class="text-2xl font-bold mb-6">YOUR CART</h2>

          {/* <!-- Cart Item 1 --> */}
          <Cart />
          {/* <!-- Order Summary --> */}
          <Orders />
        </div>
      </div>
  )
}
