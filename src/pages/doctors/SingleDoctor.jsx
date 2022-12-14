import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import doc1 from '../../components/images/doc2.jpg'
import { BsXLg } from "react-icons/bs";
import useData from '../../components/hook/useData';
import { BsChatText, BsCalendarPlus } from "react-icons/bs";
import { db, useAuth } from '../../config';
import { addDoc, collection } from 'firebase/firestore';
import { ImSpinner5 } from "react-icons/im";
import Reviews from './Reviews';
import Appointment from './Appointment';
import { BsStar,BsStarFill } from "react-icons/bs";
import Review from './Review';
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
    const [msgAlert, setMsgAlert] = useState('')

    const reviews = [ 1,2,3,4,5]

    const rate = 3.1;

    const RenderReview = (value) => {
        if(value > rate){
            return (
                <BsStar className='review_svg'/>
            )
        }else {
            return (
                <BsStarFill className='review_svg'/>
            )
        }
    }

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
    const [appointment, setAppointment] = useState(null)
    const [review, setReview] = useState(null)

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
                    {/* <label htmlFor="">SPECIALIZED</label> */}
                    <div className="doc_specs">
                        {doctor && doctor.specializes.map((s,index) => (
                            <h3 key={index} className="profile_detail_item">{s} </h3>
                        ))}
                    </div>
                </div>
         
            )
        }else if(page === 3){
            return (
               
                <div className="profile_inner_group">
                    {/* <label htmlFor="">LANGUAGES</label> */}
                    <div className="doc_specs">
                        {doctor && doctor.lang.map((l,index) => (
                            <h3 key={index} className="profile_detail_item">{l}</h3>
                        ))}
                    </div>
                </div>
          
            )
        }else if(page === 4){
            return (                
               <Reviews RenderReview={RenderReview} reviews={reviews} rate={rate} setReview={setReview}/>            
            )
        }
    }

  return (
    <div className='view_doc_outer'> 
        {appointment &&
            <Appointment doctor={doctor} setAppointment={setAppointment} msgAlert={msgAlert} setMsgAlert={setMsgAlert}/>  
        }  
         {review &&
            <Review doctor={doctor} setReview={setReview} msgAlert={msgAlert} setMsgAlert={setMsgAlert}/>  
        } 
        {msgAlert && <div className='msgAlert'>{msgAlert}</div>}
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
                            <small>Total Patients attends</small>
                            <h2>{doctorRooms && doctorRooms.length}</h2>
                        </div>
                        <div className="doctor_star">
                            <small>Patients Reviews</small>
                            <div className='patients_reviews'>
                                {reviews.map((value, index) => (
                                    <span key={index}>
                                    {RenderReview(value)}
                                    </span>
                                
                                ))}
                            </div>
                           
                        </div>
                    </div>  
                    <div className="doctor_feedback">
                        {!isMember && !doctor &&
                        <div className="doctor_patients">
                            <button className='btn_text' onClick={handleText}>{loading? <ImSpinner5/>:<BsChatText/>}</button>
                        </div>}
                        {isMember &&
                        <div className="doctor_star">
                            <button className='btn_appoint' onClick={() => setAppointment(true)}><BsCalendarPlus/>Appointment</button>
                           
                        </div>}
                    </div>          
                </div>
                
            </div>  
            <div className="profile_menu_wrapper">
                <div className="profile_menu">
                    <span className={page === 1 ? 'active_pro': 'pro_menu_item'} onClick={() => setPage(1)}>PROFILE</span>
                    <span className={page === 2 ? 'active_pro': 'pro_menu_item'} onClick={() => setPage(2)}>SPECIALIZES</span>
                    <span className={page === 3 ? 'active_pro': 'pro_menu_item'} onClick={() => setPage(3)}>LANGUAGES</span>
                    <span className={page === 4 ? 'active_pro': 'pro_menu_item'} onClick={() => setPage(4)}>REVIEWS</span>
                </div>                 
                <div className="profile_inner">
                    <div className='reviews_wrapper'>
                        {RenderPage()}  
                    </div>
                      
                </div> 
            </div>        
                      
        </div> 

     
    </div>
  )
}

export default SingleDoctor
