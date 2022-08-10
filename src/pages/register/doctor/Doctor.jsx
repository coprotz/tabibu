import React, { useState } from 'react'

import { BsArrowLeft } from "react-icons/bs";
import { useForm } from "react-hook-form";
import Verify from './Verify'
import './doctor.css'
import General from './General';

const Doctor = () => {

  const { register,  watch, formState: { isValid, isSubmitting, isSubmitSuccessful } } = useForm({mode: 'all'});


  const [page, setPage] = useState(1)
  const [verified, setVerified] = useState({})

  const [form, setForm] = useState({

    allergies: [],
    operations: [],
    medications: [],
  
  })


  const props = { register, watch, isValid, page, setPage, form, setForm,verified, setVerified }
  

    const RenderPage = () => {
      if(page === 1){
        return (
          <Verify props={props} />
        )
      }else if(page === 2){
        return (
          <General props={props} />
        )
        
      }
    
    }


  return (
    <div className='register_wrapper'> 
    {verified &&
      <div className='welcome_title'>
        Welcome <h1>{verified.name}</h1>
      </div>  }
      {RenderPage()}      
    </div>
  )
}



export default Doctor
