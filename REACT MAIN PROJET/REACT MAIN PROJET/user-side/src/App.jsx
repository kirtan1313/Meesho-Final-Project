
import { Route, Routes } from 'react-router'
import Footer from './Components/Footer/Footer'
import Header from './Components/Header/Header'
import MainBanner from './Components/MainBanner/MainBanner'
import Women from './Container/Women/Women'
import Men from './Container/Men/Men'
import Story from './Container/Story/Story'
import Contact from './Container/Contact/Contact'

function App() {
  

  return (
    <>
      <Header/>
      <Routes>
         <Route path='/' element={<MainBanner/>} />
         <Route path='/women' element={<Women/>} />
         <Route path='/men' element={<Men/>} />
         <Route path='/story' element={<Story/>} />
         <Route path='/contact' element={<Contact/>} />
         
      </Routes>
      {/* <Products/> */}
      {/* <Women/> */}
      <Footer/>
    </>
  )
}

export default App
