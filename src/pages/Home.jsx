import React from 'react'
import Hero from '../components/Hero'
import WhatWeOffer from '../components/WhatWeOffer'

function Home() {
  return (
    <div className='flex flex-col items-center'>
        <Hero />
        <WhatWeOffer />
    </div>
  )
}

export default Home