import React from 'react'

import Product from './Product'
import {getAllProducts}from'../../data/Products.js'
export default function Products() {
  const products = getAllProducts()
  return (
    <div className="grid grid-cols-3 gap-4">
    {/* <!-- Product 1 --> */}
   {
    products.map((item,index)=>(
      <Product item={item} key={index} />
    ))
   }
   


  </div>
  )
}
