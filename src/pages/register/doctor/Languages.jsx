import React from 'react'
import { languages } from '../../../data'
import { BsArrowLeft } from "react-icons/bs";
import { db, useAuth } from '../../../config';
import { addDoc, collection } from 'firebase/firestore';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Languages = ({props}) => {

    const { user } = useAuth()   
    const {verified, setPage, page, register, watch} = props

    const hospital = watch('hospital')
    const department = watch('department')
    const clinic = watch('clinic')
    const region = watch('region')
    const district = watch('district')
    const education = watch('education')
    const experiences = watch('experiences')
    const specializes = watch('specializes')
    const lang = watch('languages')
    const age = watch('age')
    const about = watch('about')
    const [loading, setLoading] = useState(null)
    

    const doctorsRef = collection(db, 'doctors')
    const navigate = useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault()

        setLoading(true)

        const data = {
            photo: user.photoURL,
            userId: user.uid,
            isOnline: true,
            hospital,
            department,
            clinic,
            age,
            region,
            district,
            education,
            experiences,
            specializes,
            lang,
            about,
            name: verified.name
        }

        try {
            await addDoc(doctorsRef, data)
            navigate('/')
            setLoading(null)

        } catch (error) {
            console.log(error.message)
        }

        // console.log('data', data)
    }
  return (
    <div className='patient_wrapper'>        
        <div className="register_top">
            <button onClick={() => setPage(5)}  className='btn_clear'><BsArrowLeft/></button>
            <h2 className="register_title">Languages that You speak</h2>
        </div>
        <h4 className='field_label'>Please check all that apply</h4> 
        <div className="specializes_wrapper">
            {languages && languages.map(item => (
            <label 
                htmlFor={item.id} 
                className='spec_item' 
                key={item.id} 
               
                {...register("languages", { required: true })}
                >
                <input type="checkbox" value={item.name} id={item.id}  name='languages'/>
                <span>{item && item.name}</span>
            </label> 
            ))}
            
        </div>
        <div className='handle_register'>
            <button onClick={handleSubmit} className='btn_register'>{loading ? 'Sending...': 'Continue'}</button>
        </div>
    </div>
  )
}

export default Languages
