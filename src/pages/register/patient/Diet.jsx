import React, { useState } from 'react'
import { BsArrowLeft } from "react-icons/bs";


const Diet = ({props}) => { 

  const {setPage, setType, watch, register} = props

  const diets = [
    'I have a loose diet', 'I have a strict diet', 'I do not have a diet plan',
  ]


  return (
    <div className='patient_wrapper'>
      <div className="register_top">
        <button onClick={() => setPage(6)}  className='btn_clear'><BsArrowLeft/></button>
        <h2 className="register_title">How is your eating diet?</h2>
      </div>      
      <div className="fields_group">
        <h4 className='field_label'>Eating following a diet</h4>    
        <div className="allergies_group">          
            {diets.map((item, index) => (
            <div key={index} {...register("diet", { required: true })} className='diseases'>
              <input 
                type="radio" 
                name='diet' 
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
          <button onClick={() => setPage(8)} className='btn_register'>Continue</button>
      </div>
   
    </div>
  )
}



export default Diet
