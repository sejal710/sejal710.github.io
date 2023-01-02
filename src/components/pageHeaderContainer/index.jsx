
import React from 'react'
import './style.scss'

export default function PageHeaderContainer(props) {
   const {headerText,icon} = props;
  return (
    <div className='wrapper'>
      <h2>{headerText}</h2>
      <span>{icon}</span>
    </div>
  )
}
