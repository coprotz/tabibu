import React from 'react'
import useData from '../../../components/hook/useData'
import './appoints.css'

const AppointCard = ({item}) => {
    const { doctors } = useData();
    const doctor = doctors && doctors.find(d => d.userId === item.doctorId)
    console.log('doctor', doctor);
    console.log('item', item.doctorId);
  return (
    <div className='appoint_card'>
        <p>Your appointment with <strong>{doctor && doctor.name}</strong> on 
            <strong> {item && item.date} </strong> 
             at <strong>{item && item.time} </strong> 
             has <strong style={{color: '#0433b4'}}>{item && item.status} </strong></p>
    </div>
  )
}

export default AppointCard
