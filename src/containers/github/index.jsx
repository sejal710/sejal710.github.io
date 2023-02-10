import React from 'react'
import PageHeaderContainer from '../../components/pageHeaderContainer'
import {AiFillGithub} from 'react-icons/ai'
import GitHubCalendar from "react-github-calendar";
import './style.scss'

export default function Github() {

  return (
    <section id='github' className='github'>
    <PageHeaderContainer
    headerText='My Github'
    icon ={<AiFillGithub size={40} />}/>

    <div className='github_calender' >
      <div className='github_calender__language'>
      <img align="left" src="https://github-readme-stats-sigma-five.vercel.app/api/top-langs?username=sejal710&show_icons=true&locale=en&layout=compact" alt="sejal710" />
      </div>
    <div className='github_calender__strike'>
      <div><img align="center" width='100%'
    src="https://github-readme-streak-stats.herokuapp.com/?user=sejal710&border_radius=-2&theme=sea" 
    alt="sejal710" />
      </div>
      <div>
      <img align="center" src="https://github-readme-stats-sigma-five.vercel.app/api?username=sejal710&show_icons=true&locale=en" alt="sejal710" />
      </div>
    </div>
    <div className='github_calender__claen'>
    <GitHubCalendar
    username="sejal710"
    blockSize={15}
    color={'var(--yellow-theme-main-color)'}
    blockMargin={5}
    /> 
    </div>

    </div>
  </section>
  )
}