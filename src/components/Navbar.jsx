import React, { useState } from 'react'
import Rooms from '../pages/chatroom/Rooms'
import Logout from './Logout'
import { HiOutlineMenuAlt4, HiOutlineX } from "react-icons/hi";
import './style.css'


const Navbar = ({user, currentRoom, setCurrentRoom}) => {
    const [showSideBar, setShowSidebar] = useState(false)
  return (
    <nav>
      <h1>Current Dept: <strong>{currentRoom}</strong></h1>
      {user ? (
      <div className='menu_wrapper'>
        <button
            className='menu'
            onClick={() => {
                setShowSidebar(!showSideBar)
            }}
            >
            <div className={showSideBar? 'hide' : 'show'}>
              <HiOutlineMenuAlt4/>
            </div>
            <div className={showSideBar? 'show' : 'hide'}>
              <HiOutlineX/>
            </div>
        </button>
        <ul
          className='list-menu'
          style={{ top: showSideBar && user ? '10vh' : '-100vh' }}
          >
            <li>
              <Logout setShowSidebar={setShowSidebar} user={user}/>
            </li>
            <li>                    
              <Rooms
                currentRoom={currentRoom}
                setCurrentRoom={setCurrentRoom}
                setShowSidebar={setShowSidebar}/>
            </li>
        </ul>
      </div>
      ): null}
    </nav>
  )
}

export default Navbar
