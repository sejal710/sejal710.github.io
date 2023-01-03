import React from 'react'
import PageHeaderContainer from '../../components/pageHeaderContainer'
import {BsInfoCircleFill} from 'react-icons/bs'
import { SkillaData } from './utils'
import { Animate } from 'react-simple-animate'
// import {AnimateKeyframes} from 'react-simple-animate/dist/animateKeyframes'
import { Line } from 'rc-progress';
import './style.scss';

export default function Skills() {
  return (
    <section id='skills' className='skills'>
    <PageHeaderContainer
    headerText='My Skills'
    icon ={<BsInfoCircleFill size={40} />}/>
    <div className='skills__content-wrapper'>
         {
          SkillaData.map((item,i) => (
            <div key={i} className='skills__content-wrapper__inner-content'> 
                <Animate
                play duration={1} delay={0.3} start={{transform : 'translateX(-200px)'}}
                ens={{transform : 'translateX(0px)'}}
                >
                  <h3 className='skills__content-wrapper__inner-content__category-text'>{item.label}</h3>
                  <div className='skills__content-wrapper__inner-content__progressbar-container'>
                    {
                      item.data.map((skillItem,j)=>(
                        //  <AnimateKeyframes
                        //  play
                        //  duration={1}
                        //  keyframes={['opacity : 1','opacity : 0']}
                        //  iterationCount='1'
                        //  > 
                         <div className='progressbar-wrapper' key={j}>
                           <p>{skillItem.skillName}</p>
                           <Line 
                           percent={skillItem.percentage}
                           strokeWidth='2'
                           strokeColor='var(--yellow-theme-main-color)'
                           trailWidth='2'
                           strokeLinecap='square'
                           />
                         </div>
                        //  </AnimateKeyframes>
                      ))
                    }
                  </div>
                </Animate>
            </div>
          ))
         }
    </div>
  </section>
  )
}