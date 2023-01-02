import React from 'react'
import PageHeaderContainer from '../../components/pageHeaderContainer'
import {BsInfoCircleFill} from 'react-icons/bs'

export default function Protfolio() {
  return (
    <section id='protfolio' className='protfolio'>
    <PageHeaderContainer
    headerText='My Protfolio'
    icon ={<BsInfoCircleFill size={40} />}/>
  </section>
  )
}