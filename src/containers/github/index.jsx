import React from 'react'
import PageHeaderContainer from '../../components/pageHeaderContainer'
import {AiFillGithub} from 'react-icons/ai'
import GitHubCalendar from "react-github-calendar"
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
    src="https://github-readme-streak-stats.herokuapp.com/?user=sejal710&border_radius=-2&theme=gruvbox" 
    alt="sejal710" />
    </div>
    <div>
    <GitHubCalendar
    username="sejal710"
    blockSize={15}
    blockMargin={5}
    color={'var(--yellow-theme-main-color)'}
    fontSize={13}
    /> 
    </div>

    </div>
  </section>
  )
}