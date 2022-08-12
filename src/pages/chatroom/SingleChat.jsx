import React from 'react'
import { useNavigate } from 'react-router-dom'
import useFetch from '../../components/hook/useFetch'
import doc1 from '../../components/images/doc2.jpg'
import { BsChatLeftText, BsEye } from "react-icons/bs";
import useData from '../../components/hook/useData';


const SingleChat = ({chat, activeChats, user}) => {

  // const { data: doctors, isPending, Error } = useFetch('http://localhost:8000/doctors');
  // const { data: patients } = useFetch('http://localhost:8000/patients');

  const { patients, doctors } = useData()

    const navigate = useNavigate();
    const currentChat = activeChats && activeChats.find((p) => p.id === chat.id)
    const memberId = currentChat && currentChat.members.find((m) => m !== user.uid)
    const member = patients && patients.find((d) => d.userId === memberId) || doctors && doctors.find((d) => d.userId === memberId)

    // console.log('member', member)


  return (
    <div className="private-card" key={chat.id} onClick={() => navigate(`/privates/${chat.id}`)}>
        <div className="card-top">
            <div className="pr-card-photo">
                <img src={member && member.photo}alt="" />
            </div>
            <small>{member && member.name}</small> 
        </div>
        <span className={member && member.isOnline ? 'member_status': 'member_off'}></span>       
    </div>
  )
}

export default SingleChat
