
import React from 'react'
import PageHeaderContainer from '../../components/pageHeaderContainer'
import {BsInfoCircleFill} from 'react-icons/bs'

export default function Contact() {
  return (
    <section id='contact' className='contact'>
    <PageHeaderContainer
    headerText='My Contact'
    icon ={<BsInfoCircleFill size={40} />}/>
  </section>
  )
}