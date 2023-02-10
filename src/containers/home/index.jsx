
import React from 'react';
import {Animate} from 'react-simple-animate'
import sejal from '../../Images/sejal.jpg'
import './style.scss'


export default function Home() {


  return (
    <div id="home" className='ho'>
    <div className='Home-head'>
          <div className='image'>
             <img  src={sejal} alt='Sejal' />
        </div>
    <section  className='homea'>
      <div className='home__text-wrapper'>
         <h1>Hello,I'm Sejal 
         <br/>
          Full Stack Web
          <br />
           Developer
         </h1>
      </div>
      <Animate play duration={1.5} delay={1} 
      start={{transform:'translateY(550px)'}} 
      end={{transform:'translatex(0px)'}} 
      >
        <div className='home__contact_me'>
        <a href='#contact'><button>Contact Me</button></a>
      </div>
      </Animate>
    </section>
    </div>
    </div>
  )
}