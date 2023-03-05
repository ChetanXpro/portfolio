import { useState } from 'react'
import { About, Navbar, Tech, Works, Experience, StarsCanvas, Hero, Feedbacks } from './components'
import './App.css'
import Contact from './components/Contact';

function App() {


  return (
    <div className=" relative z-0 bg-primary">
      <div className=' bg-cover bg-no-repeat bg-center
'>
        <Navbar />
        <Hero />
      

      </div>
      <About />

      <Experience />
      <Tech />
      <Works />
      <Feedbacks />
      <div className='relative z-0'>
        <Contact />
        <StarsCanvas />
      </div>
    </div >
  )
}

export default App
