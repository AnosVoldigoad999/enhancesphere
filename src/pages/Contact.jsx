import React from 'react'
import { motion } from 'framer-motion'
function Contact() {
  return (
    <div className='text-white  flex flex-col items-center text-center'>
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
        <motion.form
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
        onSubmit={(e)=>{e.preventDefault()}}
            className='text-start flex flex-col items-center w-[80%] md:w-[30%] max-w-[488px] p-[20px] border my-[50px] rounded-[5px]'
            >
            <label className='flex flex-col my-[20px] w-[100%]'>
                Name
                <input className='bg-transparent mt-[5px] border  p-[10px] rounded-[5px]' type="text" name="name" id="name" />
            </label>
            <label className='flex flex-col my-[20px] w-[100%]'>
                Email
                <input className='bg-transparent mt-[5px] border  p-[10px] rounded-[5px]' type="email" name="email" id="email" />
            </label>
            <label className='flex flex-col my-[20px] w-[100%]'>
                Message
                <textarea className='bg-transparent mt-[5px] border h-[100px]  p-[10px] rounded-[5px]' name="message" id="message" />
            </label>
            <button className='bg-[#9333EA] p-[10px] rounded-[1px]'>Send Message</button>
        </motion.form>
    </div>
  )
}

export default Contact