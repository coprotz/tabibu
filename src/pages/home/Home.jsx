import React, { useContext, useState } from 'react'
import { departments, doctors } from '../../data'
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





const Home = () => {

    const { viewDoctor, setViewDoctor } = useContext(ProfileContext)
    const navigate = useNavigate()
    const [doctor, setDoctor] = useState("")
    const dr = doctors.find((d) => d.id === doctor)

    // console.log('doctor', viewDoctor)
    const [searchTerm, setSearchTerm] = useState("")

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
                    }).map(doc => (
                        <DoctorCard 
                            doc={doc}
                            setDoctor={setDoctor}
                            setViewDoctor={setViewDoctor}
                            doctor={doctor}
                        />
                    ))}
                    {doctor &&
                    <button 
                        className='btn_docs'        
                        >Invite {dr && dr.name} for Consultation
                        <div className="btns_actions">
                            <button onClick={() =>navigate(`/private/${doctor}`)}>OK</button>
                            <button onClick={() => setDoctor("")}>Cancel</button>
                        </div>
                    </button>
                    }
                                
                            
                {/* </div> */}
             </div>}
           </div>
           

            
            <div className="depts">
                <h3 className='room-title'>Departments</h3>
                <div className="depts-container">
                    {departments.map((item) => (
                        <Link to={`/depart/${item.id}`} key={item.id} className='dept-item'>{item.name}</Link>
                    ))}
                </div>
            </div>
            <div className="private-chats">
                <div className="private-chats-inner">
                    <h3 className='room-title'>Private Chats</h3>
                    <button className='btn-clear' onClick={() => navigate('/doctors')}><HiOutlinePlus/></button>
                </div>
                <div className="pr-chats-wrapper">
                    <div className="private-card">
                        <div className="card-top">
                           <div className="pr-card-photo">
                                <img src={doc1}alt="" />
                            </div>
                            <small>Dr. Husna</small> 
                        </div>
                        <span style={{backgroundColor: '#00FF00'}}></span>
                        
                    </div>
                    <div className="private-card">
                        <div className="card-top">
                           <div className="pr-card-photo">
                                <img src={doc2}alt="" />
                            </div>
                            <small>Dr. Rose</small> 
                        </div>
                        <span style={{backgroundColor: '#00FF00'}}></span>
                        
                    </div>
                    <div className="private-card">
                        <div className="card-top">
                           <div className="pr-card-photo">
                                <img src={doc3}alt="" />
                            </div>
                            <small>Dr. Khalid</small> 
                        </div>
                        <span style={{backgroundColor: '#ABB2B9'}}></span>
                        
                    </div>
                </div>
                
            </div>

        </div>
      
    </div>
  )
}

export default Home
