import userEvent from '@testing-library/user-event'
import React, { useState } from 'react'
import useFetch from '../../components/hook/useFetch'
import Nav from '../../components/nav/Nav'
import { useAuth } from '../../config'
import './account.css'
import Home from './Home'
import Appointments from './Appointments'
import Labs from './Labs'
import useData from '../../components/hook/useData'
import Patient from '../patients/Patient'


const Account = () => {

  const { user } = useAuth();
  // const { data: doctors, isPending } = useFetch('http://localhost:8000/doctors')

  const { doctors, patients } = useData();

  const doctor = doctors && doctors.find(d => d.userId === user.uid)
  const patient = patients && patients.find(p => p.userId === user.uid)

  console.log('doctor', doctor)
  console.log('patient', patient)



  const [page, setPage] = useState(1)

  const RenderPage = () => {
    if(page === 1){
      return (
        <Home/>
      )
    }else if(page === 2){
      return (
        <Appointments />
      )
    }else if(page === 3){
      return (
        <Labs />
      )
    }
  }
  return (
    
        
        <div className="account_wrapper">
          <Nav />
          
            <div className="account_top">
              <h3>Welcome <span>{doctor? doctor && doctor.name : patient && patient.name}</span></h3>
              <div className="account_photo">
                <img src={user.photoURL} alt="" />
              </div>
            </div>
            {doctor !== undefined ? <>
            <div className="account_menu">
              <span>Home</span>
              <span>Appointments</span>
              <span>Laboratory</span>
              <span>Subscriptions</span>
              <span>Messages</span>
              <span>Patients</span>
              <span>Payments</span>
            </div>
            {RenderPage()}
            
            </>
            : 
            <Patient patient={patient}/>
            }
            
        </div>
    
   
  )
}

export default Account
