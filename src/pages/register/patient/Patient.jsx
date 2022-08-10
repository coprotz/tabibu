import React, { useState } from 'react'
import Alcohol from './Alcohol'
import Allergies from './Allergies'
import Caffeine from './Caffeine'
import Comment from './Comment'
import Diet from './Diet'
import Exercises from './Exercises'
import General from './General'
import History from './History'
import Medications from './Medications'
import Operations from './Operations'
import { BsArrowLeft } from "react-icons/bs";
import { useForm } from "react-hook-form";

import Smoke from './Smoke'
import Plan from './Plan'
import Payment from './Payment'

const Patient = () => {

  const { register,  watch, formState: { isValid, isSubmitting, isSubmitSuccessful } } = useForm({mode: 'all'});


  const [page, setPage] = useState(1)

  const [form, setForm] = useState({

    allergies: [],
    operations: [],
    medications: [],
  
  })


  const props = { register, watch, isValid, page, setPage, form, setForm }
  

    const RenderPage = () => {
      if(page === 1){
        return (
          <General props={props} />
        )
      }else if(page === 2){
        return (
          <Allergies props={props}/>
        )
      }else if(page === 3){
        return (
          <History props={props}/>
        )
      }else if(page === 4){
        return (
          <Operations props={props}/>
        )
      }else if(page === 5){
        return (
          <Medications props={props}/>
        )
      }else if(page === 6){
        return (
          <Exercises props={props}/>
        )
      }else if(page === 7){
        return (
          <Diet props={props}/>
        )
      }else if(page === 8){
        return (
          <Alcohol props={props}/>
        )
      }else if(page === 9){
        return (
          <Caffeine props={props}/>
        )
      }else if(page === 10){
        return (
          <Smoke props={props}/>
        )
      }else if(page === 11){
        return (
          <Comment props={props}/>
        )
      }
    
    }


  return (
    <div className='register_wrapper'>   
        {RenderPage()}      
    </div>
  )
}

export default Patient
