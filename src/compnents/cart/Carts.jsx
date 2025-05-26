import React, { useContext } from 'react'
import Cart from './Cart'
import Orders from './Orders'
import { CartContext } from '../../context'

export default function Carts() {
  const {cartData} = useContext(CartContext)
  console.log(cartData)
  return (
    <div class="lg:col-span-1">
        <div class="bg-white rounded-lg p-6 border border-gray-200">
          <h2 class="text-2xl font-bold mb-6">YOUR CART</h2>

          {/* <!-- Cart Item 1 --> */}
          {
            cartData.map((item,index)=>{
              return(  <Cart key={index} item={item}/>)
            })
          }
        
          {/* <!-- Order Summary --> */}
          <Orders />
        </div>
      </div>
  )
}
