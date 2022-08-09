import { addDoc, collection, serverTimestamp } from 'firebase/firestore';
import React, { useState } from 'react'
import { BsArrowLeft } from "react-icons/bs";
import { db, useAuth } from '../../../config';
import { useNavigate } from 'react-router-dom'


const Comment = ({props}) => {

  const navigate = useNavigate()

  const {setPage, setType, watch, register, form} = props

  const { user} = useAuth()

  const sex = watch('sex')
  const dob = watch('dob')
  const height = watch('height')
  const weight = watch('weight')
  const comment = watch('comments')
  const diseases = watch('diseases')
  const smoke = watch('smoke')
  const caffeine = watch('caffeine')
  const alcohol = watch('alcohol')
  const diet = watch('diet')
  const exercises = watch('exercises')

  const [loading, setLoading] = useState(null)
  const [error, setError] = useState('')

  const patientsRef = collection(db, 'patients')

  const handleSubmit = async (e) => {
    e.preventDefault()

    setLoading(true)

    const data = {
      name: user.displayName,
      photo: user.photoURL,
      email: user.email,
      userId: user.uid,
      sex: sex,
      dob: dob,
      height: height,
      weight: weight,
      allergies: form.allergies,
      diseases: diseases,
      operations: form.operations,
      medications: form.medications,
      exercises: exercises,
      diet: diet,
      alcohol: alcohol,
      caffeine: caffeine,
      smoke: smoke,
      comment: comment,
      isOnline: true
    }

    try {
      await addDoc(patientsRef, {
        ...data,
        createdAt: serverTimestamp()
      })
      setLoading(false)
      navigate('/')

    } catch (error) {
      console.log(error.message)
      setError(error.message)
    }

    console.log('data', data)
  }



  return (
    <div className='patient_wrapper'>
      {error && <span>{error}</span>}
      <div className="register_top">
        <button onClick={() => setPage(10)}  className='btn_clear'><BsArrowLeft/></button>
        <h2 className="register_title">Include other comments regarding your Medical History</h2>
      </div>      
      <div className="fields_group">
        <h4 className='field_label'>Comments</h4>    
        <div className="allergies_group">  
          <textarea 
            name="comments" 
            cols="30" rows="10"
            style={{padding: '8px'}}
            {...register("comments", { required: true })} 
            >
          </textarea>        
        </div>
      </div>    
       <div className='handle_register'>
       <button onClick={handleSubmit} className='btn_register'>{loading ? 'Sending...' : 'SUBMIT'}</button>
      </div>
   
    </div>
  )
}


export default Comment
