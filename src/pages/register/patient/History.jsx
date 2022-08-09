import React, { useState } from 'react'
import { BsArrowLeft } from "react-icons/bs";
import { diseases } from '../../../data';

const History = ({props}) => {
  // const [sex, setSex] = useState('')
  // const [dob, setDob] = useState('')
  // const [height, setHeight] = useState('')
  // const [weight, setWeight] = useState('')

  const {setPage, setType, watch, register} = props



  return (
    <div className='patient_wrapper'>
      <div className="register_top">
        <button onClick={() => setPage(2)}  className='btn_clear'><BsArrowLeft/></button>
        <h2 className="register_title">Have you ever had ?</h2>
      </div>      
      <div className="fields_group">
        <h4 className='field_label'>Please check all that apply</h4>    
        <div className="allergies_group">          
            {diseases.map((item, index) => (
            <div key={index} {...register("diseases", { required: true })} className='diseases'>
              <input 
                type="checkbox" 
                name='diseases' 
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
          <button onClick={() => setPage(4)} className='btn_register'>Continue</button>
      </div>
   
    </div>
  )
}


export default History
