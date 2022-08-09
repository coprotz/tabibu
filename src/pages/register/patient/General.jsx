import React, { useState } from 'react'
import { BsArrowLeft } from "react-icons/bs";
import { useForm } from "react-hook-form";

const General = ({props}) => {

  // const { register,  watch, formState: { isValid, isSubmitting, isSubmitSuccessful } } = useForm({mode: 'all'});

  // const [sex, setSex] = useState('')
  // const [dob, setDob] = useState('')
  // const [height, setHeight] = useState('')
  // const [weight, setWeight] = useState('')

  const {setPage, setType, watch, register} = props
  

  const dob = watch('dob')
  const height = watch('height')
  const weight = watch('weight')
  const sex = watch('sex')

  // const [form, setForm] = useState({
  //   sex: '',
  //   dob: '',
  //   height: '',
  //   weight: '',
  // })

  console.log('dob', dob)
  console.log('sex', sex)
  console.log('height', height)
  console.log('weight', weight)

  return (
    <div className='patient_wrapper'>
      <div className="register_top">
        <button onClick={() => setType(1)}  className='btn_clear'><BsArrowLeft/></button>
        <h2 className="register_title">General Patient Information</h2>
      </div>      
      <div className="fields_group">
        <h4 className='field_label'>Patient Gender</h4>
        <div className="register_selection">                       
            <input 
              type="radio" 
              name='sex' 
              value='M'
              id='Male' 
              style={{display: 'none'}} 
              {...register("sex", { required: true })}
              // onChange={e => setSex(e.target.value)}
              // onChange ={(e) => setForm({...form, sex: e.target.value})}
            />
            <label htmlFor="Male" className='register_label'>Male</label>                        
            <input 
                type="radio" 
                name='sex' 
                value='F'  
                id='Female' 
                style={{display: 'none'}}
                {...register("sex", { required: true })}
                // onChange ={(e) => setForm({...form, sex: e.target.value})}
                // onChange={e => setSex(e.target.value)}
            />
            <label htmlFor="Female" className='register_label'>Female</label>
            <input 
                type="radio" 
                name='sex' 
                value='Other'
                id='Other' 
                style={{display: 'none'}}
                // onChange={e => setSex(e.target.value)}
                // onChange ={(e) => setForm({...form, sex: e.target.value})}
                {...register("sex", { required: true })}
            />
            <label htmlFor="Other" className='register_label'>Other</label>
        </div>
      </div>    
      <div className="fields_group">
        <h4 className='field_label'>Patient BirthDate</h4>
        <div className="register_selection">                       
          <input 
            type="date"  
            className='field_input'
            name='dob'
            // value={form.dob}
            {...register("dob", { required: true })}
            // onChange ={(e) => setForm({...form, dob: e.target.value})}
            // onChange={e => setDob(e.target.value)}
            />
        </div>
      </div>
      <div className="fields_group">
        <h4 className='field_label'>Patient Height(cm's)</h4>
        <div className="register_selection">                       
          <input 
            type="text"  
            className='field_input' 
            placeholder='exp.175'
            name='height'
            // value={form.height}
            {...register("height", { required: true })}
            // onChange ={(e) => setForm({...form, height: e.target.value})}
            // onChange={e => setHeight(e.target.value)}
            />
        </div>
      </div>
      <div className="fields_group">
        <h4 className='field_label'>Patient Weight(kg's)</h4>
        <div className="register_selection">                       
          <input 
            type="text"  
            className='field_input' 
            placeholder='exp.55'
            name='weight'
            // value={form.weight}
            {...register("weight", { required: true })}
            // onChange ={(e) => setForm({...form, weight: e.target.value})}
            // onChange={e => setWeight(e.target.value)}
            />
        </div>
      </div>
      <div className='handle_register'>
          <button onClick={() => setPage(2)} className='btn_register'>Continue</button>
      </div>
   
    </div>
  )
}

export default General
