import React from 'react'
import { useState } from 'react'
import {BiMenuAltRight} from 'react-icons/bi'
import {GrClose} from 'react-icons/gr'
import Navoption from './Navoption'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className='w-full p-6 border-b border-b-black-100'>
        <div className='flex flex-row justify-between items-center'>
            <div className='text-lg md:text-black-100 md:text-2xl font-bold'>
                Elite-Pro Construction Inc.
            </div>

            <div className='hidden md:flex flex-row items-center gap-4'>
                <Navoption path='Home' link='/' />
                <Navoption path='About' link='/About' />
                <Navoption path='Services' link='/Services' />
                <Navoption path='Gallery' link='/Gallery' />
                <Navoption path='Contact' link='/Contact' />
            </div>

            <div className='visible md:hidden'>
              <BiMenuAltRight size='2rem' onClick={() => setIsOpen((prev) => !prev)} />

              <div className={isOpen ?
              'absolute w-full h-full top-0 left-0 bg-white z-10 flex flex-col justify-evenly items-center' : ''
              }>
                <div className={isOpen ? 'absolute top-0 right-0 px-8 py-8' : 'hidden'} onClick={() => setIsOpen(false)}>
                  <GrClose />
                </div>

                <div className={isOpen ? 'flex flex-col items-center justify-between min-h-[250px]' : 'hidden'} onClick={() => setIsOpen(false)}>
                  <Navoption path='Home' link='/' />
                  <Navoption path='About' link='/About' />
                  <Navoption path='Services' link='/Services' />
                  <Navoption path='Gallery' link='/Gallery' />
                  <Navoption path='Contact' link='/Contact' />
                </div>
              </div>
            </div>
        </div>
    </nav>
  )
}

export default Navbar