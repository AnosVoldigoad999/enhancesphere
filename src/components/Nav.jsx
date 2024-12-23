import React, {useEffect, useState} from 'react'
import {Link, useLocation} from "react-router-dom"
import { RiMenu3Fill } from "react-icons/ri";
import { IoIosClose } from "react-icons/io";
import { motion, AnimatePresence } from 'framer-motion';
function Nav() {
    const location = useLocation()
    const [currentLocation, setCurrentLocation] = useState(location.pathname)
    useEffect(()=>{
        setCurrentLocation(location.pathname)
    }, [location]) 
    const [isScrolling, setIsScrolling] = useState(false)
    window.addEventListener("scroll", ()=>{
      if(window.scrollY>=10){
        setIsScrolling(true)
      }else{
        setIsScrolling(false)
      }
    })
    const [showMenu, setShowMenu] = useState(false)
  return (
    <nav className='fixed flex items-center justify-between w-[100vw] top-0 p-[2%] h-[90px] /*bg-gray-900*/ nav '>
      <AnimatePresence>
      {
        isScrolling && <motion.div 
        initial={{
          opacity:0
        }}
        animate={{
          opacity:1
        }}
        exit={{
          opacity:0
        }}
        transition={{
          duration:0.2,
          ease:"easeInOut"
        }}
        className="navback" />
      }
      </AnimatePresence>
        <Link to="/" className='z-[1]'><h1 className={`text-xl md:text-3xl ${isScrolling?"text-black":"text-white"}`}>EnhanceSphere</h1></Link>
        <ul className={`hidden md:flex items-center justify-between w-1/2 text-lg ${isScrolling?"text-black":"text-white"}`}>
            <Link to="/" className={`link w-[fit-content] cursor-pointer rounded-[5px] p-[2%]  ${currentLocation==="/"?"bg-[#9333EA] text-white ":""}`}><li >Home</li></Link>
            <Link to="/services" className={`linkw-[fit-content] cursor-pointer rounded-[5px] p-[2%]  ${currentLocation==="/services"?"bg-[#9333EA] text-white ":""}`}><li >Services</li></Link>
            <Link to="/about" className={`link w-[fit-content] cursor-pointer rounded-[5px] p-[2%]   ${currentLocation==="/about"?"bg-[#9333EA] text-white ":""}`}><li >About</li></Link>
            <Link to="/contact" className={`link w-[fit-content] cursor-pointer rounded-[5px] p-[2%]  ${currentLocation==="/contact"?"bg-[#9333EA] text-white ":""}`}><li >Contact</li></Link>
            <Link to="/" className={`link w-[fit-content] cursor-pointer rounded-[5px] p-[2%] bg-[#9333EA] text-white`}><li >Book a Call</li></Link>
        </ul>
        {!showMenu?<RiMenu3Fill onClick={()=>{setShowMenu(!showMenu)}} className={`block md:hidden w-[25px] h-[25px] ${isScrolling?"text-black":"text-white"} icon`} />:<IoIosClose onClick={()=>{setShowMenu(!showMenu)}} className={`block md:hidden w-[25px] h-[25px] ${isScrolling?"text-black":"text-white"} icon`} />}
       {
        showMenu &&  <div className='mobilemenu p-[10px] flex flex-col items-center top-[90px] left-0 right-0 md:hidden fixed  z-[20] text-black'>
        <ul className='flex flex-col h-[100%] items-center justify-between w-full text-lg'>
            <Link onClick={()=>{setShowMenu(false)}} to="/" className={`link w-[fit-content] cursor-pointer rounded-[5px] p-[2%] `}><li >Home</li></Link>
            <Link onClick={()=>{setShowMenu(false)}} to="/services" className={`link w-[fit-content] cursor-pointer rounded-[5px] p-[2%] `}><li >Services</li></Link>
            <Link onClick={()=>{setShowMenu(false)}} to="/about" className={`link w-[fit-content] cursor-pointer rounded-[5px] p-[2%] `}><li >About</li></Link>
            <Link onClick={()=>{setShowMenu(false)}} to="/contact" className={`link w-[fit-content] cursor-pointer rounded-[5px] p-[2%] `} ><li >Contact</li></Link>
            <Link onClick={()=>{setShowMenu(false)}} to="/" className={`link w-[90%] cursor-pointer rounded-[5px] p-[2%] bg-[#9333EA] text-center text-white`}><li >Book a Call</li></Link>
        </ul>
        </div>
       }
    </nav>
  )
}

export default Nav