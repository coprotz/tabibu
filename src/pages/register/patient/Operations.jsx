import React, { useState } from 'react'
import { BsArrowLeft } from "react-icons/bs";

const Operations = ({props}) => {


  const {setPage, setType, watch, register, setForm, form} = props

  const hadOperation = watch('hadOperation')
 
  const [operations, setOperations] = useState([
   {name: '', date: ''}
  ])

  const handleAdd = () => {
    const add = [...operations, []]
    setOperations(add)
  }

  const handleDelete = (index) => {
    const deleteVal = [...operations]
    deleteVal.splice(index, 1)
    setOperations(deleteVal)
  }

  const handleChange = (data, index) => {
    const inputs = [...operations]
    inputs[index] = data.target.value;
    setOperations(inputs)
    setForm({...form, operations: inputs})
  }

  console.log('operations', operations)

  return (
    <div className='patient_wrapper'>
      <div className="register_top">
        <button onClick={() => setPage(3)}  className='btn_clear'><BsArrowLeft/></button>
        <h2 className="register_title">Have you ever had an Operation before?</h2>
      </div>      
      <div className="fields_group">        
        <div className="register_selection">                       
            <input 
              type="radio" 
              name='hadOperation' 
              value='no' 
              id='No' 
              style={{display: 'none'}} 
              // onChange={e => setSex(e.target.value)}
              {...register("hadOperation", { required: true })}
            />
            <label htmlFor="No" className='register_label'>No</label>                        
            <input 
                type="radio" 
                name='hadOperation' 
                value='yes' 
                id='Yes' 
                style={{display: 'none'}}
                // onChange={e => setSex(e.target.value)}
                {...register("hadOperation", { required: true })}
            />
            <label htmlFor="Yes" className='register_label'>Yes</label>
          
        </div>
        {hadOperation === 'yes' &&
        <div className="allergies_group">  
            <h4 className='field_label'>Please list any Operations and Dates of Each</h4>        
            {operations.map((data, index) => (
            <div className="operation_details" key={index}>
              <input 
                type="text" 
                name='name'
                className='field_input'
                value={data.name}
                // {...register("allergies", { required: true })}
                onChange={e => handleChange(e, index)}
                />
                <input 
                type="date" 
                name='date'
                className='field_input'
                value={data.date}
                // {...register("allergies", { required: true })}
                onChange={e => handleChange(e, index)}
                />
                <button onClick={() => handleDelete(index)}>Remove</button>
              </div>
            ))}         
              
          <button onClick={() => handleAdd()} className='btn_add'>Add Operation</button>
          
        </div>}
      </div>    
    
    
   
      <div className='handle_register'>
          <button onClick={() => setPage(5)} className='btn_register'>Continue</button>
      </div>
   
    </div>
  )
}


export default Operations
