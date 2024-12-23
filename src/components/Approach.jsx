import React from 'react'
import { GoPeople } from "react-icons/go";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import { GrLineChart } from "react-icons/gr";
import { motion } from 'framer-motion'
function Approach() {
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
        className='text-4xl md:text-6xl font-bold mt-[10px] mb-[50px] text-[#C084FC]'>Our Approach</motion.h1>
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
        className='w-90% md:w-[60%] text-xl '>We specialize in tailoring solutions for each unique individual or business by focusing on:</motion.p>
        <div className='flex flex-col md:flex-row items-center justify-center'>
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
            className='bg-[#14532D] m-[10px] flex flex-col items-center w-[fit-content] p-[20px] md:p-[2%]'>
                <IoMdCheckmarkCircleOutline className='text-green-400 w-[30px] h-[30px]' />
                <h2 className='text-xl my-[20px]'>Comprehensive Assessment</h2>
                <p>We conduct in-depth assessments of your goals, challenges, and current situation to create a personalized growth plan.</p>
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
            className='bg-[#1E3A8A] m-[10px] flex flex-col items-center w-[fit-content] p-[20px] md:p-[2%]'>
                <GrLineChart className='text-blue-400 w-[30px] h-[30px]' />
                <h2 className='text-xl my-[20px]'>Integrated Strategies</h2>
                <p>Our action plans interconnect personal, financial, and professional dimensions for holistic growth.</p>
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
                delay:0.07*2
            }}
            className='bg-[#581C87] m-[10px] flex flex-col items-center w-[fit-content] p-[20px] md:p-[2%]'>
                <GoPeople className='text-purple-400 w-[30px] h-[30px]' />
                <h2 className='text-xl my-[20px]'>Ongoing Support</h2>
                <p>We provide continuous guidance and support to ensure lasting change and sustainable growth.</p>
            </motion.div>
        </div>
    </section>
  )
}

export default Approach