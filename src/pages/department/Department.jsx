import React, { useContext, useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { HiDotsVertical, HiOutlineArrowLeft, HiSearch } from "react-icons/hi";
import Nav from '../../components/nav/Nav'
// import { departments, doctors } from '../../data'
import './depart.css'
import doc1 from '../../components/images/doc2.jpg'
import { doc } from 'firebase/firestore';
import { ProfileContext } from '../../components/hook/context/ProfileContext';
import ViewDoctor from '../../components/viewDoctor/ViewDoctor';
import ChatRoom from '../chatroom/ChatRoom';
import InviteDoc from '../../components/invitedoc/InviteDoc';
import useFetch from '../../components/hook/useFetch';
import { useAuth } from '../../config';
import useData from '../../components/hook/useData';






const Department = () => {

    const {user } = useAuth()
    const { id } = useParams()
    const navigate = useNavigate()

    // const { data: doctors } = useFetch('http://localhost:8000/doctors')
    // const { data: departments, isPending } = useFetch('http://localhost:8000/departments')

    const { departments, doctors } = useData()
    
    const currentRoom = departments && departments.find(d => d.id === id)

    
    // console.log('id', id)

    // const { viewDoctor, setViewDoctor } = useContext(ProfileContext)

    // console.log("profile", viewDoctor)

    const [info, setInfo] = useState(null)
    const [page, setPage] = useState(1)
    const [doctor, setDoctor] = useState("")

    // const mappedDoctors = doctors && doctors.map((doctor) => {
    //     doctor.specializes = departments && departments.filter(name => doctor.specializes.some(a => a === name ));

    //     return doctor
    // })

    // console.log('spec', mappedDoctors)

    const handlePage = (page) => {
        setPage(page);
        setInfo(null)
    }

    const roomDocs = doctors && doctors.filter(d => d.groupId === id)
    console.log('doctors', doctors)

    const [scroll, setScroll] = useState(false);
    useEffect(() => {
    window.addEventListener("scroll", () => {
        setScroll(window.scrollY > 5);
    });
    }, []);

    const dr = doctors && doctors.find((d) => d.id === doctor)
    const specialized = doctors && doctors.filter(d => d.specializes.includes(currentRoom && currentRoom.name))

    const RenderPage = () => {
        if(page === 1){
            return (
            <>               
                <div className= "depart-top" >
                    <div className="depart-left" >
                        <button onClick={() => navigate('/')} className='btn'><HiOutlineArrowLeft/></button>
                        <div className= "depart-left-1" onClick={() => handlePage(2)}>
                             <h3>{currentRoom && currentRoom.name}</h3> 
                            <div className="depart-team">
                                {specialized && specialized.map((d, index) => (
                                    <small key={index}>{d.name}, </small>
                                ))}
                            </div>
                        </div>
                        
                    </div>
                    <div className="depart-right">
                        <button className='btn' onClick={() => setInfo(!info)}><HiDotsVertical/></button>
                        {info &&
                        <div className="depart-info">
                            <span onClick={() => handlePage(2)}>Department Info</span>
                            <span>Report</span>
                        </div>}
                    </div>
                </div>
                <ChatRoom currentRoom={currentRoom && currentRoom.name}/> 
            </>
            )
        }else if(page === 2){
            return (
                <div className='depart-info-container'>
                    <div className={scroll ? 'depart_con_scroll' : "depart_container"}>
                        <div className={scroll ? 'new_div': "info_container_top"}>
                            <button onClick={() => setPage(1)} className='btn' style={{color:'black'}}><HiOutlineArrowLeft/></button>
                            <h1 className={scroll ? 'dept_head_scroll' : 'dept_head'}>{currentRoom.name}</h1>
                            <button className='btn' onClick={() => setInfo(!info)} style={{color:'black'}}><HiDotsVertical/></button>
                        </div>                 
                        <h4>About {currentRoom.name} Dept.</h4>
                        <div className="depart-desc">                       
                            <p>{currentRoom.desc}</p>                        
                        </div>
                        <div className="depart-doctors">
                            <h4>{specialized && specialized.length} Doctors</h4>
                            <button className='btn'><HiSearch/></button>
                        </div>
                        <div className="doctors_container">                            
                                {specialized && specialized.map(doc => (
                                <div className="doctor_card">
                                    <div className="doc_details" key={doc.id} onClick={() => navigate(`/profile/${doc.id}`)}>
                                        <div className="doc_photo">
                                            <img className='img' src={doc1} alt="" />
                                        </div>
                                        <div className="doc_name">
                                            <span>{doc.name}</span>
                                        </div>
                                    </div>
                                    <div className="doc_status">
                                        <small>{doc.lastSeen}</small>
                                    </div>
                                    <label htmlFor={doc.id} className={doctor === doc.id ? 'doctor_selected ': 'doctor_label'}>
                                        <input 
                                        type="radio" 
                                        name='doctor'
                                        id={doc.id} 
                                        style={{display: 'none'}}
                                        value={doc.id}
                                        className='invite_input' 
                                        onChange={(e) => setDoctor(e.target.value)}                                        
                                    />
                                    </label>
                                </div>  
                                ))}
                        
                    
                        </div>
                    </div>
                    {/* {doctor &&
                         <InviteDoc setDoctor={setDoctor} dr={dr} doctor={doctor}/>
                    } */}
                </div>
            )
        }else if(page === 3){
            return (
                <div className='depart-info-container'>                   
                    <div className="info_container_top">
                        <button onClick={() => setPage(1)} className='btn' style={{color:'black'}}><HiOutlineArrowLeft/></button>
                        <button className='btn' onClick={() => setInfo(!info)} style={{color:'black'}}><HiDotsVertical/></button>
                    </div>
                    <h1 className='dept_head'>{currentRoom.name}</h1>
                    <div className="depart-doctors">
                        <h4>{roomDocs.length} Doctors</h4>
                        <button className='btn'><HiSearch/></button>
                    </div>
                    <div className="doctors_container">
                        
                            {roomDocs && roomDocs.map(doc => (
                            <div className="doctor_card">
                                <div className="doc_details" key={doc.id}>
                                    <div className="doc_photo">
                                        <img className='img' src={doc1} alt="" />
                                    </div>
                                    <div className="doc_name">
                                        <span>{doc.name}</span>
                                    </div>
                                </div>
                                <div className="doc_status">
                                    <small>{doc.lastSeen}</small>
                                </div>
                                <input type="radio" />
                              </div>  
                            ))}
                       
                 
                    </div>
                  
                </div>
            )

         }
    }
  return (
    <div className='depart-container'>
         {/* {viewDoctor && 
            <ViewDoctor />
        } */}
        {/* <Nav/> */}
      
        {RenderPage()}
        
    </div>
  )
}

export default Department
