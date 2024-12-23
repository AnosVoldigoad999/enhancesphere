import React from 'react'
import { FaRegHeart } from "react-icons/fa";
import { GoPeople } from "react-icons/go";
import { FaRegLightbulb } from "react-icons/fa6";
import { FaRegSmile } from "react-icons/fa";
import { FaChartLine } from "react-icons/fa6";
import { CiWallet } from "react-icons/ci";
import { LuPiggyBank } from "react-icons/lu";
import { LuTarget } from "react-icons/lu";
import { MdOutlineBusinessCenter } from "react-icons/md";
import { IoFlashOutline } from "react-icons/io5";
import { IoSchoolOutline } from "react-icons/io5";
import { FaNetworkWired } from "react-icons/fa";
import { FiArrowRight } from "react-icons/fi";
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion'
function WhatWeOffer() {
  return (
    <section className='text-center flex flex-col text-black w-full p-[2%]'>
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
        className='text-4xl md:text-6xl font-bold mt-[10px] mb-[50px]'>What We Offer</motion.h1>
        <div className='flex flex-col-reverse md:flex-row items-center justify-between p-[20px] md:p-[5%] bg-[hsla(0,_0%,_0%,_0.2)] my-[30px]'>
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
            className='w-full  md:w-1/2 text-start my-[50px]'>
                <h2 className='text-2xl font-bold'>Personal Growth Mastery</h2>
                <p>Transform your personal life with our comprehensive development programs that focus on:</p>
                <div className='pgrowth my-[50px]'>
                    <div className='flex flex-col items-center text-center'>
                        <FaRegHeart className='mb-[20px] w-[45px] h-[45px] p-[5%] bg-[#9333EA] rounded-[50%]' />
                        <p>Emotional Intelligence</p>
                    </div>
                    <div className='flex flex-col items-center text-center'>
                        <GoPeople className='mb-[20px] w-[45px] h-[45px] p-[5%] bg-[#9333EA] rounded-[50%]' />
                        <p>Relationship Building</p>
                    </div>
                    <div className='flex flex-col items-center text-center'>
                        <LuTarget className='mb-[20px] w-[45px] h-[45px] p-[5%] bg-[#9333EA] rounded-[50%]' />
                        <p>Goal Achievement</p>
                    </div>
                    <div className='flex flex-col items-center text-center'>
                        <FaRegLightbulb className='mb-[20px] w-[45px] h-[45px] p-[5%] bg-[#9333EA] rounded-[50%]' />
                        <p>Personal Growth</p>
                    </div>
                    <div className='flex flex-col items-center text-center'>
                        <FaRegSmile className='mb-[20px] w-[45px] h-[45px] p-[5%] bg-[#9333EA] rounded-[50%]' />
                        <p>Self-Confidence</p>
                    </div>
                    <div className='flex flex-col items-center text-center'>
                        <IoFlashOutline className='mb-[20px] w-[45px] h-[45px] p-[5%] bg-[#9333EA] rounded-[50%]' />
                        <p>Motivation</p>
                    </div>
                </div>
                <Link to="/contact"><button className='w-full flex items-center justify-center bg-[#9333EA] p-[2%] rounded-[5px]'>Learn More <FiArrowRight /></button></Link>
            </motion.div>
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
                ease:"easeInOut"
            }}
            viewport={{
                once:true
            }}
            className='w-full md:w-[45%] rounded-[5px]' src="/images/pgrowthms.webp" alt="personalgrowthmastery" />
        </div>
        <div className='flex flex-col-reverse md:flex-row items-center justify-between p-[20px] md:p-[5%] bg-[hsla(0,_0%,_0%,_0.2)] my-[30px]'>
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
            className='w-full md:w-1/2 text-start my-[50px]'>
                <h2 className='text-2xl font-bold'>Financial Excellence</h2>
                <p>Master your financial future with strategies designed for sustainable wealth creation:</p>
                <div className='pgrowth my-[50px]'>
                    <div className='flex flex-col items-center text-center'>
                        <FaChartLine className='mb-[20px] w-[45px] h-[45px] p-[5%] bg-[#9333EA] rounded-[50%]' />
                        <p>Investment Planning</p>
                    </div>
                    <div className='flex flex-col items-center text-center'>
                        <CiWallet className='mb-[20px] w-[45px] h-[45px] p-[5%] bg-[#9333EA] rounded-[50%]' />
                        <p>Wealth Management</p>
                    </div>
                    <div className='flex flex-col items-center text-center'>
                        <LuPiggyBank className='mb-[20px] w-[45px] h-[45px] p-[5%] bg-[#9333EA] rounded-[50%]' />
                        <p>Savings Strategy</p>
                    </div>
                    <div className='flex flex-col items-center text-center'>
                        <LuTarget className='mb-[20px] w-[45px] h-[45px] p-[5%] bg-[#9333EA] rounded-[50%]' />
                        <p>Financial Goals</p>
                    </div>
                    <div className='flex flex-col items-center text-center'>
                        <MdOutlineBusinessCenter className='mb-[20px] w-[45px] h-[45px] p-[5%] bg-[#9333EA] rounded-[50%]' />
                        <p>Business Finance</p>
                    </div>
                    <div className='flex flex-col items-center text-center'>
                        <IoFlashOutline className='mb-[20px] w-[45px] h-[45px] p-[5%] bg-[#9333EA] rounded-[50%]' />
                        <p>Financial Literacy</p>
                    </div>
                </div>
                <Link to="/contact"><button className='w-full flex items-center justify-center bg-[#9333EA] p-[2%] rounded-[5px]'>Learn More <FiArrowRight /></button></Link>
            </motion.div>
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
                ease:"easeInOut"
            }}
            viewport={{
                once:true
            }}
            className='w-full md:w-[45%] rounded-[5px]' src="/images/fexcellence.jpg" alt="fexcellence" />
        </div>
        <div className='flex flex-col-reverse md:flex-row items-center justify-between p-[20px] md:p-[5%] bg-[hsla(0,_0%,_0%,_0.2)] my-[30px]'>
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
            className='w-full md:w-1/2 text-start my-[50px]'>
                <h2 className='text-2xl font-bold'>Career Advancement</h2>
                <p>Accelerate your professional growth with our proven career development programs:</p>
                <div className='pgrowth my-[50px]'>
                    <div className='flex flex-col items-center text-center'>
                        <MdOutlineBusinessCenter className='mb-[20px] w-[45px] h-[45px] p-[5%] bg-[#9333EA] rounded-[50%]' />
                        <p>Leadership Skills</p>
                    </div>
                    <div className='flex flex-col items-center text-center'>
                        <IoSchoolOutline className='mb-[20px] w-[45px] h-[45px] p-[5%] bg-[#9333EA] rounded-[50%]' />
                        <p>Skill Development</p>
                    </div>
                    <div className='flex flex-col items-center text-center'>
                        <FaNetworkWired className='mb-[20px] w-[45px] h-[45px] p-[5%] bg-[#9333EA] rounded-[50%]' />
                        <p>Network Building</p>
                    </div>
                    <div className='flex flex-col items-center text-center'>
                        <LuTarget className='mb-[20px] w-[45px] h-[45px] p-[5%] bg-[#9333EA] rounded-[50%]' />
                        <p>Career Goals</p>
                    </div>
                    <div className='flex flex-col items-center text-center'>
                        <FaRegLightbulb className='mb-[20px] w-[45px] h-[45px] p-[5%] bg-[#9333EA] rounded-[50%]' />
                        <p>Innovation</p>
                    </div>
                    <div className='flex flex-col items-center text-center'>
                        <GoPeople className='mb-[20px] w-[45px] h-[45px] p-[5%] bg-[#9333EA] rounded-[50%]' />
                        <p>Team Management</p>
                    </div>
                </div>
                <Link to="/contact"><button className='w-full flex items-center justify-center bg-[#9333EA] p-[2%] rounded-[5px]'>Learn More <FiArrowRight /></button></Link>
            </motion.div>
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
                ease:"easeInOut"
            }}
            viewport={{
                once:true
            }}
            className='w-full md:w-[45%] rounded-[5px]' src="/images/cadvancement.webp" alt="cadvancement" />
        </div>
    </section>
  )
}

export default WhatWeOffer