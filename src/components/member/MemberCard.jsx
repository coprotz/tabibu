import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../../config'
import useData from '../hook/useData'
import './membercard.css'
import moment from 'moment'

const MemberCard = ({chat, chats}) => {
    const { user } = useAuth()
    const {patients, doctors, messages} = useData();
    const navigate = useNavigate();
    // const currentChat = chats && chats.find((p) => p.id === chat.id)
    const memberId = chat && chat.members.find((m) => m !== user.uid)
    const member = patients && patients.find((d) => d.userId === memberId) || doctors && doctors.find((d) => d.userId === memberId)
    const lastMsg = messages && messages.findLast((m) => m.room === chat.id)

  return (
    <div className="member_card" key={chat.id} onClick={() => navigate(`/profile/${memberId}`)}>
        <div className="card-top">
            <div className="pr-card-photo">
                <img src={member && member.photo}alt="" />
            </div>
            <small>{member && member.name}</small> 
        </div>
        <small className='last_time'>{moment(lastMsg && lastMsg.createdAt.toDate()).fromNow()}</small>       
    </div>
  )
}

export default MemberCard
