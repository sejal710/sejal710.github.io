import React, { useState } from 'react'
import PageHeaderContainer from '../../components/pageHeaderContainer'
import {SiCodeproject} from 'react-icons/si'
import Travel from '../../Images/Travel.png'
import PharmEasy from '../../Images/PharmEasy.png'
import Sephora from '../../Images/Sephora.png'
import './style.scss'

const Project = [
  {id:1,name:"Travel",image:Travel,link:"https://639fee25fa8d3d16ff1c2b14--celebrated-mochi-5a5b8c.netlify.app/",git:"https://github.com/sejal710/Expedia-Travel/tree/main/travel"},
  {id:2,name:"Sephora",image:Sephora,link:"https://merry-puppy-da377d.netlify.app/",git:"https://github.com/Vishwa9011/sephora"},
  {id:3,name:"PhareEasy",image:PharmEasy,link:"https://frabjous-dango-2bef78.netlify.app/",git:"https://github.com/sejal710/grieving-wax-8717/tree/main/day-1"}
]


export default function Protfolio() {
  return (
    <section id='project' className='protfolio'>
     <PageHeaderContainer
    headerText='My Project'
    icon ={<SiCodeproject size={40} />}/>
     <div className='protfolio__content'>
   <div className='protfolio__content__cards'>
      {
        Project.map((item,i)=>(
          <div key={i} className='protfolio__content__cards_item'>
           <div className='protfolio__content__cards_item__image' >
            <img src={item.image} />
           </div>
           <div className='protfolio__content__cards_item__description' >
            <p>{item.name}</p>
            <div className='protfolio__content__cards_item__description__btn'>
              <a href={item.git}><button>Code</button></a>
              <a href={item.link} ><button>Deploy</button></a>
            </div>
            </div>
          </div>  
        ))
      }
    </div>
    </div> 
  </section>
  )
}