
import React from 'react'
import PageHeaderContainer from '../../components/pageHeaderContainer'
import { BsInfoCircleFill } from 'react-icons/bs'
import { Animate } from 'react-simple-animate'
import { SiRedux } from 'react-icons/si';
import { TbBrandJavascript } from 'react-icons/tb'
import { AiFillHtml5 } from 'react-icons/ai'
import { FaReact } from 'react-icons/fa'
import './style.scss'




const jobsummary = "Experienced in creating websites and mobile apps, I'm skilled in building easy-to-use and effective digital tools. Using technologies like HTML, CSS, JavaScript, React, Redux, and React Native, I specialize in making websites that work well on different devices and apps that run smoothly on smartphones. I'm good at solving problems and turning complex ideas into simple, user-friendly solutions. My goal is to make sure that the websites and apps I create meet the needs of users and businesses alike, helping them succeed in the online world."

export default function About() {

  return (
    <section id='about' className='about'>
      <PageHeaderContainer
        headerText='About Me'
        icon={<BsInfoCircleFill size={40} />} />

      <div className='about__content'>
        <div className='about__content__persnolWrapper'>
          <Animate play duration={1.5} delay={1}
            start={{ transform: 'translateX(-900px)' }}
            end={{ transform: 'translatex(0px)' }}
          >
            <h3>Full Stack Web Developer</h3>
            <p>{jobsummary}</p>
          </Animate>


        </div>
        <div className='about__content__servicesWrapper'>

          <Animate play duration={1.5} delay={1}
            start={{ transform: 'translateX(600px)' }}
            end={{ transform: 'translatex(0px)' }}
          >
            <div className='about__content__servicesWrapper__innerContent' >
              <div>
                <FaReact size={60} color='var(--yellow-theme-main-color)' />
              </div>
              <div>
                <AiFillHtml5 size={60} color='var(--yellow-theme-main-color)' />
              </div>
              <div>
                <SiRedux size={60} color='var(--yellow-theme-main-color)' />
              </div>
              <div>
                <TbBrandJavascript size={60} color='var(--yellow-theme-main-color)' />
              </div>
            </div>
          </Animate>
        </div>
      </div>
    </section>
  )

}

