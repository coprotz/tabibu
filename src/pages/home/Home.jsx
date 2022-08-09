import React, { useContext, useEffect, useRef, useState } from 'react'
// import { doctors } from '../../data'
import { HiOutlinePlus } from "react-icons/hi";
import { Link, useNavigate } from 'react-router-dom';
import './home.css'
import doc1 from '../../components/images/doc2.jpg'
import doc2 from '../../components/images/doc3.jpg'
import doc3 from '../../components/images/doctor.jpg'
import Nav from '../../components/nav/Nav';
import ViewDoctor from '../../components/viewDoctor/ViewDoctor';
import { ProfileContext } from '../../components/hook/context/ProfileContext';
import Search from '../../components/search/Search';
import logo from '../../components/images/chat3.png'
import DoctorCard from '../../components/doctorcard/DoctorCard';
import InviteDoc from '../../components/invitedoc/InviteDoc';
import { useAuth } from '../../config';
import SingleChat from '../chatroom/SingleChat';
import useData from '../../components/hook/useData';
import useFetch from '../../components/hook/useFetch';






const Home = () => {

    // const { data: departments, isPending, Error } = useFetch('http://localhost:8000/departments');
    // const { data: doctors } = useFetch('http://localhost:8000/doctors');
    // const { data: privates } = useFetch('http://localhost:8000/privates');

    const { departments, doctors, privates } = useData()

    const { user } = useAuth()

    console.log('user', user)

    const { viewDoctor, setViewDoctor } = useContext(ProfileContext)
    const navigate = useNavigate()
    const [doctor, setDoctor] = useState("")    
 
    const isDoctor = doctors && doctors.find((d) => d.userId === user.uid)
    const userPrivates = privates && privates.filter((p) => p.members.find(m => m.includes(user.uid)))
    const [searchTerm, setSearchTerm] = useState("")

    console.log('isDr', isDoctor)

  return (
    <div className='home'>
        {viewDoctor && 
        <ViewDoctor />
        }
        <div className="home_left">
            <div className="home_logo">
                <img src={logo} alt="" className='img'/>
            </div>
        </div>
        <div className="home_container">            
           <Nav />
           <div className="search_box">
             <Search setSearchTerm={setSearchTerm}/>
             {searchTerm &&
             <div className="search_res">
                {/* <div className="doctors_grid">                             */}
                    {doctors && doctors.filter((val) => {
                        if(searchTerm === ''){
                            return val
                        }else if(val.name.toLowerCase().includes(searchTerm.toLocaleLowerCase())){
                            return val
                        }
                    }).map(doctor => (
                        <DoctorCard 
                            // doc={doc}
                            // setDoctor={setDoctor}
                            // setViewDoctor={setViewDoctor}
                            doctor={doctor}
                        />
                    ))}
                    {/* {doctor &&
                   
                    <InviteDoc setDoctor={setDoctor} dr={dr}/>
                    } */}
                                
                            
                {/* </div> */}
             </div>}
           </div>
            <div className="depts">
                <h3 className='room-title'>Departments</h3>
               
                <div className="depts-container">
                    {departments && departments.map((item) => (
                        <Link to={`/depart/${item.id}`} key={item.id} className='dept-item'>{item.name}</Link>
                    ))}
                </div>
            </div>
            <div className="private-chats">
                <div className="private-chats-inner">
                    <h3 className='room-title'>Private Chats</h3>
                    {!isDoctor &&
                    <button className='btn-clear' onClick={() => navigate('/doctors')}><HiOutlinePlus/></button>}
                </div>
                <div className="pr-chats-wrapper">
                    {userPrivates && userPrivates.map((chat) => (
                        <SingleChat chat={chat} doctors={doctors} activeChats={userPrivates} user={user}/>
                    ))}                 
               
                </div>
                
            </div>

        </div>
      
    </div>
  )
}

export default Home
