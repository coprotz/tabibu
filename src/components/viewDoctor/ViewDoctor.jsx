import React, { useContext } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import './viewdoc.css'
import doc1 from '../images/doc2.jpg'
import { ProfileContext } from '../hook/context/ProfileContext'


const ViewDoctor = () => {
    const navigate = useNavigate()
    const { viewDoctor, setViewDoctor } = useContext(ProfileContext)

  return (
    <div className='view_doc_outer'>
        <div className="view_doc_container">
            <div className="doc_view_top">
                <div className="view_doc_left">
                    <span>{viewDoctor.name}</span>
                </div>
                <div className="view_doc_right">
                    <button onClick={() => setViewDoctor(null)}>Close</button>
                </div>
            </div>
            <div className="doc_view_body">
                <div className="profile_photo">
                    <div className="profile_photo_img">
                      <img src={doc1} alt="" className='img' style={{borderRadius: '0'}}/>  
                      <button className='btn_cons' onClick={() => navigate(`/private/${viewDoctor.id}`)}>Enter Consultation Room</button>
                    </div>
                    {/* <h2>Dr. Humphrey</h2> */}
                </div>
                <div className="profile_inner">
                    <div className="profile_inner_group">
                        <label htmlFor="">PROFILE</label>
                        <h2>{viewDoctor.name} ({viewDoctor.age})</h2>
                        <small>{viewDoctor.edu}</small>
                        <h4>{viewDoctor.hospital}</h4>
                        <h3>{viewDoctor.region}</h3>
                    </div>
                </div>
                <div className="profile_inner">
                    <div className="profile_inner_group">
                        <label htmlFor="">SPECIALIZED</label>
                        <div className="doc_specs">
                            {viewDoctor && viewDoctor.specializes.map((s,index) => (
                                <span key={index}>{s} </span>
                            ))}
                        </div>
                    </div>
                </div>
                <div className="profile_inner">
                    <div className="profile_inner_group">
                        <label htmlFor="">LANGUAGES</label>
                        <div className="doc_specs">
                            {viewDoctor && viewDoctor.languages.map((l,index) => (
                                <span key={index}>{l}</span>
                            ))}
                        </div>
                    </div>
                </div>
                <div className="profile_inner">
                    <div className="profile_inner_group">
                        <label htmlFor="">RATE OF RESPONSE</label>
                        <div className="doc_specs">
                            <span>{viewDoctor.rate}</span>
                        </div>
                    </div>
                </div>
                <div className="profile_inner">
                  
                </div>
            </div>
            
        </div>

     
    </div>
  )
}

export default ViewDoctor
