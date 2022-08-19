import React, { useState } from 'react'
import { BsArrowLeft } from "react-icons/bs";
import { useForm } from "react-hook-form";
import { applicants } from '../../../data';

const Verify = ({props}) => {
  const {setPage, setType, watch, register, setVerified, verified} = props  

  const account = watch('account')
  const [err, setErr] = useState('')

//   const isVerify = applicants.find((a) => a.id === account)



  const handleVerify = (e) => {
    e.preventDefault()

    const isVerify = applicants.find((a) => a.id === account)
    if(isVerify){
        setPage(2)
        setVerified(isVerify)
    }else {
        setErr('Account is not found')
    }

  }

  return (
    <div className='patient_wrapper'>
      <div className="register_top">
        <button onClick={() => setType(1)}  className='btn_clear'><BsArrowLeft/></button>
        <h2 className="register_title">Verify your License with MAT</h2>
      </div>   
      {err && <span className='error'>{err}</span>} 
      {/* <div className="fields_group"> */}
        <h4 className='field_label'>Please enter your license #</h4>
        {/* <div className="register_selection">                        */}
          <input 
            type="text"  
            className='reg_input'
            name='account'
            // value={form.dob}
            {...register("account", { required: true })}
            // onChange ={(e) => setForm({...form, dob: e.target.value})}
            // onChange={e => setDob(e.target.value)}
            />
        {/* </div> */}
      {/* </div> */}
      <div className='handle_register'>
          <button onClick={handleVerify} className='btn_register'>Verify</button>
      </div>
   
    </div>
  )
}


export default Verify
