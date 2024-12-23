import React from 'react'
import { motion } from 'framer-motion'
function AboutEn() {
  return (
    <section className='text-white w-full flex flex-col  items-center text-center'>
        <div className='abouthero flex flex-col items-center justify-center'>
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
        className='text-4xl md:text-6xl font-bold mt-[10px] mb-[50px]'>About EnhanceSphere</motion.h1>
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
        className='w-90% md:w-[60%] text-xl'>At EnhanceSphere, we believe in the power of holistic growth. Our mission is to empower individuals and businesses to reach their fullest potential by providing comprehensive strategies that address personal, financial, and professional aspects of life.</motion.p>
        </div>
        <div className='flex flex-col md:flex-row items-center justify-center mt-[50px]'>
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
            className='bg-[#581C87] text-start   m-[10px] w-[fit-content] md:w-[40%] h-[fit-content] min-h-[300px] p-[30px]'>
                <h2 className='text-2xl font-bold my-[10px] '>Our Mission</h2>
                <p className='text-xl'>Our mission is to elevate lives by connecting personal, financial, and professional success. We aim to help individuals and businesses grow in harmony with their true potential, fostering long-term success and happiness.</p>
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
            viewport={{
                once:true
            }}
            transition={{
                duration:0.7,
                ease:"easeInOut",
                delay:0.07
            }}
            className='bg-[#1E3A8A] text-start  m-[10px] w-[fit-content] md:w-[40%] h-[fit-content] min-h-[300px] p-[30px] '>
                <h2 className='text-2xl font-bold my-[10px] '>Our Vision</h2>
                <p className='text-xl'>To be a beacon of transformation, inspiring individuals and businesses globally to strive for continuous improvement and lasting success. We envision a world where personal fulfillment, financial stability, and professional excellence are within reach for everyone.</p>
            </motion.div>
        </div>
    </section>
  )
}

export default AboutEn