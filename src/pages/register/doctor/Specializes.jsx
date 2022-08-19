import React from 'react'
import { BsArrowLeft } from "react-icons/bs";
import useData from '../../../components/hook/useData';

const Specializes = ({props}) => {
    const { departments } = useData()
    const {verified, setPage, page, register} = props
  return (
    <div className='patient_wrapper'>        
        <div className="register_top">
            <button onClick={() => setPage(4)}  className='btn_clear'><BsArrowLeft/></button>
            <h2 className="register_title">Specializations</h2>
        </div>
        <h4 className='field_label'>Please check all that apply</h4> 
        <div className="specializes_wrapper">
            {departments && departments.map(item => (
            <label 
                htmlFor={item.id} 
                key={item.id}
                className='spec_item'                
                {...register("specializes", { required: true })}
                >
                <input type="checkbox" id={item.id} value={item.name} name='specializes'/>
                <span>{item && item.name}</span>
            </label> 
            ))}
            
        </div>
        <div className='handle_register'>
            <button onClick={() => setPage(6)} className='btn_register'>Continue</button>
        </div>
    </div>
  )
}

export default Specializes
