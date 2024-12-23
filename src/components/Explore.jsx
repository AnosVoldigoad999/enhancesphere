import React from 'react'
import { FiArrowRight } from "react-icons/fi";
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
function Explore() {
  return (
    <section className='text-white w-full flex flex-col mt-[50px]  items-center text-center p-[2%]'>
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
            ease:"easeInOut",
        }}
        className='text-4xl md:text-6xl font-bold mt-[10px] mb-[50px] text-[#9333EA]'>Explore Our Services</motion.h1>
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
        className='text-xl font-bold mb-[50px]'>Our expert team is ready to guide you through our comprehensive services. Let's create a personalized plan to help you achieve your goals and unlock your full potential.</motion.p>
        <div className='flex flex-col md:flex-row items-center'>
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
            className='flex flex-col text-start rounded-[5px] p-[10px] md:p-[1%] bg-[#581C87] h-[fit-content] m-[10px] min-h-[150px]'>
                <h2 className='text-xl font-bold mb-[20px] text-purple-400'>Schedule a Consultation</h2>
                <p>Book a one-on-one session with our specialists to discuss your needs and goals.</p>
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
            className='flex flex-col text-start rounded-[5px] bg-[#1E3A8A] p-[10px] md:p-[1%] h-[fit-content] m-[10px] min-h-[150px]'>
                <h2 className='text-xl font-bold mb-[20px] text-blue-400'>Customized Programs</h2>
                <p>Discover our tailored programs designed to fit your unique situation and aspirations.</p>
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
            className='flex flex-col text-start rounded-[5px] bg-[#14532D] p-[10px] md:p-[1%] h-[fit-content] m-[10px] min-h-[150px]'>
                <h2 className='text-xl font-bold mb-[20px] text-green-400'>Resources & Tools</h2>
                <p>Access our extensive library of resources and cutting-edge tools to support your journey.</p>
            </motion.div>
        </div>
        <Link to="/contact"><motion.button
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
        className='mt-[50px] bg-[#9333EA] p-[1%] rounded-[5px]'>Get Started Now</motion.button></Link>
    </section>
  )
}

export default Explore