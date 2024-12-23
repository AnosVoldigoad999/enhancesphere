import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
function Hero() {
  return (
    <section className='hero flex flex-col h-[100vh] items-center text-center justify-center w-full bg-[#111827E6] text-white'>
        <motion.h1
        initial={{
            x:100,
            opacity:0
        }}
        animate={{
            x:0,
            opacity:1
        }}
        transition={{
            duration:0.7,
            ease:"easeInOut"
        }}
        className='text-4xl md:text-6xl font-bold w-[70%] '>Transform Your Life with EnhanceSphere</motion.h1>
        <motion.p
        initial={{
            x:-100,
            opacity:0
        }}
        animate={{
            x:0,
            opacity:1
        }}
        transition={{
            duration:0.7,
            ease:"easeInOut"
        }}
        className='text-xl md:text-3xl my-[30px] w-[70%]'>Unlock your full potential in personal well-being, financial success, and professional growth with our tailored strategies.</motion.p>
        <motion.div
        initial={{
            x:100,
            opacity:0
        }}
        animate={{
            x:0,
            opacity:1
        }}
        transition={{
            duration:0.7,
            ease:"easeInOut"
        }}
        className='flex w-full justify-center'>
            <Link className='cursor-pointer bg-[#9333EA] p-[2%] mx-[10px] rounded-[5px]'><button >Start Your Journey</button></Link>
            <Link className='cursor-pointer bg-[#020817] p-[2%] text-white mx-[10px] rounded-[5px]'><button >Learn More</button></Link>
        </motion.div>
    </section>
  )
}

export default Hero