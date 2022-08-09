import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { BsXLg } from "react-icons/bs";
import doc1 from '../../components/images/doc2.jpg'
import './singlepatient.css'
import { BsChatLeftDots } from "react-icons/bs";

const SinglePatient = ({patient}) => {
    const navigate = useNavigate();

    const [show, setShow] = useState(null)

  return (
    <div className='view_doc_container'>
        <div className="doc_view_top">
            <div className="view_doc_left">
                <span>{patient && patient.name}</span>
                <span className={patient && patient.isOnline ? 'member_status': 'member_off'}></span> 
            </div>
            <div className="view_doc_right">
                <button onClick={() => navigate(-1)} className='btn_close'><BsXLg/></button>
            </div>
        </div>
        <div className="doc_view_body">
            <div className="profile_photo">
                <div className="profile_photo_img">
                    <img src={patient && patient.photo} alt="" className='img' style={{borderRadius: '0'}}/>  
                    <button className='btn_chat' onClick={() => navigate(`/privates/${patient && patient.id}`)}><BsChatLeftDots/></button>
                </div>              
            </div>
        </div>  
        <div className="profile_body_inner">
            <span className='profile_info_item'>
                <small>Name</small>
                <h4>{patient && patient.name}</h4>
            </span>
            <span className='profile_info_item'>
                <small>Sex</small>
                <h4>{patient && patient.sex}</h4>
            </span>
            <span className='profile_info_item'>
                <small>Age</small>
                <h4>{patient && patient.age}</h4>
            </span>
            <span className='profile_info_item'>
                <small>Height</small>
                <h4>{patient && patient.height}</h4>
            </span>
            <span className='profile_info_item'>
                <small>Weight</small>
                <h4>{patient && patient.weight}</h4>
            </span>
            <span className='profile_info_item'>
                <small>Region</small>
                <h4>{patient && patient.region}</h4>
            </span>
            <span className='profile_info_item'>
                <small>District</small>
                <h4>{patient && patient.district}</h4>
            </span>
            
        </div>  
        <button className='profile_about' onClick={() => setShow(!show)}>{show ? 'My Profile' : 'More About Me'}</button>   
    </div>
  )
}

export default SinglePatient
