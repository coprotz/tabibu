import React, { useState } from 'react'
import { BsArrowLeft } from "react-icons/bs";
import { diseases } from '../../../data';

const Plan = ({props}) => {

  const {setPage, setType, watch, register} = props


  


  const handleSubmit = (e) => {
    e.preventDefault()

    const data = {

    }
  }


  return (
    <div className='patient_wrapper'>
      <div className="register_top">
        <button onClick={() => setPage(10)}  className='btn_clear'><BsArrowLeft/></button>
        <h2 className="register_title">Please select your Pricing Plan</h2>
      </div>      
      <div className="planing_group">
        {/* <h4 className='field_label'>Comments</h4>     */}
        <input 
          type="radio" 
          name='plan'
          value='day'  
          {...register("plan", { required: true })} 
          id='day'
          />
        <label htmlFor="day" className='pricing_plan'>
          <h1>Day</h1>
          <h2>TZS 1,500</h2>
        </label>
      
      </div>   
      <div className="planing_group">
        {/* <h4 className='field_label'>Comments</h4>     */}
        <input 
          type="radio" 
          name='plan'
          value='week'  
          {...register("plan", { required: true })} 
          id='week'
          />
        <label htmlFor="week" className='pricing_plan'>
          <h1>Week</h1>
          <h2>TZS 5,000</h2>
        </label>
      
      </div> 
      <div className="planing_group">
        {/* <h4 className='field_label'>Comments</h4>     */}
        <input 
          type="radio"
          name='plan'
          value='month'  
          {...register("plan", { required: true })} 
          id='month'        />
        <label htmlFor="month" className='pricing_plan'>
          <h1>Month</h1>
          <h2>TZS 15,000</h2>
        </label>
      
      </div>  
       <div className='handle_register'>
          <button onClick={handleSubmit} className='btn_register'>SUBMIT</button>
      </div>
   
    </div>
  )
}


export default Plan
