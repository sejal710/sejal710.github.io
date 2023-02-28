import React, { useState } from 'react';
import {FaBars,FaReact} from 'react-icons/fa';
import { Link} from 'react-router-dom';
import {HiOutlineX} from 'react-icons/hi'
import './style.scss'
import resume from '../../Resume/Sejal_Jaiswal_Resume.pdf'

export default function Navbar() {
  
const data = [
  {label : 'HOME', to : '#home'},
  {label : 'ABOUT ME', to : "#about"},
  {label : 'SKILLS', to : '#skills'},
  {label : 'PROJECT', to : '#project'},
  {label : 'GITHUB' ,to : '#github'},
  {label : 'CONTACT', to : '#contact'},
  {label:"RESUME",to:resume}
]
    const [toggleIcon,setToggleIcon] = useState(false)
    const handleToggleIcon = () => {
       setToggleIcon(!toggleIcon)
    }
  return (
    <div className='nav'>
        <nav className='navbar' >
          <div className='navbar_container'>
             <a href='#home' className='navbar_container_logo'><FaReact size={30} /></a>
          
          <ul className={`navbar_container_menu ${toggleIcon ? 'active' : '' }`}>
             { data.map((item,i) => (
                <li key={i} className='navbar_container_menu_item' onClick={handleToggleIcon}>
                  {item.label === 'Resume' ? <a className='navbar_container_menu_item_links' href={item.to} download>  {item.label}
                  </a> :
                  <a className='navbar_container_menu_item_links' href={item.to}>
                    {item.label}
                  </a>}
                </li>
            ))}
            
              {/* <li className='navbar_container_menu_item last' onClick={handleToggleIcon}>
                <a href="https://drive.google.com/file/d/1cGcCIxgaPzXIjRjcu09ZErU98GUzQK7f/view?usp=share_link" target="_blank">
                <button>
                  Resume
                </button>
                </a>
                </li> */}
          </ul> 
          <div className='nav-icons' onClick={handleToggleIcon}>
             {
                toggleIcon ? <HiOutlineX size={30} /> : <FaBars size={30} />
             }
          </div></div>
        </nav>
    </div>
  )
}
