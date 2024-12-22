import React from 'react'

function Holistic() {
  return (
    <section className='text-white flex flex-col items-center w-full'>
        <h1 className='text-4xl md:text-6xl font-bold mt-[10px] mb-[50px]'>Our Holistic Approach</h1>
        <div className='holsgrid'>
            <div className='bg-[#374151] flex flex-col p-[5%]'>
                <img className='w-full' src="/images/personaldev.jpg" alt="personaldev" />
                <h2 className='my-[20px] text-2xl font-bold'>Personal Development</h2>
                <p>Unlock your potential and build meaningful relationships through our comprehensive personal growth programs.</p>
            </div>
            <div className='bg-[#374151] flex flex-col p-[5%]'>
                <img className='w-full' src="/images/financialem.webp" alt="financialem" />
                <h2 className='my-[20px] text-2xl font-bold'>Financial Empowerment</h2>
                <p>Secure your future with smart investments and growth strategies tailored to your unique financial situation.</p>
            </div>
            <div className='bg-[#374151] flex flex-col p-[5%]'>
                <img className='w-full' src="/images/personaldev.jpg" alt="personaldev" />
                <h2 className='my-[20px] text-2xl font-bold'>Professional Excellence</h2>
                <p>Advance your career with tailored skills and strategies designed to help you excel in your chosen field.</p>
            </div>
        </div>
    </section>
  )
}

export default Holistic