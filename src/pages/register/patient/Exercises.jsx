import React, { useState } from 'react'
import { BsArrowLeft } from "react-icons/bs";
import { diseases } from '../../../data';

const Exercises = ({props}) => {
  // const [sex, setSex] = useState('')
  // const [dob, setDob] = useState('')
  // const [height, setHeight] = useState('')
  // const [weight, setWeight] = useState('')

  const {setPage, setType, watch, register} = props

  const exercises = [
    'never', '1 - 2 days', '3 - 4 days', '5+ days'
  ]


  return (
    <div className='patient_wrapper'>
      <div className="register_top">
        <button onClick={() => setPage(5)}  className='btn_clear'><BsArrowLeft/></button>
        <h2 className="register_title">How do you do exercises in a week?</h2>
      </div>      
      <div className="fields_group">
        <h4 className='field_label'>Exercise</h4>    
        <div className="allergies_group">          
            {exercises.map((item, index) => (
            <div key={index} {...register("exercises", { required: true })} className='diseases'>
              <input 
                type="radio" 
                name='exercises' 
                value={item} 
                id={index} 
                // style={{display:'none'}}
                />
                <label htmlFor={index} style={{color: 'black'}}>{item} </label>          
            </div> 
            ))}   
         
        </div>
      </div>    
    
    
   
      <div className='handle_register'>
          <button onClick={() => setPage(7)} className='btn_register'>Continue</button>
      </div>
   
    </div>
  )
}



export default Exercises
