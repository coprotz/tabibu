import React, { useState } from 'react'
import { BsArrowLeft } from "react-icons/bs";


const Alcohol = ({props}) => { 

  const {setPage, setType, watch, register} = props

  const alcohol = [
    'I do not drink', '1-2 glasses/day', '3-4 glasses/day','5+ glasses/day'
  ]


  return (
    <div className='patient_wrapper'>
      <div className="register_top">
        <button onClick={() => setPage(7)}  className='btn_clear'><BsArrowLeft/></button>
        <h2 className="register_title">Alcohol Consumption?</h2>
      </div>      
      <div className="fields_group">
        <h4 className='field_label'>Alcohol Consumption</h4>    
        <div className="allergies_group">          
            {alcohol.map((item, index) => (
            <div key={index} {...register("alcohol", { required: true })} className='diseases'>
              <input 
                type="radio" 
                name='alcohol' 
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
          <button onClick={() => setPage(9)} className='btn_register'>Continue</button>
      </div>
   
    </div>
  )
}




export default Alcohol
