import React from 'react'
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import { GrLineChart } from "react-icons/gr";
import { GoPeople } from "react-icons/go";
import { MdOutlineBusinessCenter } from "react-icons/md";
import { motion } from 'framer-motion'
function WhyEn() {
  return (
    <section className='text-white w-full flex flex-col mt-[50px] items-center text-center'>
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
        className='text-4xl md:text-6xl font-bold mt-[10px] mb-[50px] text-[#C084FC]'>Why EnhanceSphere Stands Out</motion.h1>
        <div className='whyengrid'>
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
            className='m-[10px] flex flex-col items-center justify-center p-[20px] md:p-[30px] bg-[#1F2937]'>
                <div className='flex items-center'>
                    <IoMdCheckmarkCircleOutline className='w-[20px] h-[30px] mr-[10px] text-green-400' />
                    <h2 className='text-xl'>Comprehensive Coverage</h2>
                </div>
                <p className='my-[20px]'>We don't just focus on one area of growth; we enhance every aspect of your life to ensure holistic development and success.</p>
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
            className='m-[10px] flex flex-col items-center justify-center p-[20px] md:p-[30px] bg-[#1F2937]'>
                <div className='flex items-center'>
                    <MdOutlineBusinessCenter className='w-[20px] h-[30px] mr-[10px] text-blue-400' />
                    <h2 className='text-xl'>Industry Expertise</h2>
                </div>
                <p className='my-[20px]'>Our team includes certified life coaches, financial planners, and professional mentors with years of experience in their respective fields.</p>
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
            className='m-[10px] flex flex-col items-center justify-center p-[20px] md:p-[30px] bg-[#1F2937]'>
                <div className='flex items-center'>
                    <GrLineChart className='w-[20px] h-[30px] mr-[10px] text-purple-400' />
                    <h2 className='text-xl'>Results-Oriented Approach</h2>
                </div>
                <p className='my-[20px]'>Our strategies are practical, measurable, and results-driven. We focus on tangible outcomes that make a real difference in your life and career.</p>
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
                delay:0.07*3
            }}
            className='m-[10px] flex flex-col items-center justify-center p-[20px] md:p-[30px] bg-[#1F2937]'>
                <div className='flex items-center'>
                    <GoPeople className='w-[20px] h-[30px] mr-[10px] text-yellow-400' />
                    <h2 className='text-xl'>Personalized Solutions</h2>
                </div>
                <p className='my-[20px]'>We understand that every individual and business is unique. That's why we tailor our programs to your specific needs, goals, and circumstances.</p>
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
                delay:0.07*4
            }}
            className='m-[10px] flex flex-col items-center justify-center p-[20px] md:p-[30px] bg-[#1F2937]'>
                <div className='flex items-center'>
                    <IoMdCheckmarkCircleOutline className='w-[20px] h-[30px] mr-[10px] text-orange-400' />
                    <h2 className='text-xl'>Cutting-Edge Methodologies</h2>
                </div>
                <p className='my-[20px]'>We stay at the forefront of personal development, financial strategies, and professional growth techniques to bring you the most effective solutions.</p>
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
                delay:0.07*5
            }}
            className='m-[10px] flex flex-col items-center justify-center p-[20px] md:p-[30px] bg-[#1F2937]'>
                <div className='flex items-center'>
                    <GrLineChart className='w-[20px] h-[30px] mr-[10px] text-blue-400' />
                    <h2 className='text-xl'>Holistic Integration</h2>
                </div>
                <p className='my-[20px]'>Our unique approach integrates personal well-being, financial success, and professional growth, recognizing that these areas are interconnected in our lives.</p>
            </motion.div>
            
        </div>
    </section>
  )
}

export default WhyEn