import React, { useState } from 'react'
import PageHeaderContainer from '../../components/pageHeaderContainer'
import {SiCodeproject} from 'react-icons/si'
import Travel from '../../Images/Travel.png'
import PharmEasy from '../../Images/PharmEasy.png'
import Sephora from '../../Images/Sephora.png'
import Codepan from '../../Images/Codepan.png'
import './style.scss'
import { Box } from '@chakra-ui/react'
// import Slider from 'react-slick';
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";


const Project = [
  {id:1,name:"Travel",
  image:Travel,
  link:"https://639fee25fa8d3d16ff1c2b14--celebrated-mochi-5a5b8c.netlify.app/",
  git:"https://github.com/sejal710/Expedia-Travel/tree/main/travel",
  describe : "when you want to go from one place to another place Expedia Travel is one of the best choices."
},
  {id:2,name:"Sephora",
  image:Sephora,
  link:"https://merry-puppy-da377d.netlify.app/",
  git:"https://github.com/Vishwa9011/sephora",
  describe:"The best online beauty product website. It is an collaborative Project which is completed in 4-5 days."
},
  {id:3,name:"PhareEasy",
  image:PharmEasy,
  link:"https://frabjous-dango-2bef78.netlify.app/",
  git:"https://github.com/sejal710/grieving-wax-8717/",
  describe:"In this application you can buy any medicine from your home. I can create this website by using html, css and javascript."
},
{
  id:4,
  name:'Codepan',
  image:Codepan,
  link:"https://code-editor-rose-kappa.vercel.app/",
  git:"https://github.com/sejal710/codepan",
  describe:"CodePen is the best place to build, test, and discover front-end code."
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
              <div className='protfolio__content__item__btn'>
                  <div><a href={el.link}> <button>Live</button></a></div>
                  <div><a href={el.git}><button>Code</button></a></div>
              </div>
          </div>
        ))
      }
    </div> 
  </section>
  )
}