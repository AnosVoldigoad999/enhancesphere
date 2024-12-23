import React from 'react'
import { motion } from 'framer-motion'
import { FiArrowRight } from "react-icons/fi";
function Contact() {
  return (
    <section className='text-white  flex flex-col items-center text-center'>
        <div className='contacthero flex flex-col items-center justify-center'>
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
        className='text-4xl md:text-6xl font-bold mt-[10px] mb-[50px]'>Our Commitment to You</motion.h1>
        <motion.p 
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
        className='text-xl'
        >
        We're here to help you transform your life and business. Reach out to us to begin your journey today.
        </motion.p>
        </div>
       <div className='mt-[50px] flex flex-col md:flex-row p-[5%] md:p-[2%] items-center justify-between text-black text-start'>
        <motion.img
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
        className='w-[100%] md:w-[45%] mb-[40px]' src="/images/contact.jpg" alt="contact" />
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
        className='w-[90%] md:w-1/2'>
        <h1 className='text-4xl md:text-6xl font-bold mt-[10px] mb-[50px]'>Leave us a Message</h1>
        <p>Have questions or need assistance? We're here to help! Leave us a message, and we'll get back to you promptly with the answers and support you need.</p>
        <form onSubmit={(e)=>{e.preventDefault()}} className='flex flex-col'>
            <input type="email" placeholder='Email' className='outline-none border-b-[1px] border-b-[black] h-[80px] p-[10px]' />
            <input type="text" placeholder='Name' className='outline-none border-b-[1px] border-b-[black] h-[80px] p-[10px]' />
            <input type="text" placeholder='Subject' className='outline-none border-b-[1px] border-b-[black] h-[80px] p-[10px]' />
            <input type="text" placeholder='Message' className='outline-none border-b-[1px] border-b-[black] h-[80px] p-[10px]' />
            <button className='flex items-center justify-between bg-[#9333EA] mt-[30px] text-white p-[20px] rounded-[5px]'>Send a Message <FiArrowRight /></button>
            </form>    
        </motion.div>    
       </div>
    </section>
  )
}

export default Contact