import React from 'react'
import { FaChevronRight } from "react-icons/fa";
import { motion } from 'framer-motion'
function Why() {
  return (
    <section className='text-white w-full flex flex-col  items-center text-center'>
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
            ease:"easeInOut",
        }}
        viewport={{
            once:true
        }}
        className='text-4xl md:text-6xl font-bold mt-[10px] mb-[50px]'>Why Choose EnhanceSphere?</motion.h1>
        <div className='w-full flex flex-col-reverse md:flex-row justify-between p-[2%]'>
           <div className='flex flex-col w-full md:w-1/2'>
                <motion.div
                 initial={{
                    x:-100,
                    opacity:0
                }}
                whileInView={{
                    x:0,
                    opacity:1
                }}
                transition={{
                    duration:1,
                    ease:"easeInOut"
                }}
                viewport={{
                    once:true
                }}
                className='my-[10px] flex bg-[#374151] p-[3%] text-start'>
                    <FaChevronRight className='text-[#9333EA] mt-[1%] mr-[10px]' />
                    <div>
                     <h2 className='text-xl font-bold'>Comprehensive Coverage</h2>
                     <p>We don't just focus on one area of growth; we enhance every aspect of your life to ensure holistic development.</p>
                    </div>
                </motion.div>
                <motion.div 
                 initial={{
                    x:-100,
                    opacity:0
                }}
                whileInView={{
                    x:0,
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
                className='my-[10px] flex bg-[#374151] p-[3%] text-start'>
                    <FaChevronRight className='text-[#9333EA] mt-[1%] mr-[10px]' />
                    <div>
                     <h2 className='text-xl font-bold'>Industry Expertise</h2>
                     <p>Our team includes certified life coaches, financial planners, and professional mentors with years of experience.</p>
                    </div>
                </motion.div>
                <motion.div
                 initial={{
                    x:-100,
                    opacity:0
                }}
                whileInView={{
                    x:0,
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
                className='my-[10px] flex bg-[#374151] p-[3%] text-start'>
                    <FaChevronRight className='text-[#9333EA] mt-[1%] mr-[10px]' />
                    <div>
                     <h2 className='text-xl font-bold'>Results-Oriented Approach</h2>
                     <p>Our strategies are practical, measurable, and results-driven, ensuring tangible improvements in your life.</p>
                    </div>
                </motion.div>
                <motion.div
                 initial={{
                    x:-100,
                    opacity:0
                }}
                whileInView={{
                    x:0,
                    opacity:1
                }}
                transition={{
                    duration:1,
                    ease:"easeInOut",
                    delay:0.07*3
                }}
                viewport={{
                    once:true
                }}
                className='my-[10px] flex bg-[#374151] p-[3%] text-start'>
                    <FaChevronRight className='text-[#9333EA] mt-[1%] mr-[10px]' />
                    <div>
                     <h2 className='text-xl font-bold'>Personalized Solutions</h2>
                     <p>We tailor our programs to your unique needs, goals, and circumstances for maximum effectiveness.</p>
                    </div>
                </motion.div>
           </div>
           <motion.img
            initial={{
                x:100,
                opacity:0
            }}
            whileInView={{
                x:0,
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
           className='w-full md:w-[45%]' src='/images/why.jpg' alt='why' />
        </div>
    </section>
  )
}

export default Why