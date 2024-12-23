import React from 'react'
import AboutEn from '../components/AboutEn'
import Approach from '../components/Approach'
import WhyEn from '../components/WhyEn'
import Commitment from '../components/Commitment'

function About() {
  return (
    <div className='flex flex-col items-center'>
        <AboutEn />
        <Approach />
        <WhyEn />
        <Commitment />
    </div>
  )
}

export default About