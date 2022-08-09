import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import doc1 from '../../components/images/doc2.jpg'
import { BsXLg } from "react-icons/bs";
import useData from '../../components/hook/useData';
import { BsChatText, BsCalendarPlus } from "react-icons/bs";
import { db, useAuth } from '../../config';
import { addDoc, collection } from 'firebase/firestore';
import { ImSpinner5 } from "react-icons/im";
// import useFetch from '../../components/hook/useFetch';


const SingleDoctor = ({doctor}) => {

    const navigate = useNavigate()   

    const { privates } = useData()

    const { user } = useAuth()

    // const doctorRooms = privates && privates.filter((p) => p.userId)
    const doctorRooms = privates && privates.filter((p) => p.members.find(m => m.includes(doctor.userId)))
    const isMember = doctorRooms && doctorRooms.find((p) => p.members.find(m => m.includes(user.uid)))

    // console.log('room', doctorRooms)

    const privatesRef = collection(db, 'privates')
    const [err, setErr] = useState('')
    const [loading, setLoading] = useState(null)

    const data = {
        members: [`${doctor.userId}`, `${user.uid}`]
    }

    const handleText = async (e) => {
        e.preventDefault()

        setLoading(true)

        try {
            const res = await addDoc(privatesRef, data)
            if(res){
                navigate(`/privates/${res.id}`)
            }
            setLoading(false)
        } catch (error) {
            setErr(err.message)
        }

    }

    const [page, setPage] = useState(1)

    const RenderPage = () => {
        if(page === 1){
            return (
          
                   <div className="profile_info1">
                        <div className="profile_detail_item">
                            <h3>Hospital</h3>
                            <span>{doctor && doctor.hospital}</span>
                        </div>
                        <div className="profile_detail_item">
                            <h3>Department</h3>
                            <span>{doctor && doctor.department}</span>
                        </div>
                        <div className="profile_detail_item">
                            <h3>Clinic</h3>
                            <span>{doctor && doctor.clinic}</span>
                        </div>
                        <div className="profile_detail_item">
                            <h3>Education</h3>
                            <span>{doctor && doctor.education}</span>
                        </div>
                        <div className="profile_detail_item">
                            <h3>Years of Experiences</h3>
                            <span>{doctor && doctor.experiences}</span>
                        </div>
                        <div className="profile_detail_item">
                            <h3>Region</h3>
                            <span>{doctor && doctor.region}</span>
                        </div>
                        <div className="profile_detail_item">
                            <h3>District</h3>
                            <span>{doctor && doctor.district}</span>
                        </div>
                   </div>
            
            )
        }else if( page === 2){
            return (
              
                <div className="profile_inner_group">
                    <label htmlFor="">SPECIALIZED</label>
                    <div className="doc_specs">
                        {doctor && doctor.specializes.map((s,index) => (
                            <span key={index}>{s} </span>
                        ))}
                    </div>
                </div>
         
            )
        }else if(page === 3){
            return (
               
                <div className="profile_inner_group">
                    <label htmlFor="">LANGUAGES</label>
                    <div className="doc_specs">
                        {doctor && doctor.languages.map((l,index) => (
                            <span key={index}>{l}</span>
                        ))}
                    </div>
                </div>
          
            )
        }else if(page === 4){
            return (
                
                <div className="profile_inner_group">
                    <label htmlFor="">RATE OF RESPONSE</label>
                    <div className="doc_specs">
                        <span>{doctor && doctor.rate}</span>
                    </div>
                </div>
            
            )
        }
    }

  return (
    <div className='view_doc_outer'>     
        <div className="view_doc_container">
            <div className="doc_view_top">
                <div className="view_doc_left">
                    <span>{doctor && doctor.name}</span>
                    <span className={doctor && doctor.isOnline ? 'member_status': 'member_off'}></span> 
                </div>
                <div className="view_doc_right">
                    <button onClick={() => navigate(-1)} className='btn_close'><BsXLg/></button>
                </div>
            </div>
            <div className="doc_view_body">
                <div className="profile_photo">
                    <div className="profile_photo_img">
                      <img src={doctor && doctor.photo} alt=""/>  
                      {/* <button className='btn_cons' onClick={() => navigate(`/private/${doctor && doctor.id}`)}>Enter Consultation Room</button> */}
                    </div> 
                    <h1>{doctor && doctor.name}</h1> 
                    <div className="doctor_feedback">
                        <div className="doctor_patients">
                            <small>Total Patients attended</small>
                            <h2>{doctorRooms && doctorRooms.length}</h2>
                        </div>
                        <div className="doctor_star">
                            <small>Patients Feedback</small>
                            <div> 4 stairs</div>
                           
                        </div>
                    </div>  
                    <div className="doctor_feedback">
                        {!isMember && !doctor &&
                        <div className="doctor_patients">
                            <button className='btn_text' onClick={handleText}>{loading? <ImSpinner5/>:<BsChatText/>}</button>
                        </div>}
                        {isMember &&
                        <div className="doctor_star">
                            <button className='btn_appoint'><BsCalendarPlus/>Appointment</button>
                           
                        </div>}
                    </div>          
                </div>
                
            </div>  
            <div className="profile_menu_wrapper">
                <div className="profile_menu">
                    <span className={page === 1 ? 'active_pro': 'pro_menu_item'} onClick={() => setPage(1)}>PROFILE</span>
                    <span className={page === 2 ? 'active_pro': 'pro_menu_item'} onClick={() => setPage(2)}>SPECIALIZES</span>
                    <span className={page === 3 ? 'active_pro': 'pro_menu_item'} onClick={() => setPage(3)}>LANGUAGES</span>
                    <span className={page === 4 ? 'active_pro': 'pro_menu_item'} onClick={() => setPage(4)}>FEEDBACKS</span>
                </div>                 
                <div className="profile_inner">
                    {RenderPage()}    
                </div> 
            </div>        
                      
        </div> 

     
    </div>
  )
}

export default SingleDoctor
