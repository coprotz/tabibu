import React from 'react'
import { HiMenuAlt4, HiOutlineGlobeAlt } from "react-icons/hi";
import './nav.css'

const Nav = () => {
  return (
    <nav>
        <div className="app-name">Tabibu App</div>
        <div className="app-nav-left">
            <button className='btn-lang'><HiOutlineGlobeAlt/> English</button>
            <button className='btn-menu'><HiMenuAlt4/></button>
        </div>
    </nav>
  )
}

export default Nav
