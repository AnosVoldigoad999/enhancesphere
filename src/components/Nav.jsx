import React, {useEffect, useState} from 'react'
import {Link, useLocation} from "react-router-dom"
import { RiMenu3Fill } from "react-icons/ri";
function Nav() {
    const location = useLocation()
    const [currentLocation, setCurrentLocation] = useState(location.pathname)
    useEffect(()=>{
        setCurrentLocation(location.pathname)
    }, [location]) 
  return (
    <nav className='fixed flex items-center justify-between left-0 right-0 top-0 p-[2%] h-[90px] bg-gray-900 nav '>
        <h1 className='text-2xl md:text-3xl text-white'>EnhanceSphere</h1>
        <ul className='hidden md:flex items-center justify-between w-1/2 text-lg'>
            <Link to="/" className={`w-[fit-content] cursor-pointer rounded-[5px] p-[2%] ${currentLocation==="/"?"bg-[#9333EA] text-white":"text-[#D1D5DB]"}`}><li >Home</li></Link>
            <Link to="/services" className={`w-[fit-content] cursor-pointer rounded-[5px] p-[2%] ${currentLocation==="/services"?"bg-[#9333EA] text-white":"text-[#D1D5DB]"}`}><li >Services</li></Link>
            <Link to="/about" className={`w-[fit-content] cursor-pointer rounded-[5px] p-[2%] ${currentLocation==="/about"?"bg-[#9333EA] text-white":"text-[#D1D5DB]"}`}><li >About</li></Link>
            <Link to="/contact" className={`w-[fit-content] cursor-pointer rounded-[5px] p-[2%] ${currentLocation==="/contact"?"bg-[#9333EA] text-white":"text-[#D1D5DB]"}`}><li >Contact</li></Link>
            <Link to="/" className={`w-[fit-content] cursor-pointer rounded-[5px] p-[2%] bg-[#9333EA] text-white`}><li >Book a Call</li></Link>
        </ul>
        <RiMenu3Fill className='block md:hidden w-[40px] h-[40px] text-white' />
    </nav>
  )
}

export default Nav