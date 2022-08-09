import React, { useEffect, useState } from 'react'
import { BsArrowLeft } from "react-icons/bs";

const Allergies = ({props}) => {
  // const [sex, setSex] = useState('')
  // const [dob, setDob] = useState('')
  // const [height, setHeight] = useState('')
  // const [weight, setWeight] = useState('')

  const {setPage, setType, watch, register, setForm, form} = props

  const isAllergies = watch('isAllergies')
 
  const [allergies, setAllergies] = useState([
   ''
  ])

  const handleAdd = () => {
    const add = [...allergies, []]
    setAllergies(add)
  }

  const handleDelete = (index) => {
    const deleteVal = [...allergies]
    deleteVal.splice(index, 1)
    setAllergies(deleteVal)
  }

  const handleChange = (data, index) => {
    const inputs = [...allergies]
    inputs[index] = data.target.value;
    setAllergies(inputs)
    setForm({...form, allergies: inputs})
  }



  console.log('alleg', allergies)

  return (
    <div className='patient_wrapper'>
      <div className="register_top">
        <button onClick={() => setPage(1)}  className='btn_clear'><BsArrowLeft/></button>
        <h2 className="register_title">Do you have drug allergies?</h2>
      </div>      
      <div className="fields_group">
        <h4 className='field_label'>Patient Allergies</h4>
        <div className="register_selection">                       
            <input 
              type="radio" 
              name='isAllergies' 
              value='no' 
              id='No' 
              style={{display: 'none'}} 
              // onChange={e => setSex(e.target.value)}
              {...register("isAllergies", { required: true })}
            />
            <label htmlFor="No" className='register_label'>No</label>                        
            <input 
                type="radio" 
                name='isAllergies' 
                value='yes' 
                id='Yes' 
                style={{display: 'none'}}
                // onChange={e => setSex(e.target.value)}
                {...register("isAllergies", { required: true })}
            />
            <label htmlFor="Yes" className='register_label'>Yes</label>
          
        </div>
        {isAllergies === 'yes' &&
        <div className="allergies_group">          
            {allergies.map((data, index) => (
            <div className="allergy_item" key={index}>
              <input 
                type="text" 
                name='allergies'
                className='field_input'
                value={data}
                // {...register("allergies", { required: true })}
                onChange={e => handleChange(e, index)}
                />
                <button onClick={() => handleDelete(index)}>Remove</button>
              </div>
            ))}         
              
          <button onClick={() => handleAdd()} className='btn_add'>Add Allergy</button>
          
        </div>}
      </div>    
    
    
   
      <div className='handle_register'>
          <button onClick={() => setPage(3)} className='btn_register'>Continue</button>
      </div>
   
    </div>
  )
}


export default Allergies
