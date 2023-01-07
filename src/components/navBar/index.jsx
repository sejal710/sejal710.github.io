import React, { useState } from 'react';
import {FaBars,FaReact} from 'react-icons/fa';
import { Link} from 'react-router-dom';
import {HiOutlineX} from 'react-icons/hi'
import './style.scss'

const data = [
    {label : 'HOME', to : '/'},
    {label : 'ABOUT ME', to : '/about'},
    {label : 'SKILLS', to : '/skills'},
    {label : 'PROJECT', to : '/project'},
    {label : 'CONTACT', to : '/contact'}, 
]

export default function Navbar() {
    const [toggleIcon,setToggleIcon] = useState(false)
    const handleToggleIcon = () => {
       setToggleIcon(!toggleIcon)
    }
  return (
    <div style={{zIndex:'1'}}>
        <nav className='navbar' >
          <div className='navbar_container'>
             <Link to='/' className='navbar_container_logo'><FaReact size={30} /></Link>
          
          <ul className={`navbar_container_menu ${toggleIcon ? 'active' : '' }`}>
             { data.map((item,i) => (
                <li key={i} className='navbar_container_menu_item' onClick={handleToggleIcon}>
                  <Link className='navbar_container_menu_item_links' to={item.to}>
                    {item.label}
                  </Link>
                </li>
            ))}
            
              <li className='navbar_container_menu_item last' onClick={handleToggleIcon}>
                <a href="https://drive.google.com/file/d/1cGcCIxgaPzXIjRjcu09ZErU98GUzQK7f/view?usp=share_link">
                <button>
                  Resume
                </button>
                </a>
                </li>
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
