import React, { useState } from 'react'
import './send.css'
import { HiOutlineEmojiHappy, HiOutlinePaperClip, HiOutlineCamera } from "react-icons/hi";
import { MdOutlineSend } from "react-icons/md";
import { addDoc, collection, serverTimestamp } from 'firebase/firestore';
import { useAuth, db } from '../../config';



const SendForm = ({currentRoom}) => {
  const { user } = useAuth()
  const { uid, photoURL, displayName } = user
  const [message, setMessage] = useState('')
  const [loading, setLoding] = useState(null)   

  const messageRef = collection(db, 'messages')
  
  const handleSubmit = async(e) => {
    e.preventDefault()
    setLoding(true)
    const data = {
            uid,
            photoURL,
            createdAt: serverTimestamp(),
            text: message,
            room: currentRoom,
            displayName
    }

    try {
        await addDoc(messageRef, data)
        setLoding(null);
        setMessage('');
        
    } catch (error) {
        console.log(error.message)
    }
    // scrollRef.current.scrollIntoView({ behavior: 'smooth' })
  
};
  return (
    <form className='form_container' onSubmit={handleSubmit}>
        <div className="form_outer">        
            <div className="emoj">
                <button className='btn_form'><HiOutlineEmojiHappy/></button>
            </div> 
            <input 
              type="text" 
              value={message} 
              className='send_input' 
              placeholder='Message'
              onChange={(e) =>setMessage(e.target.value)} 
              />
            <button className='btn_form'><HiOutlinePaperClip/></button>
            <button className='btn_form'><HiOutlineCamera/></button>
        </div> 
        <button 
          className='btn_send_msg'
          disabled={!message && loading}
          ><MdOutlineSend/></button>   
    </form>
  )
}

export default SendForm
