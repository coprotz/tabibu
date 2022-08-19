import React from 'react'
import { BsFillImageFill } from "react-icons/bs";
import { useNavigate } from 'react-router-dom';
import useData from '../../components/hook/useData';
import { useAuth } from '../../config';

const ChatCard = ({chat}) => {
    const {user} = useAuth()
    const { privates, messages, patients, doctors } = useData()
    
    
    const roomMsgs = messages && messages.filter((m) => m.room === chat.id)
    const lastMsg = messages && messages.findLast((m) => m.room === chat.id)
    const isImage = lastMsg && lastMsg.msgType === 'image'

    const memberId = chat && chat.members.find((m) => m !== user.uid)
    const member = patients && patients.find((d) => d.userId === memberId) || doctors && doctors.find((d) => d.userId === memberId)

    const navigate = useNavigate();

  return (
    <div className='dept-item' onClick={() => navigate(`/privates/${chat.id}`)}>
    <div className="member_messages">
        <div className="pr-card-photo">
            <img src={member && member.photo}alt="" />
        </div>
       <div className="member_msg">
            <span className='member_name'>{member && member.name}</span>
            {isImage ? <span className='depart_image'><BsFillImageFill/>Photo</span>:
            <p className='member_text'>{lastMsg && lastMsg.text}</p>}
        </div> 
    </div>
    
    <div className="depart_status">
        <small className='chat_time'>
            {new Date(lastMsg && lastMsg.createdAt.seconds * 1000).toLocaleTimeString()}
            {/* {new Date(lastMsg && lastMsg.createdAt.seconds * 1000).getTime()} */}
        </small>
        <span className='depart_qty'>{roomMsgs && roomMsgs.length}</span>
    </div>
</div>
  )
}

export default ChatCard
