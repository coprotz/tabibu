import React from 'react'
import { BsArrowLeft } from "react-icons/bs";

const About = ({props}) => {
    const {verified, setPage, page, register} = props
  return (   
    <div className='patient_wrapper'>        
        <div className="register_top">
            <button onClick={() => setPage(2)}  className='btn_clear'><BsArrowLeft/></button>
            <h2 className="register_title">About me</h2>
        </div>                      
        <textarea                 
            cols='30'
            rows='10'                    
            className='reg_input'
            placeholder='Tell something about you'
            name='about'           
            {...register("about", { required: true })}           
        ></textarea> 
        <input 
            type="number"  
            className='reg_input'
            placeholder='Age'
            name='age'           
            {...register("age", { required: true })}
        />
        <div className='handle_register'>
            <button onClick={() => setPage(4)} className='btn_register'>Continue</button>
        </div>
    
  </div>
  )
}



export default About
