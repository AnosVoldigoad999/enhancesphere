import React, {useState} from 'react'
import { FaRegHeart } from "react-icons/fa";
import { CiWallet } from "react-icons/ci";
import { MdOutlineBusinessCenter } from "react-icons/md";
import { FaChartLine } from "react-icons/fa6";
import { FiArrowRight } from "react-icons/fi";
import { motion } from 'framer-motion';
import servicethings from "./servicesthings.json"
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import { Link } from 'react-router-dom';
function Elevate() {
    const [show1, setShow1] = useState(false)
    const [show2, setShow2] = useState(false)
    const [show3, setShow3] = useState(false)
    const [show4, setShow4] = useState(false)
  return (
    <section className='text-white w-full flex flex-col  items-center text-center'>
        <div className='servicehero flex flex-col items-center justify-center'>
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
            }} className='text-4xl md:text-6xl font-bold mt-[10px]'>Elevate Your Potential</motion.h1>
        <motion.p initial={{
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
        className='text-xl md:text-3xl my-[30px] w-[70%]'>Unlock new heights in your personal and professional journey. Our expert consulting services are designed to help you refine your strategies, overcome challenges, and achieve your goals. Elevate your potential with tailored solutions that drive success.</motion.p>
        </div>
        <div className='elegrid'>
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
            className=' flex flex-col items-center bg-[hsla(0,_0%,_0%,_0.2)] text-black'>
                <div className='flex items-center justify-center  h-[100px]  w-full bg-purple-600'>
                    <FaRegHeart className='mr-[10px] w-[45px] h-[45px] p-[1.5%] bg-gray-900  rounded-[50%] text-purple-400' />
                    <h2 className='text-xl'>Personal Development</h2>
                </div>
                <p className='text-xl mt-[20px] w-[80%]'>Empower yourself to thrive in all aspects of life with our comprehensive personal development services.</p>
                <button onClick={()=>{setShow1(!show1)}} className='flex items-center w-[90%] justify-between p-[2%] my-[20px] text-[#9333EA] font-bold text-xl'>View Services <FiArrowRight /></button>
                {
                    show1 && <div className='flex flex-col w-[100%] p-[10px] mt-[-30px] mb-[20px]'>
                    {servicethings[0].map((item,index)=>{
                        return <p className='flex items-center text-start my-[5px]' key={index}><IoMdCheckmarkCircleOutline className='w-[30px] h-[30px] text-green-400 mb-[3%] mr-[5px]' /> {item}</p>
                    })}
                </div>
                }
                <Link to="/contact" className='bg-[#9333EA] flex items-center w-[90%] rounded-[5px] mb-[30px] justify-between p-[2%]'><button className='flex items-center w-full justify-between' >Learn More <FiArrowRight /></button></Link>
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
            className=' flex flex-col items-center bg-[hsla(0,_0%,_0%,_0.2)] text-black'>
                <div className='flex items-center justify-center  h-[100px]  w-full bg-blue-600'>
                    <CiWallet className='mr-[10px] w-[45px] h-[45px] p-[1.5%] bg-gray-900  rounded-[50%] text-blue-400' />
                    <h2 className='text-xl'>Financial Development</h2>
                </div>
                <p className='text-xl mt-[20px] w-[80%]'>Build a secure financial future with our expert-designed services and personalized strategies.</p>
                <button onClick={()=>{setShow2(!show2)}} className='flex items-center w-[90%] justify-between p-[2%] my-[20px] text-[#9333EA] font-bold text-xl'>View Services <FiArrowRight /></button>
                {
                    show2 && <div className='flex flex-col w-[100%] p-[10px] mt-[-30px] mb-[20px]'>
                    {servicethings[1].map((item,index)=>{
                        return <p className='flex items-center text-start my-[5px]' key={index}><IoMdCheckmarkCircleOutline className='w-[30px] h-[30px] text-green-400 mb-[3%] mr-[5px]' /> {item}</p>
                    })}
                </div>
                }
                  <Link to="/contact" className='bg-[#9333EA] flex items-center w-[90%] rounded-[5px] mb-[30px] justify-between p-[2%]'><button className='flex items-center w-full justify-between' >Learn More <FiArrowRight /></button></Link>
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
            className=' flex flex-col items-center bg-[hsla(0,_0%,_0%,_0.2)] text-black'>
                <div className='flex items-center justify-center  h-[100px]  w-full bg-green-600'>
                    <MdOutlineBusinessCenter className='mr-[10px] w-[45px] h-[45px] p-[1.5%] bg-gray-900  rounded-[50%] text-green-400' />
                    <h2 className='text-xl'>Professional Development</h2>
                </div>
                <p className='text-xl mt-[20px] w-[80%]'>Reach new career heights with our cutting-edge professional development programs and personalized coaching.</p>
                <button onClick={()=>{setShow3(!show3)}} className='flex items-center w-[90%] justify-between p-[2%] my-[20px] text-[#9333EA] font-bold text-xl'>View Services <FiArrowRight /></button>
                {
                    show3 && <div className='flex flex-col w-[100%] p-[10px] mt-[-30px] mb-[20px]'>
                    {servicethings[2].map((item,index)=>{
                        return <p className='flex items-center text-start my-[5px]' key={index}><IoMdCheckmarkCircleOutline className='w-[30px] h-[30px] text-green-400 mb-[3%] mr-[5px]' /> {item}</p>
                    })}
                </div>
                }
                <Link to="/contact" className='bg-[#9333EA] flex items-center w-[90%] rounded-[5px] mb-[30px] justify-between p-[2%]'><button className='flex items-center w-full justify-between' >Learn More <FiArrowRight /></button></Link>
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
            className=' flex flex-col items-center bg-[hsla(0,_0%,_0%,_0.2)] text-black'>
                <div className='flex items-center justify-center  h-[100px]  w-full bg-yellow-600'>
                    <FaChartLine className='mr-[10px] w-[45px] h-[45px] p-[1.5%] bg-gray-900  rounded-[50%] text-yellow-400' />
                    <h2 className='text-xl'>Business Support</h2>
                </div>
                <p className='text-xl mt-[20px] w-[80%]'>Take your enterprise to the next level with our comprehensive business support services and expert consultations.</p>
                <button onClick={()=>{setShow4(!show4)}} className='flex items-center w-[90%] justify-between p-[2%] my-[20px] text-[#9333EA] font-bold text-xl'>View Services <FiArrowRight /></button>
                {
                    show4 && <div className='flex flex-col w-[100%] p-[10px] mt-[-30px] mb-[20px]'>
                    {servicethings[3].map((item,index)=>{
                        return <p className='flex items-center text-start my-[5px]' key={index}><IoMdCheckmarkCircleOutline className='w-[30px] h-[30px] text-green-400 mb-[3%] mr-[5px]' /> {item}</p>
                    })}
                </div>
                }
                  <Link to="/contact" className='bg-[#9333EA] flex items-center w-[90%] rounded-[5px] mb-[30px] justify-between p-[2%]'><button className='flex items-center w-full justify-between' >Learn More <FiArrowRight /></button></Link>
            </motion.div>
        </div>
    </section>
  )
}

export default Elevate