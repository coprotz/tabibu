import React from 'react'
// import doc1 from '../images/doc2.jpg'
import { useNavigate } from 'react-router-dom'
import './doctorcard.css'

const DoctorCard = ({doctor}) => {
    const navigate = useNavigate()
  return (
    <div className="private-card" key={doctor.id} onClick={() => navigate(`/profile/${doctor.userId}`)}>
        <div className="card-top"  >
            <div className="pr-card-photo">
                <img className='img' src={doctor.photo} alt="" />
            </div>        
            <small>{doctor.name}</small>
        </div>
        <span className={doctor && doctor.isOnline ? 'member_status': 'member_off'}></span>    
    </div>  
  )
}

export default DoctorCard
