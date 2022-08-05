import React, { useState } from 'react'
import { HiMenuAlt4, HiOutlineGlobeAlt } from "react-icons/hi";
import './nav.css'
import { useAuth } from '../../config';
import { MdClear } from "react-icons/md";
import qr from '../../components/images/qrcode.png'

const Nav = () => {

  const { user, logOut } = useAuth()
  const [menu, setMenu] = useState(null)
 
  return (
    <nav>
        
        <div className="app-name">TABIBU<strong>CHAT</strong></div>
        
        <div className="app-nav-left">
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
                      <div className="username_title">
                        <div className="username_photo">
                          <img src={user.photoURL} alt="" className='img'/>
                        </div>
                        <h4>{user.displayName}</h4>
                      </div>
                      <span className='app_menu_list_item'>Home</span>
                      <span className='app_menu_list_item'>About</span>
                      <span className='app_menu_list_item'>Pricing</span>
                      <span className='app_menu_list_item'>Subscription</span>
                      <span className='app_menu_list_item'>Contact Us</span>
                      <span className='app_menu_list_item'>Privacy</span>
                      <span className='app_menu_list_item'>Terms of Use</span>
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
