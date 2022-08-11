import React, { useState } from 'react'
import './send.css'
import {  HiOutlinePaperClip, HiOutlineCamera } from "react-icons/hi";
import {  ImCamera, ImImage } from "react-icons/im";
import { MdOutlineSend } from "react-icons/md";
import { BsFillFileEarmarkFill } from "react-icons/bs";
import { addDoc, collection, serverTimestamp } from 'firebase/firestore';
import { useAuth, db } from '../../config';
import useData from '../hook/useData';



const SendForm = ({currentRoom}) => {
  const { user } = useAuth()
  const {doctors} = useData()
  const [attached, setAttached] = useState(null)
  const { uid, photoURL, displayName } = user
  const doctor = doctors && doctors.find(d => d.userId === uid)
  const [message, setMessage] = useState('')
  const [loading, setLoding] = useState(null)   

  const messageRef = collection(db, 'messages')
  const [file, setFile] = useState(null)
  
  const handleSubmit = async(e) => {
    e.preventDefault()
    setLoding(true)
    const data = {
            uid,
            photoURL,
            createdAt: serverTimestamp(),
            text: message,
            room: currentRoom,
            displayName: doctor ? doctor.name : displayName
    }

    // fetch('http://localhost:8000/messages', {
    //   method: 'POST',
    //   headers: { "content-Type": "application/json" },
    //   body: JSON.stringify(data)
    // }).then(() => {
    //   setMessage('')
    //   setLoding(null)
    //   console.log('new message posted')
    // })

    try {
        await addDoc(messageRef, data)
        setLoding(null);
        setMessage('');
        
    } catch (error) {
        console.log(error.message)
    }
    // scrollRef.current.scrollIntoView({ behavior: 'smooth' })

    // console.log('data', data)
  
};
  return (
    <form className='form_container' onSubmit={handleSubmit}>
        {attached &&
        <div className="attach_wrapper">
          <label htmlFor='file' className="attach_item">
            <div className='attach_btns'><BsFillFileEarmarkFill/></div>
            <span>Document</span>
            <input 
              type="file" 
              style={{display: 'none'}} 
              id='file'
              onChange={(e) => setFile(e.target.files[0])}
              />
          </label>
          <div className="attach_item">
            <div className='attach_btns'><ImImage/></div>
            <span>Image</span>
          </div>
          <div className="attach_item">
          <div className='attach_btns'><ImCamera/></div>
            <span>Camera</span>
          </div>
        </div>}
        <div className="form_outer">        
            <div className="emoj">
              <button className='btn_form' onClick={() => setAttached(!attached)} type='button'><HiOutlinePaperClip/></button>
            </div> 
            <input 
              type="text" 
              value={message} 
              className='send_input' 
              placeholder='Message'
              onChange={(e) =>setMessage(e.target.value)} 
              />          
            <button className='btn_form' type='button'><HiOutlineCamera/></button>
        </div> 
        <button 
          className='btn_send_msg'
          disabled={!message && loading}
          ><MdOutlineSend/></button>   
    </form>
  )
}

export default SendForm
