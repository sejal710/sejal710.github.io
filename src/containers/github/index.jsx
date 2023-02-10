import React from 'react'
import PageHeaderContainer from '../../components/pageHeaderContainer'
import {AiFillGithub} from 'react-icons/ai'
import GitHubCalendar from "react-github-calendar";
// import ReactTooltip from 'react-tooltip';
import './style.scss'

export default function Github() {

  return (
    <section id='github' className='github'>
    <PageHeaderContainer
    headerText='My Github'
    icon ={<AiFillGithub size={40} />}/>
    <div className='github_calender' >
    <div>
    <img align="center" width='100%'
    src="https://github-readme-streak-stats.herokuapp.com/?user=sejal710&border_radius=-2&theme=sea" 
    alt="sejal710" />
    </div>
    <div>
    <GitHubCalendar
    username="sejal710"
    blockSize={15}
    color={'var(--yellow-theme-main-color)'}
    blockMargin={5}
    fontSize={13}
    // children={<ReactTooltip html />}
    /> 
    </div>

    </div>
  </section>
  )
}