import React from 'react'
import qr from '../images/doc1.jpg'

const MsgNotCard = () => {
  return (
    <div className="msg_nots">
        <div className="msg_msg">               
            <di className="msg_image">
                <img src={qr} alt=""/>
            </di>
            <div className="msg_body">
                <h4>Juma Omary</h4>
                <p>Salama kabisa wangu</p>
            </div>
        </div>
        <div className="msg_time">12 min</div>
    </div>
  )
}

export default MsgNotCard
