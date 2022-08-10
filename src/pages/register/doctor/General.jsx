import React from 'react'
import { BsArrowLeft } from "react-icons/bs";

const General = ({props}) => {
    const {verified, setPage, page, register} = props
  return (   
    <div className='patient_wrapper'>        
        <div className="register_top">
            <button onClick={() => setPage(1)}  className='btn_clear'><BsArrowLeft/></button>
            <h2 className="register_title">Hospital Information</h2>
        </div> 
        <div className="fields_group">
            <h4 className='field_label'>Hopsital Name</h4>
            <div className="register_selection">                       
                <input 
                    type="text"  
                    className='field_input'
                    name='hospital'           
                    {...register("hospital", { required: true })}
           
                />
            </div>
        </div>
        <div className="fields_group">
            <h4 className='field_label'>Department Name</h4>
            <div className="register_selection">                       
                <input 
                    type="text"  
                    className='field_input'
                    name='department'           
                    {...register("department", { required: true })}
           
                />
            </div>
        </div>
        <div className="fields_group">
            <h4 className='field_label'>Clinic Name</h4>
            <div className="register_selection">                       
                <input 
                    type="text"  
                    className='field_input'
                    name='clinic'           
                    {...register("clinic", { required: true })}
           
                />
            </div>
        </div>
        <div className='handle_register'>
            <button onClick={() => setPage(3)} className='btn_register'>Continue</button>
        </div>
    
  </div>
  )
}

export default General
