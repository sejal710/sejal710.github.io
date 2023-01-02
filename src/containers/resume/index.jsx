import React from 'react'
import PageHeaderContainer from '../../components/pageHeaderContainer'
import {BsInfoCircleFill} from 'react-icons/bs'

export default function Resume() {
  return (
    <section id='resume' className='resume'>
    <PageHeaderContainer
    headerText='My Resume'
    icon ={<BsInfoCircleFill size={40} />}/>
  </section>
  )
}