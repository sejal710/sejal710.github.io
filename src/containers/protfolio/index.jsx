import React, { useState } from 'react'
import PageHeaderContainer from '../../components/pageHeaderContainer'
import {SiCodeproject} from 'react-icons/si'
import Travel from '../../Images/Travel.png'
import Chating from '../../Images/Chating.png'
import Sephora from '../../Images/Sephora.png'
import Codepan from '../../Images/Codepan.png'
import './style.scss'
import { Box } from '@chakra-ui/react'
import {FaReact,FaHtml5,FaCss3Alt} from 'react-icons/fa'
import {TbBrandJavascript} from 'react-icons/tb'
import {SiRedux,SiMongodb} from 'react-icons/si'


const Project = [
  {id:1,name:"Travel",
  image:Travel,
  link:"https://639fee25fa8d3d16ff1c2b14--celebrated-mochi-5a5b8c.netlify.app/",
  textTech:[[<FaReact/>,"React"],[<FaCss3Alt/>,"CSS"],[<SiRedux/>,"Redux"]],
  git:"https://github.com/sejal710/Expedia-Travel/tree/main/travel",
  describe : "when you want to go from one place to another place Expedia Travel is one of the best choices.This application is fully responsive.This is a Individual Project "
},
  {id:2,name:"Sephora",
  image:Sephora,
  textTech:[[<FaHtml5/>,"HTML"],[<FaCss3Alt/>,"CSS"],[<TbBrandJavascript/>,"Javascript"]],
  link:"https://merry-puppy-da377d.netlify.app/",
  git:"https://github.com/Vishwa9011/sephora",
  describe:"The best online beauty product website. It is an collaborative Project which is completed in 4-5 days.This application is fully responsive."
},
  {id:3,name:"Chating Dude",
  image:Chating,
  textTech:[[<FaReact/>,"React"],[<FaCss3Alt/>,"CSS"],[<SiRedux/>,"Redux"],[<SiMongodb/>,"MongoDB"]],
  link:"https://chating-dude.vercel.app/",
  git:"https://github.com/sejal710/Chat_Engine",
  
  describe:"A Chat application is helpful for talk with anyone who is login.This application is fully responsive.It is an Individual Project which is completed in 5 days."
},
{
  id:4,
  name:'Codepan',
  image:Codepan,
  textTech:[[<FaReact/>,"React"],[<FaCss3Alt/>,"CSS"],[<SiRedux/>,"Redux"]],
  link:"https://code-editor-rose-kappa.vercel.app/",
  git:"https://github.com/sejal710/codepan",
  describe:"CodePen is the best place to build, test, and discover front-end code.This application is fully responsive. It is an Individual Project which is completed in 3 days."
}
]



export default function Protfolio() {


  return (
    <section id='project' className='protfolio'>
     <PageHeaderContainer
    headerText='My Project'
    icon ={<SiCodeproject size={40} />}/>
     <div className='protfolio__content'>
      {
        Project.map((el,i) => (
          <div className='protfolio__content__item' key={i} >
              <Box className='protfolio__content__item__image' backgroundImage={el.image} />
                {/* <img src={el.image}/> */}
              {/* </div> */}
              <div className='protfolio__content__item__name'>
                <p>{el.name}</p>
              </div>
              <div className='protfolio__content__item__describe'>
                <p>{el.describe}</p>
              </div>
              <div  className='protfolio__content__item__logo' >
                {
                  el.textTech.map((looItem,i) => (
                    <div key={i}>
                      <div>{looItem[0]}</div>
                      <p>{looItem[1]}</p>
                    </div>
                  ))
                  
                }
              </div>
              <div className='protfolio__content__item__btn'>
                  <div><a href={el.link} target="_blank"> <button>Live</button></a></div>
                  <div><a href={el.git} target="_blank"><button>Code</button></a></div>
              </div>
          </div>
        ))
      }
    </div> 
  </section>
  )
}