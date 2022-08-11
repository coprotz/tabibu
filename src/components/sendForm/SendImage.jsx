import React, { useEffect, useState } from 'react'
import { MdOutlineSend } from "react-icons/md";
import { BsXLg } from "react-icons/bs";
import useStorage from '../hook/useStorage';
import { addDoc, collection, serverTimestamp } from 'firebase/firestore';
import { db } from '../../config';

const SendImage = ({setImage, currentRoom, image, setAttached, user, doctor }) => {

    const { uid, photoURL, displayName } = user

    const { progress, url } = useStorage(image)
    const [caption, setCaption] = useState('')

    const messagesRef = collection(db, 'messages')

    // useEffect(() => {
    //     if(url){
    //         setImage(null)
    //     }
    // },[url, setImage])

    // console.log(progress, url)

    const handleCancel = () => {
        setImage(null)
        setAttached(null)
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        const data = {
            uid,
            photoURL,
            createdAt: serverTimestamp(),
            text: url,
            room: currentRoom,           
            msgType: 'image',
            caption,
            displayName: doctor ? doctor.name : displayName
        }

        addDoc(messagesRef, data)
        setImage(null)
        setAttached(null)

        // console.log('data', data)
    }

  

    
  return (
    <div className="image_selected">
        <div className="image_selected_top">
           <button className='btn_clear' onClick={handleCancel} style={{color: 'white'}}><BsXLg/></button> 
           <h4 style={{color: 'white'}}>Send to {currentRoom}?</h4>
        </div>
        
        <div className='selected_image' >
            {image && 
            <div className="progress-bar"  style={{width: progress + '%'}}></div>}
            <img src={URL.createObjectURL(image)} alt="" />
            <form className="selected_image_action" onSubmit={handleSubmit}>
                <div className="image_captioned">
                    <input 
                        type="text" 
                        placeholder='Add a Caption' 
                        value={caption} 
                        // className='send_input'                   
                        onChange={(e) =>setCaption(e.target.value)} 
                    />
                    {url &&
                    <button 
                        className='btn_send_msg'
                        type='submit'
                        disabled={!caption}
                        ><MdOutlineSend/>
                    </button>
                    }
                </div>
             </form>  
        </div>
        <div>

        </div>
      
      
    </div>
  )
}

export default SendImage
