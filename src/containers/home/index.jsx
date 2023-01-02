
import React from 'react'
import { useNavigate } from 'react-router-dom'
import {Animate} from 'react-simple-animate'
import './style.scss'

export default function Home() {
   const navigate = useNavigate()
  const handleNavigatetocontact = () =>{
       navigate('/contact')
  }
  return (
    <section id='home' className='home'>
      <div className='home__text-wrapper'>
         <h1>
          Hello,I'm Sejal Jaiswal
          <br />
          Front end devloper
         </h1>
      </div>
      <Animate play duration={1.5} delay={1} 
      start={{transform:'translateY(550px)'}} 
      end={{transform:'translatex(0px)'}} 
      >
        <div className='home__contact_me'>
        <button onClick={handleNavigatetocontact}>Hire Me</button>
      </div>
      </Animate>
      
    </section>
  )
}