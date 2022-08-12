import React, { useState } from 'react'
import './notific.css'
import { MdClear, MdNotificationsNone } from "react-icons/md";
import { useAuth } from '../../config';
import { format } from 'timeago.js'

const Notific = ({setViewNot, notifications}) => {
    const { user} = useAuth()
   
  return (
    <div className='notific_wrapper'>    
        <div className='notific_heading'>
            <h4>Notifications</h4>
            <button className='btn_clear' style={{color:'black'}} onClick={() => setViewNot(null)}><MdClear/></button>
        </div>
        {notifications && notifications.map((item) => (
            <div className="notific_body_inner" key={item.id}>
                <div className="notific_card">
                    <div className="notific_photo">
                        <img src={item && item.photo} alt="" className='img'/>
                    </div>
                    <div className="notific_details">
                        <p><strong>{item && item.user}</strong> {item && item.content} in the {item && item.room}</p>
                        <h5>{format(item && item.time)}</h5>
                    
                        <div className="btns_actions_to">
                            <button>Mark as Read</button>                       
                        </div>
                    </div>
                </div>
            
            </div>   
        ))}  
    </div>
  )
}

export default Notific
