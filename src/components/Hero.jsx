import React from 'react'

function Hero() {
  return (
    <section className='flex flex-col h-[calc(100vh-90px)] items-center text-center justify-center w-full bg-[#111827E6] text-white'>
        <h1 className='text-4xl md:text-6xl font-bold w-[70%] '>Transform Your Life with EnhanceSphere</h1>
        <p className='text-xl md:text-3xl my-[30px] w-[70%]'>Unlock your full potential in personal well-being, financial success, and professional growth with our tailored strategies.</p>
        <div className='flex w-full justify-center'>
            <button className='cursor-pointer bg-[#9333EA] p-[2%] mx-[10px] rounded-[5px]'>Start Your Journey</button>
            <button className='cursor-pointer bg-[#020817] p-[2%] text-white mx-[10px] rounded-[5px]'>Learn More</button>
        </div>
    </section>
  )
}

export default Hero