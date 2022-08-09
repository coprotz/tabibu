import React from 'react'
import doc1 from '../images/doc2.jpg'
import { useNavigate } from 'react-router-dom'
import './doctorcard.css'

const DoctorCard = ({doctor}) => {
    const navigate = useNavigate()
  return (
    <div className="doctor_card">
        <div className="doc_details" key={doctor.id} onClick={() => navigate(`/profile/${doctor.userId}`)}>
            <div className="doc_photo">
                <img className='img' src={doctor.photo} alt="" />
            </div>
            <div className="doc_name">
            <span>{doctor.name}</span>
            </div>
        </div>
        <span className={doctor && doctor.isOnline ? 'member_status': 'member_off'}></span> 
        {/* <div className="doc_status">
            <small>{doctor.isOnline}</small>
        </div> */}
        {/* <label htmlFor={doc.id} className={doctor === doc.id ? 'doctor_selected ': 'doctor_label'}>
            <input 
            type="radio" 
            name='doctor'
            id={doc.id} 
            style={{display: 'none'}}
            value={doc.id}
            className='invite_input' 
            onChange={(e) => setDoctor(e.target.value)}                                        
        />
        </label> */}
    
    </div>  
  )
}

export default DoctorCard
