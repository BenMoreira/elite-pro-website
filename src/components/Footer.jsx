import React from 'react'
import Navoption from './Navoption'

const Footer = () => {
  return (
    <footer className='w-full bg-black-100 text-white mt-auto'>
        <div className='h-[8vh] flex flex-row justify-center items-center gap-4 md:gap-8'>
            <a href='/About'>About</a>
            <a href='/Services'>Services</a>
            <a href='/' className='md:text-lg font-bold'>Elite-Pro Construction Inc.</a>
            <a href='/Gallery'>Gallery</a>
            <a href='/Contact'>Contact</a>
        </div>
    </footer>
  )
}

export default Footer