import React from 'react'
import Hero from '../components/Hero'
import WhatWeOffer from '../components/WhatWeOffer'
import Holistic from '../components/Holistic'
import Why from '../components/Why'
import Ready from '../components/Ready'

function Home() {
  return (
    <div className='flex flex-col items-center'>
        <Hero />
        <WhatWeOffer />
        <Holistic />
        <Why />
        <Ready />
    </div>
  )
}

export default Home