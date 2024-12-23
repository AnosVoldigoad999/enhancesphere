import React from 'react'
import { Link } from 'react-router-dom'
function Footer() {
  return (
    <section className='mt-[100px] text-center bg-[#1F2937] flex flex-col text-[#D1D5DB] p-[30px] '>
        <div className='flex items-center w-full'>
            <div className='text-start mx-[20px] min-h-[200px] h-[fit-content]'>
                <h2 className='text-white text-xl'>EnhanceSphere</h2>
                <p>Transforming lives, careers, and financial futures.</p>
            </div>
            <div className='text-start mx-[20px] min-h-[200px] h-[fit-content]'>
                <h2 className='text-white text-xl'>Quick Links</h2>
                <ul>
                    <Link to="/"><li className='my-[10px]'>Home</li></Link>
                    <Link to="/about"><li className='my-[10px]'>About</li></Link>
                    <Link to="/services"><li className='my-[10px]'>Services</li></Link>
                    <Link to="/contact"><li className='my-[10px]'>Contact</li></Link>
                </ul>
            </div>
        </div>
        <hr />
        <p className='m-[20px]'>© 2024 EnhanceSphere. All rights reserved.</p>
    </section>
  )
}

export default Footer