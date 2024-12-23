import React, {useEffect, useState} from 'react'
import {Link, useLocation} from "react-router-dom"
import { RiMenu3Fill } from "react-icons/ri";
import { IoIosClose } from "react-icons/io";
function Nav() {
    const location = useLocation()
    const [currentLocation, setCurrentLocation] = useState(location.pathname)
    useEffect(()=>{
        setCurrentLocation(location.pathname)
    }, [location]) 
    const [showMenu, setShowMenu] = useState(false)
  return (
    <nav className='fixed flex items-center justify-between left-0 right-0 top-0 p-[2%] h-[90px] bg-gray-900 nav '>
        <h1 className='text-xl md:text-3xl text-white'>EnhanceSphere</h1>
        <ul className='hidden md:flex items-center justify-between w-1/2 text-lg'>
            <Link to="/" className={`link w-[fit-content] cursor-pointer rounded-[5px] p-[2%] ${currentLocation==="/"?"bg-[#9333EA] text-white":"text-[#D1D5DB]"}`}><li >Home</li></Link>
            <Link to="/services" className={`linkw-[fit-content] cursor-pointer rounded-[5px] p-[2%] ${currentLocation==="/services"?"bg-[#9333EA] text-white":"text-[#D1D5DB]"}`}><li >Services</li></Link>
            <Link to="/about" className={`link w-[fit-content] cursor-pointer rounded-[5px] p-[2%] ${currentLocation==="/about"?"bg-[#9333EA] text-white":"text-[#D1D5DB]"}`}><li >About</li></Link>
            <Link to="/contact" className={`link w-[fit-content] cursor-pointer rounded-[5px] p-[2%] ${currentLocation==="/contact"?"bg-[#9333EA] text-white":"text-[#D1D5DB]"}`}><li >Contact</li></Link>
            <Link to="/" className={`link w-[fit-content] cursor-pointer rounded-[5px] p-[2%] bg-[#9333EA] text-white`}><li >Book a Call</li></Link>
        </ul>
        {!showMenu?<RiMenu3Fill onClick={()=>{setShowMenu(!showMenu)}} className='block md:hidden w-[25px] h-[25px] text-white' />:<IoIosClose onClick={()=>{setShowMenu(!showMenu)}} className='block md:hidden w-[25px] h-[25px] text-white' />}
       {
        showMenu &&  <div className='p-[10px] flex flex-col items-center top-[90px] left-0 right-0 md:hidden fixed  z-[20] bg-gray-900'>
        <ul className='flex flex-col h-[100%] items-center justify-between w-full text-lg'>
            <Link onClick={()=>{setShowMenu(false)}} to="/" className={`link w-[fit-content] cursor-pointer rounded-[5px] p-[2%] text-[#D1D5DB]`}><li >Home</li></Link>
            <Link onClick={()=>{setShowMenu(false)}} to="/services" className={`linkw-[fit-content] cursor-pointer rounded-[5px] p-[2%] text-[#D1D5DB]`}><li >Services</li></Link>
            <Link onClick={()=>{setShowMenu(false)}} to="/about" className={`link w-[fit-content] cursor-pointer rounded-[5px] p-[2%] text-[#D1D5DB] `}><li >About</li></Link>
            <Link onClick={()=>{setShowMenu(false)}} to="/contact" className={`link w-[fit-content] cursor-pointer rounded-[5px] p-[2%] text-[#D1D5DB]`} ><li >Contact</li></Link>
            <Link onClick={()=>{setShowMenu(false)}} to="/" className={`link w-[90%] cursor-pointer rounded-[5px] p-[2%] bg-[#9333EA] text-center text-white`}><li >Book a Call</li></Link>
        </ul>
        </div>
       }
    </nav>
  )
}

export default Nav