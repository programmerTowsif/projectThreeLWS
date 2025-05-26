 
 
import { useContext } from 'react'
import { getImage } from '../../utils/cine-utility'
import { CartContext } from '../../context'
 
export default function Cart({item}) {
 const {state,dispatch}= useContext(CartContext
  )
  const handleRemoveFromCartItem=(item)=>{
    dispatch({
      type:"REMOVE_FROM_CART",
     payload:item
     })
  }
   
  return (
    <div class="flex items-start space-x-4 pb-4 border-b border-gray-200 mb-4">
    <div class="w-16 h-16 bg-gray-100 rounded flex-shrink-0 flex items-center justify-center">
      <img src={getImage(item.image)} alt="Gradient Graphic T-shirt"
        class="h-full w-auto object-cover"/>
    </div>
    <div class="flex-grow">
      <div class="flex justify-between">
        <h3 class="font-medium">{item.title}</h3>
        <span class="text-red-500 text-sm" onClick={()=>handleRemoveFromCartItem(item)}>×</span>
      </div>
      <p class="text-sm text-gray-500">Size: {item.size}</p>
      <p class="text-sm text-gray-500">Color: {item.color}</p>
      <div class="flex justify-between items-center mt-2">
        <p class="font-bold">${item.price}</p>
        <div class="flex items-center space-x-2">
          <button class="w-6 h-6 bg-gray-100 rounded flex items-center justify-center">−</button>
          <span class="text-sm">1</span>
          <button class="w-6 h-6 bg-gray-100 rounded flex items-center justify-center">+</button>
        </div>
      </div>
    </div>
  </div>
  )
}
