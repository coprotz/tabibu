import React from 'react'
import { useNavigate } from 'react-router-dom';
import useFetch from '../../components/hook/useFetch';
import { useAuth } from '../../config';
import SingleChat from '../chatroom/SingleChat';



const Home = () => {
    const { user } = useAuth()
    const { data: doctors } = useFetch('http://localhost:8000/doctors');
    
    const { data: privates } = useFetch('http://localhost:8000/privates');
    const doctorChats = privates && privates.filter((p) => p.members.find(m => m.includes(user.uid)))

    const navigate = useNavigate()

  return (
    <>
    <div className='account_home_wrapper'>
      <div className="home_card">
        <small>Patients Attended</small>
        <h1>325</h1>
      </div>
      <div className="home_card">
        <small>New Appointments</small>
        <h1>5</h1>
      </div>
      <div className="home_card">
        <small>New Labs Tests results</small>
        <h1>5</h1>
      </div>
      <div className="home_card">
        <small>New Message</small>
        <h1>5</h1>
      </div>
      <div className="home_card">
        <small>Total Hours Spent in Consultations todate</small>
        <h1>325</h1>
      </div>
      <div className="home_card">
        <small>Patients Attended</small>
        <h1>325</h1>
      </div>
    
    </div>
    <div className="private-chats">
        <div className="private-chats-inner">
            <h3 className='room-title'>Private Chats</h3>
            {/* <button className='btn-clear' onClick={() => navigate('/doctors')}><HiOutlinePlus/></button> */}
        </div>
        <div className="pr-chats-wrapper">
            {doctorChats && doctorChats.map((chat) => (
                <SingleChat chat={chat} activeChats={doctorChats} user={user}/>
            ))}                 
               
        </div>
                
    </div>
    </>
    
  )
}

export default Home
