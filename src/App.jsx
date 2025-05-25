 
import './App.css'
import Announcement from './compnents/Announcement'
import Fotter from './compnents/Fotter'
import Header from './compnents/Header'
import Main from './compnents/Main'
import NewsLetter from './compnents/NewsLetter'

function App() {
 
//  console.log(sortByLowestPrice())
  return (
    <>
       <Announcement />
       <Header />
       <Main  />
       <NewsLetter />
       <Fotter />
    </>
  )
}

export default App
