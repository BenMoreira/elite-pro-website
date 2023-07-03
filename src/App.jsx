import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import Gallery from './pages/Gallery'
import Contact from './pages/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <div className='flex flex-col min-h-screen'>
      <Navbar />

      <div className='w-full flex-grow'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/About' element={<About />} />
          <Route path='/Services' element={<Services />} />
          <Route path='/Gallery' element={<Gallery />} />
          <Route path='/Contact' element={<Contact />} />
        </Routes>
      </div>

      <Footer />
    </div>
  )
}

export default App

//bg-[#d9d9d9] Looks good ask if want it
