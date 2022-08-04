import React, { useContext, useState } from 'react'
import Search from '../../components/search/Search'
import { doctors } from '../../data'

import { ProfileContext } from '../../components/hook/context/ProfileContext'
import ViewDoctor from '../../components/viewDoctor/ViewDoctor'
import {  HiOutlineArrowLeft } from "react-icons/hi";
import { useNavigate } from 'react-router-dom'
import './doctors.css'
import DoctorCard from '../../components/doctorcard/DoctorCard'



const Doctors = () => {

    const { viewDoctor, setViewDoctor } = useContext(ProfileContext)
    const [doctor, setDoctor] = useState("")
    const navigate = useNavigate()
    const dr = doctors.find((d) => d.id === doctor)
    const [searchTerm, setSearchTerm] = useState("")

  return (
    <div className='doctors_wrapper'>
        {viewDoctor && 
            <ViewDoctor />
        }
        <div className="doctors_top">
            <button onClick={() => navigate('/')} className='btn'><HiOutlineArrowLeft/></button>
            <h3>Select a Doctor to request new Consultation</h3>
        </div>
        <Search setSearchTerm={setSearchTerm}/>
        <div className="doctors_grid">                            
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
                    <button>OK</button>
                    <button onClick={() => setDoctor("")}>Cancel</button>
                </div>
            </button>
            }
                        
                    
        </div>
 
    </div>
  )
}

export default Doctors
