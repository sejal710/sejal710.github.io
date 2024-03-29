import React from 'react'
import PageHeaderContainer from '../../components/pageHeaderContainer'
import {SiSkillshare} from 'react-icons/si'
import { SkillaData } from './utils'
import { Animate } from 'react-simple-animate'
import './style.scss';

export default function Skills() {
  return (
    <section id='skills' className='skills'>
    <PageHeaderContainer
    headerText='My Skills'
    icon ={<SiSkillshare size={40} />}/>
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
                        <div key={j} className='skills__content-wrapper__inner-content__progressbar-container__div'>
                        <span></span>
                        <div className='skills__content-wrapper__inner-content__progressbar-container__div__main'>
                          <img src={skillItem.icons} alt={skillItem.skillName} />
                          <div>
                            <p>{skillItem.skillName}</p>
                          </div>
                        </div>
                        </div>
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