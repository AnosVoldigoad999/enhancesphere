import React from 'react'
import './App.css'
import Nav from './components/Nav'
import Home from './pages/Home'
import { Route, Routes } from 'react-router-dom'
import Footer from './components/Footer'
function App() {
  return (
    <div className='flex flex-col'>
      <Nav />
      <main className='mt-[90px]'>
        <Routes>
          <Route path='/' element={<Home />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App