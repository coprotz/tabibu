import React from 'react'
import './msg.css'
import MsgNotCard from './MsgNotCard'
import { BsX, BsChatLeftDots } from "react-icons/bs";


const MsgNots = ({setViewMsg}) => {
  return (
    <div className='msg_not_outer'>
      <div className="msg_not_top">
        <h4 className='msg_not_head'><BsChatLeftDots/>Messages</h4>
        <button className='btn_clear' style={{color: 'white'}} onClick={() => setViewMsg(null)}><BsX/></button>
      </div>
        <MsgNotCard />
        <MsgNotCard />
        <MsgNotCard />
        <div className="msg_bottom">
            See all messages
        </div>
    </div>
  )
}

export default MsgNots
