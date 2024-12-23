import React from 'react'
import './App.css'
import Nav from './components/Nav'
import Home from './pages/Home'
import { Route, Routes } from 'react-router-dom'
import Footer from './components/Footer'
import Services from './pages/Services'
import About from './pages/About'
import Contact from './pages/Contact'
function App() {
  return (
    <div className='flex flex-col'>
      <Nav />
      <main className='/*mt-[90px]*/'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/services' element={<Services />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App