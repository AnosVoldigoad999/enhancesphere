import React from 'react'
import { FiArrowRight } from "react-icons/fi";
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion'
function Commitment() {
  return (
    <section className='text-white w-full flex flex-col  items-center text-center mt-[50px]'>
        <motion.h1
          initial={{
            y:100,
            opacity:0
        }}
        whileInView={{
            y:0,
            opacity:1
        }}
        viewport={{
            once:true
        }}
        transition={{
            duration:0.7,
            ease:"easeInOut"
        }}
        className='text-4xl md:text-6xl font-bold mt-[10px] mb-[50px] text-[#C084FC]'>Our Commitment to You</motion.h1>
        <motion.div 
          initial={{
            y:100,
            opacity:0
        }}
        whileInView={{
            y:0,
            opacity:1
        }}
        viewport={{
            once:true
        }}
        transition={{
            duration:0.7,
            ease:"easeInOut"
        }}
        className='bg-gradient-to-r from-purple-600 to-blue-600 p-[30px] flex flex-col items-center'>
            <p className='text-2xl'>At EnhanceSphere, we are committed to your success. We believe in building lasting relationships with our clients, supporting you every step of the way on your journey to personal, financial, and professional excellence.</p>
            <p className='text-xl font-bold my-[30px]'>Your growth is our success. Let's transform your life together.</p>
            <Link to="/contact"><button className='bg-white text-[#C084FC] flex items-center p-[10px] rounded-[2px]'>Get Started Now <FiArrowRight className='ml-[20px]' /></button></Link>
        </motion.div>
    </section>
  )
}

export default Commitment