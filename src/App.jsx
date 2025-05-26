 
import { useState } from 'react'
import './App.css'
import Announcement from './compnents/Announcement'
import Fotter from './compnents/Fotter'
import Header from './compnents/Header'
import Main from './compnents/Main'
import NewsLetter from './compnents/NewsLetter'
import { CartContext  } from './context'
 
function App() {
 const [cartData,setCartdData] = useState([])
//  console.log(sortByLowestPrice())
  return (
    <>
       <CartContext.Provider value={{cartData,setCartdData}}>
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
