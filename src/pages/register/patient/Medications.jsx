import React, { useState } from 'react'
import { BsArrowLeft } from "react-icons/bs";

const Medications = ({props}) => {


  const {setPage, setType, watch, register, setForm, form} = props

  const isOnMedication = watch('isOnMedication')
 
  const [medications, setMedications] = useState([
   ''
  ])

  const handleAdd = () => {
    const add = [...medications, []]
    setMedications(add)
  }

  const handleDelete = (index) => {
    const deleteVal = [...medications]
    deleteVal.splice(index, 1)
    setMedications(deleteVal)
  }

  const handleChange = (data, index) => {
    const inputs = [...medications]
    inputs[index] = data.target.value;
    setMedications(inputs)
    setForm({...form, medications: inputs})
  }

  console.log('medications', medications)

  return (
    <div className='patient_wrapper'>
      <div className="register_top">
        <button onClick={() => setPage(4)}  className='btn_clear'><BsArrowLeft/></button>
        <h2 className="register_title">Are you currently on Medications?</h2>
      </div>      
      <div className="fields_group">        
        <div className="register_selection">                       
            <input 
              type="radio" 
              name='isOnMedication' 
              value='no' 
              id='No' 
              style={{display: 'none'}} 
              // onChange={e => setSex(e.target.value)}
              {...register("isOnMedication", { required: true })}
            />
            <label htmlFor="No" className='register_label'>No</label>                        
            <input 
                type="radio" 
                name='isOnMedication' 
                value='yes' 
                id='Yes' 
                style={{display: 'none'}}
                // onChange={e => setSex(e.target.value)}
                {...register("isOnMedication", { required: true })}
            />
            <label htmlFor="Yes" className='register_label'>Yes</label>
          
        </div>
        {isOnMedication === 'yes' &&
        <div className="allergies_group">  
            <h4 className='field_label'>Please list your Current Medications</h4>        
            {medications.map((data, index) => (
            <div className="operation_details" key={index}>
              <input 
                type="text" 
                name='name'
                className='field_input'
                value={data}
                // {...register("allergies", { required: true })}
                onChange={e => handleChange(e, index)}
                />
              <button onClick={() => handleDelete(index)}>Remove</button>
              </div>
            ))}         
              
          <button onClick={() => handleAdd()} className='btn_add'>Add Medication</button>
          
        </div>}
      </div>    
    
    
   
      <div className='handle_register'>
          <button onClick={() => setPage(6)} className='btn_register'>Continue</button>
      </div>
   
    </div>
  )
}


export default Medications
