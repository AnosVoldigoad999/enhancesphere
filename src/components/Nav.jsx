import React from 'react'
import {Link} from "react-router-dom"
function Nav() {
  return (
    <nav className='fixed flex items-center justify-between w-full p-[2%] h-[90px] bg-gray-900 nav text-[#D1D5DB]'>
        <h1 className='text-2xl md:text-3xl'>EnhanceSphere</h1>
        <ul className='flex items-center justify-between w-1/2 text-lg'>
            <li className='cursor-pointer'>Home</li>
            <li className='cursor-pointer'>Services</li>
            <li className='cursor-pointer'>About</li>
            <li className='cursor-pointer'>Contact</li>
            <li className='cursor-pointer'>Book a Call</li>
        </ul>
    </nav>
  )
}

export default Nav