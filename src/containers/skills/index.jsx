import React from 'react'
import PageHeaderContainer from '../../components/pageHeaderContainer'
import {BsInfoCircleFill} from 'react-icons/bs'

export default function Skills() {
  return (
    <section id='skills' className='skills'>
    <PageHeaderContainer
    headerText='My Skills'
    icon ={<BsInfoCircleFill size={40} />}/>
  </section>
  )
}