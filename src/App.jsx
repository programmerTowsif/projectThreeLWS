 
import { useState,useReducer } from 'react'
import './App.css'
import Announcement from './compnents/Announcement'
import Fotter from './compnents/Fotter'
import Header from './compnents/Header'
import Main from './compnents/Main'
import NewsLetter from './compnents/NewsLetter'
import { CartContext  } from './context'
import { cartReducer, initialState } from './reducer/CartReducer'
 
function App() {
 
  const [state,dispatch] = useReducer(cartReducer,initialState)
  return (
    <>
       <CartContext.Provider value={{state,dispatch}}>
       <Announcement />
       <Header />
       <Main  />
       <NewsLetter />
       <Fotter />
       </CartContext.Provider>
    </>
  )
}

export default App
