import { addDoc, collection } from 'firebase/firestore';
import React, { useEffect, useState } from 'react'
import { BsXLg } from "react-icons/bs";
import { db, useAuth } from '../../config';

const Appointment = ({setAppointment, doctor, setMessage}) => {
    const { user } = useAuth()
    const { uid, displayName, photoURL } = user
    const [date, setDate] = useState('')
    const [time, setTime] = useState('')
    const [reason, setReason] = useState('')
    const [loading, setLoading] = useState(null)
    const [error, setError] = useState('')
    

    const appointmentsRef = collection(db, 'appointments')

    const handleAppointment = async (e) => {
        e.preventDefault();
        setLoading(true)

        const data = {
            date,
            displayName,
            photoURL,
            time,
            reason,
            doctorId: doctor.userId,
            isRead:[],
            patientId: uid
        }
        try {
           await addDoc(appointmentsRef, data)
            setLoading(null)
            setAppointment(null) 
            setMessage(`${doctor.name} has received your request of an appointment`)           
            setTimeout(() => {
                setMessage('')
            }, 3000)
         
            

            
        } catch (error) {
            setError(error.message)
        }

        // console.log(data)
        


    }

  return (
    <div className="appointment_outer">
        <form className="appointment_inner" onSubmit={handleAppointment}>
            <h3>Make an appointment</h3>
            {error && <span className='error'>{error}</span>}
            
            <button onClick={() => setAppointment(null)} className='btn_close'><BsXLg/></button>
            <div className="group_items">
                <h4>Date and Time</h4>
                <input 
                    type="date" 
                    className='input_item'
                    name={date}
                    onChange={(e) => setDate(e.target.value)}
                    />
                 <input 
                    type="time" 
                    className='input_item'
                    name={time}
                    onChange={(e) => setTime(e.target.value)}
                    />
            </div>
            <div className="group_items">
                <h4>Reason for appointment</h4>
                <textarea                    
                    id="" 
                    cols="30" 
                    rows="10" 
                    placeholder={`Please write reason to see ${doctor.name}`} 
                    className='input_item'
                    name={reason}
                    onChange={(e) => setReason(e.target.value)}
                    ></textarea>                    
            </div>
            <button 
                className='btn_submit'
                type='submit'
            >{loading ? 'Sending...' : 'Submit'}</button>
        </form>
    </div>
  )
}

export default Appointment
