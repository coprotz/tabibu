import React, { useState } from 'react'
import { BsArrowLeft } from "react-icons/bs";


const Smoke = ({props}) => { 

  const {setPage, setType, watch, register} = props

  const smoke = [
    'No', '0-1 pack/day', '1-2 packs/day','2+ packs/day'
  ]


  return (
    <div className='patient_wrapper'>
      <div className="register_top">
        <button onClick={() => setPage(9)}  className='btn_clear'><BsArrowLeft/></button>
        <h2 className="register_title">Do you smoke?</h2>
      </div>      
      <div className="fields_group">
        <h4 className='field_label'>Smoke Consumption</h4>    
        <div className="allergies_group">          
            {smoke.map((item, index) => (
            <div key={index} {...register("smoke", { required: true })} className='diseases'>
              <input 
                type="radio" 
                name='smoke' 
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
          <button onClick={() => setPage(11)} className='btn_register'>Continue</button>
      </div>
   
    </div>
  )
}


export default Smoke
