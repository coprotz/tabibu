import React, { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import {  HiOutlineArrowLeft, } from "react-icons/hi";
import StopWatch from '../../components/stopwatch/StopWatch';
import ChatRoom from './ChatRoom';
// import SendForm from '../../components/sendForm/SendForm';
// import useFetch from '../../components/hook/useFetch';
import useData from '../../components/hook/useData';



const PrivateRoom = ({ user}) => {
    const { id } = useParams();

    // const { data: doctors, isPending } = useFetch('http://localhost:8000/doctors')
    // const { data: messages } = useFetch('http://localhost:8000/messages')
    // const { data: privates } = useFetch('http://localhost:8000/privates')

    const { doctors, messages, privates, patients } = useData()
    
    const navigate = useNavigate()  
    const currentChat = privates && privates.find((c) => c.id === id)
    const memberId = currentChat && currentChat.members.find((m) => m !== user.uid)
    const member = doctors && doctors.find((d) => d.userId === memberId) || patients && patients.find((d) => d.userId === memberId) 
    const doctor = doctors && doctors.find((d) => d.userId === memberId)

    const [show, setShow] = useState(null)
       

    console.log('currentChat', currentChat)
    console.log('memberid', memberId)
    console.log('member', member)
    console.log('user', user.uid)

  return (
    <div className='private_wrapper'>
      <div className="private_comp_top">      
        <div className="private_room_photo">
          <button onClick={() => navigate(-1)} className='btn'><HiOutlineArrowLeft/></button>
       
          <div className='member_wrap' onClick={() => navigate(`/profile/${member && member.userId}`)}>
            <div className='wraper_iiner'>
              <div className="pri_photo_cap">
                  <img src={member && member.photoURL} alt="" />
              </div>
              <span>{member && member.name}</span>
            </div>
            {doctor &&
            <div className='member_specs'>
                {member && member.specializes.map((item, index) => (
                  <small key={index}>{item} ,</small>
                ))}
            </div>}
            
          </div>
        </div>  
        <StopWatch member={member}/>      
      </div>
      <div className="private_comp_body">
        <ChatRoom currentRoom={id} messages={messages}/>
     
      </div>

    </div>
  )
}

export default PrivateRoom
