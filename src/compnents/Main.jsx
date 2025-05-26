import React, { useState } from 'react'
import ProductSort from './main/ProductSort'
import Products from './main/Products'
import Carts from './cart/Carts'

export default function Main({products,setProducts,sortByLowestPrice}) {
 const [showCart,setShowCart] =useState(true)
  return (
    <main class="container mx-auto px-4 md:px-8 py-8">
    <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
      {/* <!-- Products Section (2/3 width on large screens) --> */}
      <div class="lg:col-span-2">
      <ProductSort onSortByPrice={sortByLowestPrice} setProducts={setProducts} productso={products}/>

        {/* <!-- Products Grid --> */}
       <Products products={products} setProducts={setProducts} />
      </div>

      {/* <!-- Cart Section (1/3 width on large screens) --> */}
      {
        showCart && <Carts />
      }
     
    </div>
  </main>
  )
}
