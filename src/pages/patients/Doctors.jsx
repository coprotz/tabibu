import React from 'react'
import useData from '../../components/hook/useData'
import MemberCard from '../../components/member/MemberCard'
import { useAuth } from '../../config'
// import DoctorCard from '../doctors/doctorcard/DoctorCard'

const Doctors = () => {
    const {user} = useAuth()
    const {privates} = useData()
    const chats = privates && privates.filter((p) => p.members.find(m => m.includes(user.uid)))


  return (
    <div className='profile_wrapper'>
        <h1 className='a_page_title'>Doctors</h1>
        <div className="doctors_inner">
            <h4 className='attended_doc'>Doctors attended you</h4>
            {chats && chats.map(chat => (
                <MemberCard chat={chat} key={chat.id}/>
            ))}
        </div>
    
    </div>
  )
}

export default Doctors
