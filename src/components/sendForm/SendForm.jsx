import React, { useState } from 'react'
import './send.css'
import {  HiOutlinePaperClip, HiOutlineCamera } from "react-icons/hi";
import {  ImCamera, ImImage } from "react-icons/im";
import { MdOutlineSend } from "react-icons/md";
import { BsFillFileEarmarkFill } from "react-icons/bs";
import { addDoc, collection, serverTimestamp } from 'firebase/firestore';
import { useAuth, db } from '../../config';
import useData from '../hook/useData';
import SendDcoument from './SendDcoument';
import SendImage from './SendImage';



const SendForm = ({currentRoom}) => {
  const { user } = useAuth()
  const {doctors, patients, privates} = useData()
  const [attached, setAttached] = useState(null)
  const { uid, photoURL, displayName } = user
  const doctor = doctors && doctors.find(d => d.userId === uid)
  const patient = patients && patients.find(p => p.userId === uid)
  const [message, setMessage] = useState('')
  const [loading, setLoding] = useState(null) 
  


  const room = privates && privates.find((p) => p.id === currentRoom)

  const memberId = room && room.members.find(m => m !== uid)

  
  console.log('memberId', memberId)


  const messageRef = collection(db, 'messages')
  const [document, setDocument] = useState(null)
  const [image, setImage] = useState(null)
  const [error, setError] = useState('')

  const types = ['image/png', 'image/jpeg']

  const handleSelect = (e) => {
      let selected = e.target.files[0];

      if (selected && types.includes(selected.type)){
          setImage(selected)
          setError('')
      }else {
          setImage(null)
          setError('Please select an image file (png or jpeg)')
      }
  }
  
  const handleSubmit = async(e) => {
    e.preventDefault()
    setLoding(true)
    const data = {
            uid,
            photoURL,
            createdAt: serverTimestamp(),
            text: message,
            room: currentRoom,
            memberId: room ? memberId : 'all',
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

        <div className='form_container' >
          
          {document &&
            <SendDcoument setDocument={setDocument} document={document} currentRoom={currentRoom} setAttached={setAttached}/>
          } 
          { image && 
            <SendImage 
              setImage={setImage} 
              image={image} 
              setAttached={setAttached} 
              currentRoom={currentRoom}
              user={user}
              doctor={doctor}
              />
          }
          <form onSubmit={handleSubmit} className='form_inner_wrapper'>   
            {attached &&
            <div className="attach_wrapper">
              {error && <span className='error'>{error}</span>}
              <div className="attach_items">                
                <label htmlFor='file' className="attach_item">
                  <div className='attach_btns'><BsFillFileEarmarkFill/></div>
                  <span>Document</span>
                  <input 
                    type="file" 
                    style={{display: 'none'}} 
                    id='file'
                    // onChange={handleSelect}
                    />
                </label>
                <label htmlFor='image' className="attach_item">
                  <div className='attach_btns'><ImImage/></div>
                  <span>Image</span>
                  <input 
                    type="file" 
                    style={{display: 'none'}} 
                    id='image'
                    onChange={handleSelect}
                    />
                </label>             
                <div className="attach_item">
                <div className='attach_btns'><ImCamera/></div>
                  <span>Camera</span>
                </div>
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
              ><MdOutlineSend/>
            </button>   
        </form>
        </div>
  
  )
}

export default SendForm
