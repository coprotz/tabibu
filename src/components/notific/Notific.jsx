import React, { useState } from 'react'
import './notific.css'
import { MdClear, MdNotificationsNone } from "react-icons/md";
import { useAuth } from '../../config';

const Notific = ({setViewNot}) => {
    const { user} = useAuth()
   
  return (
    <div className='notific_wrapper'>    
        <div className='notific_heading'>
            <h4>Notifications</h4>
            <button className='btn' style={{color:'black'}} onClick={() => setViewNot(null)}><MdClear/></button>
        </div>
        <div className="notific_body_inner">
            <div className="notific_card">
                <div className="notific_photo">
                    <img src={user && user.photoURL} alt="" className='img'/>
                </div>
                <div className="notific_details">
                    <p><strong>Dr Muller</strong> sent you a reply message in the Gynocology Room</p>
                    <h5>NOW</h5>
                    <div className="btns_actions_to">
                        <button>ACCEPT</button>
                        <button>REJECT</button>
                    </div>
                </div>
            </div>
            <div className="notific_card">
                <div className="notific_photo">
                    <img src={user && user.photoURL} alt="" className='img'/>
                </div>
                <div className="notific_details">
                    <p><strong>Dr Muller</strong> sent you a reply message in the Gynocology Room</p>
                    <h5>35 Min</h5>
                    <div className="btns_actions_to">
                        <button>ACCEPT</button>
                        <button>REJECT</button>
                    </div>
                </div>
            </div>
            <div className="notific_card">
                <div className="notific_photo">
                    <img src={user && user.photoURL} alt="" className='img'/>
                </div>
                <div className="notific_details">
                    <p><strong>Dr Muller</strong> sent you a reply message in the Gynocology Room</p>
                    <h5>12 Min</h5>
                    <div className="btns_actions_to">
                        <button>ACCEPT</button>
                        <button>REJECT</button>
                    </div>
                </div>
            </div>
        </div>     
    </div>
  )
}

export default Notific
