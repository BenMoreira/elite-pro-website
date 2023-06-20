import React from 'react'
import Navoption from './Navoption'

const Navbar = () => {
  return (
    <nav className='w-full fixed p-6 border border-b-black-100'>
        <div className='flex flex-row justify-between items-center'>
            <div className='text-black-100 text-2xl font-bold'>
                Elite-Pro Construction Inc.
            </div>

            <div className='flex flex-row items-center gap-4'>
                <Navoption path='Home' link='/' />
                <Navoption path='About' link='/About' />
                <Navoption path='Services' link='/Services' />
                <Navoption path='Gallery' link='/Gallery' />
                <Navoption path='Contact' link='/Contact' />
            </div>
        </div>
    </nav>
  )
}

export default Navbar