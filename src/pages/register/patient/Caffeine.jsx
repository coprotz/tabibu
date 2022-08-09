import React, { useState } from 'react'
import { BsArrowLeft } from "react-icons/bs";


const Caffeine = ({props}) => { 

  const {setPage, setType, watch, register} = props

  const caffeine = [
    'I do not use caffein', '1-2 glasses/day', '3-4 glasses/day','5+ glasses/day'
  ]


  return (
    <div className='patient_wrapper'>
      <div className="register_top">
        <button onClick={() => setPage(8)}  className='btn_clear'><BsArrowLeft/></button>
        <h2 className="register_title">Caffeine Consumption?</h2>
      </div>      
      <div className="fields_group">
        <h4 className='field_label'>Caffeine Consumption</h4>    
        <div className="allergies_group">          
            {caffeine.map((item, index) => (
            <div key={index} {...register("caffeine", { required: true })} 
            className='diseases'>
              <input 
                type="radio" 
                name='caffeine' 
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
          <button onClick={() => setPage(10)} className='btn_register'>Continue</button>
      </div>
   
    </div>
  )
}


export default Caffeine
