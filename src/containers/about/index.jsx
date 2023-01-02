
import React from 'react'
import PageHeaderContainer from '../../components/pageHeaderContainer'
import {BsInfoCircleFill} from 'react-icons/bs'
import { Animate } from 'react-simple-animate'
import {DiApple,DiAndroid} from 'react-icons/di';
import {FaDev,FaDatabase} from 'react-icons/fa'
import './style.scss'

const persnolDetail = [
  {label:"Name",value:"Sejal Jaiswal"},
  {label:"Email",value:"710sejal@gmail.com"},
  {label:"Contact No",value:"+91 6261019377"}
]
 
const jobsummary = "Strong in design and integration with intuitive problem-solving skills. Proficient in HTML, CSS, JavaScript, React and Redux. Passionate about implementing and launching new projects. Ability to translate business requirements into technical solutions. Looking to start a career as a web developer with a reputed firm driven by technology."
export default function About() {
  return (
    <section id='about' className='about'>
      <PageHeaderContainer
      headerText='About Me'
      icon ={<BsInfoCircleFill size={40} />}/>

      <div className='about__content'>
        <div className='about__content__persnolWrapper'>
        <Animate play duration={1.5} delay={1} 
      start={{transform:'translateX(-900px)'}} 
      end={{transform:'translatex(0px)'}} 
      > 
       <h3>Front End Devloper</h3>
        <p>{jobsummary}</p>
      </Animate>

      <Animate play duration={1.5} delay={1} 
      start={{transform:'translateX(500px)'}} 
      end={{transform:'translatex(0px)'}} 
      > 
       <h3 className='persnolInformation' >Persnol Information</h3>
       <ul>
        {
          persnolDetail.map((item,i) => (
            <li key={i}>
              <span className='title'>{item.label}</span>
              <span className='value'>{item.value}</span>
            </li>
          ))
        }
       </ul>
       </Animate>
        </div>
        <div className='about__content__servicesWrapper'>

        <Animate play duration={1.5} delay={1} 
          start={{transform:'translateX(600px)'}} 
           end={{transform:'translatex(0px)'}} 
           >
          <div className='about__content__servicesWrapper__innerContent' >
          <div>
            <FaDev size={60} color='var(--yellow-theme-main-color)' />
           </div>
           <div>
           <FaDatabase size={60} color='var(--yellow-theme-main-color)' />
           </div>
           <div>
           <DiApple size={60} color='var(--yellow-theme-main-color)' />
           </div>
           <div>
            <DiAndroid size={60} color='var(--yellow-theme-main-color)' />
           </div>
          </div>
          </Animate>
        </div>

      </div>
    </section>
  )
}
