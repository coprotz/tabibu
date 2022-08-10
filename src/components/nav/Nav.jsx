import React, { useState } from 'react'
import { HiMenuAlt4, HiOutlineGlobeAlt } from "react-icons/hi";
import { useNavigate, useParams } from 'react-router-dom'
import './nav.css'
import { useAuth } from '../../config';
import { MdClear, MdNotificationsNone } from "react-icons/md";
import qr from '../../components/images/qrcode.png'
import Notific from '../notific/Notific';
import useData from '../hook/useData';

const Nav = () => {

  const { user, logOut } = useAuth()
  const [menu, setMenu] = useState(null)
  const [viewNot, setViewNot] = useState(null) 
  
  const { doctors, patients } = useData();

  const doctor = doctors && doctors.find((d) => d.userId === user && user.uid)
  const patient = patients && patients.find((d) => d.userId === user && user.uid)

 

  const handleChange = (page) => {
    navigate(page)
    setMenu(false)
  }
  const navigate = useNavigate()
 
  return (
    <nav>
       
        <div className="app-name">TABIBU<strong>CHAT</strong></div>
        
        <div className="app-nav-left">
          {user && 
            <div className="notific_app">
              <span className='span_notific'>5</span>
              <button className='btn_notific' onClick={() => setViewNot(true)}><MdNotificationsNone/></button>
              {viewNot && 
              <Notific  setViewNot={setViewNot}/>}
            </div>}
            
            <button className='btn-lang'><HiOutlineGlobeAlt/> English</button>
            {user && <>           
              
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
          
              </>
            }
        </div>
    </nav>
  )
}

export default Nav
