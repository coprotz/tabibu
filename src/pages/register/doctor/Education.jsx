import React from 'react'
import { BsArrowLeft } from "react-icons/bs";

const Education = ({props}) => {
    const {verified, setPage, page, register} = props
  return (
    <div className='patient_wrapper'>        
        <div className="register_top">
            <button onClick={() => setPage(3)}  className='btn_clear'><BsArrowLeft/></button>
            <h2 className="register_title">Education and Working Experiences</h2>
        </div>

        <input 
            type="text"  
            className='reg_input'
            name='education'
            placeholder='Education: e.g Msc. Medicine'          
            {...register("education", { required: true })}
            
        />
        <input 
            type="number"  
            className='reg_input'
            name='experiences'
            placeholder='Experiences: e.g 7yrs'          
            {...register("experiences", { required: true })}
            
        />
        <div className='handle_register'>
            <button onClick={() => setPage(5)} className='btn_register'>Continue</button>
        </div>
    </div>
  )
}

export default Education
