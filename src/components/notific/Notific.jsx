import React, { useState } from 'react'
import './notific.css'
import { MdClear } from "react-icons/md";
import { useAuth } from '../../config';
import NotiCard from './NotiCard';


const Notific = ({setViewNot, userNots, unReads, reads, viewNot}) => {

    const { user} = useAuth()
    // console.log('nots', userNots)
   
  return (
    <div className='notific_wrapper'>  
        {userNots.length == 0 ? 
        <span className='no_not'>
            No Notifications
            <button className='btn_clear' style={{color:'black'}} onClick={() => setViewNot(null)}><MdClear/></button>
        </span> :  
        <div className='notific_heading'>
            <h4>Notifications</h4>
            <button className='btn_clear' style={{color:'black'}} onClick={() => setViewNot(null)}><MdClear/></button>
        </div>}
        {userNots && userNots.map((item) => (
             <NotiCard item={item} key={item.id} unReads={unReads} reads={reads} viewNot={viewNot} userNots={userNots}/>
        ))}  
    </div>
  )
}

export default Notific
