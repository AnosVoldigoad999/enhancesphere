import React from 'react'
import { FaChevronRight } from "react-icons/fa";

function Why() {
  return (
    <section className='text-white w-full flex flex-col  items-center text-center'>
        <h1 className='text-4xl md:text-6xl font-bold mt-[10px] mb-[50px]'>Why Choose EnhanceSphere?</h1>
        <div className='w-full flex flex-col-reverse md:flex-row justify-between p-[2%]'>
           <div className='flex flex-col w-full md:w-1/2'>
                <div className='my-[10px] flex bg-[#374151] p-[3%] text-start'>
                    <FaChevronRight className='text-[#9333EA] mt-[1%] mr-[10px]' />
                    <div>
                     <h2 className='text-xl font-bold'>Comprehensive Coverage</h2>
                     <p>We don't just focus on one area of growth; we enhance every aspect of your life to ensure holistic development.</p>
                    </div>
                </div>
                <div className='my-[10px] flex bg-[#374151] p-[3%] text-start'>
                    <FaChevronRight className='text-[#9333EA] mt-[1%] mr-[10px]' />
                    <div>
                     <h2 className='text-xl font-bold'>Industry Expertise</h2>
                     <p>Our team includes certified life coaches, financial planners, and professional mentors with years of experience.</p>
                    </div>
                </div>
                <div className='my-[10px] flex bg-[#374151] p-[3%] text-start'>
                    <FaChevronRight className='text-[#9333EA] mt-[1%] mr-[10px]' />
                    <div>
                     <h2 className='text-xl font-bold'>Results-Oriented Approach</h2>
                     <p>Our strategies are practical, measurable, and results-driven, ensuring tangible improvements in your life.</p>
                    </div>
                </div>
                <div className='my-[10px] flex bg-[#374151] p-[3%] text-start'>
                    <FaChevronRight className='text-[#9333EA] mt-[1%] mr-[10px]' />
                    <div>
                     <h2 className='text-xl font-bold'>Personalized Solutions</h2>
                     <p>We tailor our programs to your unique needs, goals, and circumstances for maximum effectiveness.</p>
                    </div>
                </div>
           </div>
           <img className='w-full md:w-[45%]' src='/images/why.jpg' alt='why' />
        </div>
    </section>
  )
}

export default Why