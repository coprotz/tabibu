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
        {/* <div className="fields_group"> */}
            {/* <h4 className='field_label'>Hopsital Name</h4> */}
            {/* <div className="register_selection">                        */}
                <input 
                    type="text"  
                    className='reg_input'
                    name='hospital'
                    placeholder='Hospital Name'          
                    {...register("hospital", { required: true })}
           
                />
            {/* </div> */}
        {/* </div> */}
                            
                <input 
                    type="text"  
                    className='reg_input'
                    placeholder='Department Name'
                    name='department'           
                    {...register("department", { required: true })}
           
                />
        
                           
                <input 
                    type="text"  
                    className='reg_input'
                    placeholder='Clinic Name'
                    name='clinic'           
                    {...register("clinic", { required: true })}
           
                />
                <select 
                    name="region" id=""
                    {...register("region", { required: true })}
                    className='reg_input'>
                    <option value="Songea">Select Working Region</option>
                    <option value="Iringa">Iringa</option>
                    <option value="Tanga">Tanga</option>
                    <option value="Songea">Songea</option>
                </select>
                <select 
                    name="district" id=""
                    {...register("district", { required: true })}
                    className='reg_input'>
                    <option value="Songea">Select Working District</option>
                    <option value="Songea">Ubungo</option>
                    <option value="Kibaha">Kibaha</option>
                    <option value="Muheza">Muheza</option>
                </select>
        
        <div className='handle_register'>
            <button onClick={() => setPage(3)} className='btn_register'>Continue</button>
        </div>
    
  </div>
  )
}

export default General
