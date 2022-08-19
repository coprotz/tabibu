import React from 'react'
import useData from '../../../components/hook/useData';
import { useAuth } from '../../../config'
import AppointCard from './AppointCard';

const Appointments = () => {
  const {user} = useAuth();
  const {appointments} = useData()
  const userAppoints = appointments && appointments.filter(a => a.patientId === user.uid)
  console.log('appoint', appointments);
  return (
    <div className='profile_wrapper'>
      <h1 className='a_page_title'>Appointments</h1>
      <div className="appoints_inner">
        <h4 className='attended_doc'>you have {userAppoints && userAppoints.length} appointment</h4>        
        <div className="appoint_info">
          {userAppoints && userAppoints.map(item => (
            <AppointCard item={item} key={item.id}/>
          ))}
        </div>
      </div>
      
    </div>
  )
}

export default Appointments
