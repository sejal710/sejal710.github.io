
import React from 'react'
import { useNavigate } from 'react-router-dom'
import {Animate} from 'react-simple-animate'
import sejal from '../../Images/sejal.jpg'
import './style.scss'
import About from '../about/index';
import Protfolio from '../protfolio/index';
// import Resume from '../resume/index';
import Skills from '../skills/index';
import Contact from '../contact/index';

export default function Home() {
   const navigate = useNavigate()
  const handleNavigatetocontact = () =>{
       navigate('/contact')
  }
  return (
    <div id="home" className='ho'>
    <div className='Home-head'>
          <div className='image'>
             <img  src={sejal} alt='Sejal' />
        </div>
    <section id='home' className='homea'>
      <div className='home__text-wrapper'>
         <h1>
          Hello,I'm Sejal 
          <br />
          Front end devloper
         </h1>
      </div>
      <Animate play duration={1.5} delay={1} 
      start={{transform:'translateY(550px)'}} 
      end={{transform:'translatex(0px)'}} 
      >
        <div className='home__contact_me'>
        <button onClick={handleNavigatetocontact}>Contact Me</button>
      </div>
      </Animate>
    </section>
    </div>
    {/* <About />
    <Skills />
    <Protfolio />
    <Contact /> */}
    </div>
  )
}