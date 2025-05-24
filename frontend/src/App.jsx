import { useState } from 'react'

import './App.css'
import Home from './pages/Home'
import Navbar from './component/Navbar'
import Footer from './component/Footer'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import AllBooks from './pages/AllBooks'
import LogIn from './pages/LogIn'
import SignUp from './pages/SignUp'
import Cart from './pages/Cart'
import Profile from './pages/Profile'
function App() {

  return (
    <>
    <Router>
      <Navbar/>
      <Routes>
<Route exact path='/' element={<Home/>}/>
<Route path='/cart' element={<Cart/>}/>
<Route path='/profile' element={<Profile/>}/>
<Route  path='/all-books' element={<AllBooks/>}/>
<Route  path='/login' element={<LogIn/>}/>
<Route  path='/signup' element={<SignUp/>}/>
      </Routes>
      <Footer/>
    </Router>
    
    
 
        
     
    </>
  )
}

export default App
