 

 
import { useContext } from "react";
import { getImage } from "../../utils/cine-utility.js";
import Rating from "./Rating.jsx";
import { CartContext } from "../../context/index.js";

/// import data

export default function Product({ item }) {
  
 const {state,dispatch} = useContext(CartContext)
  
 const handleAddToCart =(e,item)=>{
  e.stopPropagation()
  const find = state.cartData.find((cart)=>{
    return cart.id === item.id 
  })
  if(!find){
     dispatch({
      type: "Add_TO_CART",
      payload:{
        ...item
      }
     })
  }
   
 }

 const handleRemovedToCart =(e,item)=>{
  
   dispatch({
    type:"REMOVE_FROM_CART",
   payload:item
   })


 }

  return (
    <div className="bg-gray-100 rounded-lg overflow-hidden transition-transform hover:scale-[1.02] duration-300">
      <div className="h-48 bg-gray-200 flex items-center justify-center">
        <img
          src={getImage(item.image)}
          alt="Gradient Graphic T-shirt"
          className="h-full w-auto object-cover"
        />
      </div>

      <div className="p-4">
        <h3 className="font-medium">{item.name} </h3>
        <div className="flex items-center justify-between">
          <div className="flex items-center my-1">
            <div className="flex text-yellow-400">{Rating(item.ratting)}</div>
            <span className="text-xs text-gray-500 ml-1">4/5</span>
          </div>
          <span className="text-xs text-gray-700">({item.stock} pcs left)</span>
        </div>
        <p className="font-bold">${item.price} </p>
 
          <button
            onClick={(e)=>handleAddToCart(e,item)}
            className="w-full mt-2 bg-gray-800 py-1 text-gray-100 rounded flex items-center justify-center"
          >
            Add to Cart
          </button>
         
          <button
             onClick={(e)=>handleRemovedToCart(e,item)}
            className="w-full mt-2 bg-red-800 py-1 text-gray-100 rounded flex items-center justify-center"
          >
            Remove from Cart
          </button>
      
      </div>
    </div>
  );
}
