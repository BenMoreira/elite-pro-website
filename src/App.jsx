import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import Gallery from './pages/Gallery'
import Contact from './pages/Contact'

function App() {
  return (
    <div className='flex flex-col'>
      <Navbar />

      <div className='w-full'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/About' element={<About />} />
          <Route path='/Services' element={<Services />} />
          <Route path='/Gallery' element={<Gallery />} />
          <Route path='/Contact' element={<Contact />} />
        </Routes>
      </div>
    </div>
  )
}

export default App
