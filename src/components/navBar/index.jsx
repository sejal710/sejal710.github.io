import React, { useState } from 'react';
import {FaBars,FaReact} from 'react-icons/fa';
import { Link } from 'react-router-dom';
import {HiOutlineX} from 'react-icons/hi'
import './style.scss'
const data = [
    {label : 'HOME', to : '/'},
    {label : 'ABOUT ME', to : '/about'},
    {label : 'SKILLS', to : '/skills'},
    {label : 'RESUME', to : '/resume'}, 
    {label : 'PROTFOLIO', to : '/protfolio'},
    {label : 'CONTACT', to : '/contact'}, 
]

export default function Navbar() {
    const [toggleIcon,setToggleIcon] = useState(false)
    const handleToggleIcon = () => {
       setToggleIcon(!toggleIcon)
    }
  return (
    <div >
        <nav className='navbar'>
          <div className='navbar_container'>
             <Link to='/' className='navbar_container_logo'><FaReact size={30} /></Link>
          
          <ul className={`navbar_container_menu ${toggleIcon ? 'active' : '' }`}>
             { data.map((item,i) => (
                <li key={i} className='navbar_container_menu_item'>
                  <Link className='navbar_container_menu_item_links' to={item.to}>
                    {item.label}
                  </Link>
                </li>
            ))}
           
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
