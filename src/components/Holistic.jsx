import React from 'react'
import { motion } from 'framer-motion'
function Holistic() {
  return (
    <section className=' text-black flex flex-col items-center w-full'>
        <motion.h1
           initial={{
            y:100,
            opacity:0
        }}
        whileInView={{
            y:0,
            opacity:1
        }}
        transition={{
            duration:1,
            ease:"easeInOut"
        }}
        viewport={{
            once:true
        }}
        className='text-4xl md:text-6xl font-bold mt-[10px] mb-[50px]'>Our Holistic Approach</motion.h1>
        <div className='holsgrid'>
            <motion.div
               initial={{
                y:100,
                opacity:0
            }}
            whileInView={{
                y:0,
                opacity:1
            }}
            transition={{
                duration:1,
                ease:"easeInOut"
            }}
            viewport={{
                once:true
            }}
            className='bg-[#374151] flex flex-col p-[5%] bg-[hsla(0,_0%,_0%,_0.2)]'>
                <img className='w-full' src="/images/personaldev.jpg" alt="personaldev" />
                <h2 className='my-[20px] text-2xl font-bold'>Personal Development</h2>
                <p>Unlock your potential and build meaningful relationships through our comprehensive personal growth programs.</p>
            </motion.div>
            <motion.div 
               initial={{
                y:100,
                opacity:0
            }}
            whileInView={{
                y:0,
                opacity:1
            }}
            transition={{
                duration:1,
                ease:"easeInOut",
                delay:0.07
            }}
            viewport={{
                once:true
            }}
            className='bg-[#374151] flex flex-col p-[5%] bg-[hsla(0,_0%,_0%,_0.2)]'>
                <img className='w-full' src="/images/financialem.webp" alt="financialem" />
                <h2 className='my-[20px] text-2xl font-bold'>Financial Empowerment</h2>
                <p>Secure your future with smart investments and growth strategies tailored to your unique financial situation.</p>
            </motion.div>
            <motion.div 
             initial={{
                y:100,
                opacity:0
            }}
            whileInView={{
                y:0,
                opacity:1
            }}
            transition={{
                duration:1,
                ease:"easeInOut",
                delay:0.07*2
            }}
            viewport={{
                once:true
            }}
            className='bg-[#374151] flex flex-col p-[5%] bg-[hsla(0,_0%,_0%,_0.2)]'>
                <img className='w-full' src="/images/personaldev.jpg" alt="personaldev" />
                <h2 className='my-[20px] text-2xl font-bold'>Professional Excellence</h2>
                <p>Advance your career with tailored skills and strategies designed to help you excel in your chosen field.</p>
            </motion.div>
        </div>
    </section>
  )
}

export default Holistic