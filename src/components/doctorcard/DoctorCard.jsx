import React from 'react'
import doc1 from '../images/doc2.jpg'

const DoctorCard = ({doc, setDoctor, setViewDoctor, doctor}) => {
  return (
    <div className="doctor_card">
        <div className="doc_details" key={doc.id} onClick={() => setViewDoctor(doc)}>
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
  )
}

export default DoctorCard
