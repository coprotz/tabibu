import React, { useState } from 'react'
import { HiMenuAlt4, HiOutlineGlobeAlt } from "react-icons/hi";
import { useNavigate } from 'react-router-dom'
import './nav.css'
import { useAuth } from '../../config';
import { MdClear } from "react-icons/md";
import qr from '../../components/images/qrcode.png'
import Notific from '../notific/Notific';
import useData from '../hook/useData';
import {  BsBell } from "react-icons/bs";
// import MsgNotCard from '../msgNotifications/MsgNotCard';
// import MsgNots from '../msgNotifications/MsgNots';

const Nav = () => {

  const { user, logOut } = useAuth()
  const [menu, setMenu] = useState(null)
  const [viewNot, setViewNot] = useState(null) 
  // const [viewMsg, setViewMsg] = useState(null)
  
  const { doctors, notifications } = useData();

  const id = user && user.uid

  const doctor = doctors && doctors.find((d) => d.userId === user && user.uid)
  // const patient = patients && patients.find((d) => d.userId === user && user.uid) 
  // const userRooms = messages && messages.filter(m => m.uid.includes(user && user.uid))
  const userNots = notifications && notifications.filter((n) => n.userId !== id && id) 

  const reads = userNots && userNots.filter((n) => n.isRead.includes(user && user.uid))
  const unReads = userNots && userNots.length - reads.length

  console.log('reads', reads.length);
  console.log('unReads', unReads);

  // console.log('unRead', unRead.length)



 

  const handleChange = (page) => {
    navigate(page)
    setMenu(false)
  }
  const navigate = useNavigate()
 
  return (
    <nav>
        <div className="app-name" onClick={() =>navigate('/')}>TABIBU<strong>CHAT</strong></div>
        <button className='btn-lang'><HiOutlineGlobeAlt/></button>
        {user && 
        <div className="app-nav-left">
            {/* <div className="view_msg">
              <span className='span_notific'></span>             
            </div> */}
            <div className="notific_app">
              {unReads > 0 &&
              <span className='span_notific'></span>}             
                <button className='btn_msg' onClick={() => setViewNot(!viewNot)}><BsBell/></button>
                {viewNot &&        
                  <Notific  setViewNot={setViewNot} userNots={userNots} unReads={unReads} viewNot={viewNot}/>              
                }
 
            </div>                    
              
            <button className='btn-menu' onClick={() => setMenu(true)}><HiMenuAlt4/></button>
              {menu &&
              <div className="app_menu_outer">
                <div className="app_menu">                 
                    <div className="app_menu_head">
                      <span>TABIBU<strong>CHAT</strong></span>
                      <button className='btn' onClick={() => setMenu(null)}><MdClear/></button>
                    </div>
                    <div className="qr_code">
                      <img src={qr} alt="" className='img_code'/>
                    </div>
                    <div className="app_menu_lists">                    
                      <div className="username_title" onClick={() => handleChange('/account')}>
                        <div className="username_photo">
                          {user? 
                          <img src={user.photoURL} alt="" className='img'/>:
                          <span className='user_icon'>{user.displayName[0]}</span>}
                        </div>
                        <h4>{doctor ? doctor.name : user.displayName}</h4>
                      </div>
                      <span className='app_menu_list_item' onClick={() => handleChange('/')}>Home</span>
                      <span className='app_menu_list_item' onClick={() => handleChange('/about')}>About</span>
                      <span className='app_menu_list_item' onClick={() => handleChange('/pricing')}>Pricing</span>
                      <span className='app_menu_list_item' onClick={() => handleChange('/subscribe')}>Subscription</span>
                      <span className='app_menu_list_item' onClick={() => handleChange('/contact')}>Contact Us</span>
                      <span className='app_menu_list_item' onClick={() => handleChange('/privacy')}>Privacy</span>
                      <span className='app_menu_list_item' onClick={() => handleChange('/terms')}>Terms of Use</span>
                      <button className='btn_logout' onClick={() =>logOut()}>LOG OUT</button>
                    </div>
                    <div className="app_footer">
                      <small>Powered by BarruTech</small>
                    </div>
                    
                  </div>
                </div>}
        </div> }
    </nav>
  )
}

export default Nav
