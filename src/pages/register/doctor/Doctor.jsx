import React, { useState } from 'react'

import { BsArrowLeft } from "react-icons/bs";
import { useForm } from "react-hook-form";
import Verify from './Verify'
import './doctor.css'
import General from './General';
import Region from './Education';
import Education from './Education';
import Specializes from './Specializes'
import Languages from './Languages'
import About from './About';

const Doctor = ({setType}) => {

  const { register,  watch, formState: { isValid, isSubmitting, isSubmitSuccessful } } = useForm({mode: 'all'});


  const [page, setPage] = useState(1)
  const [verified, setVerified] = useState({})

  const [form, setForm] = useState({

    allergies: [],
    operations: [],
    medications: [],
  
  })


  const props = { register, watch, isValid, page, setPage, form, setForm,verified, setVerified, setType }
  

    const RenderPage = () => {
      if(page === 1){
        return (
          <Verify props={props} />
        )
      }else if(page === 2){
        return (
          <General props={props} />
        )        
      }else if(page === 3){
        return (
          <About props={props} />
        )
      }else if(page === 4){
        return (
          <Education props={props}/>
        )
      }else if(page === 5){
        return (
          <Specializes props={props}/>
        )
      }else if(page === 6){
        return (
          <Languages props={props} />
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
