import { addDoc, collection, deleteDoc, doc } from 'firebase/firestore';
import React, { useState } from 'react'
import { ImAccessibility } from 'react-icons/im';
import { useNavigate } from 'react-router-dom';
import { auth, db, useAuth } from '../config';
import useData from './hook/useData';
// import { motion } from 'framer-motion'



const MessageCard = ({message, doctor, currentRoom, setDisplayImage, setAlert}) => {

    const { user } = useAuth()
    const { privates, doctors, patients } = useData()
    const {  id, text, uid, createdAt, displayName, photoURL, caption} = message;
    const messageClass = uid === user.uid ? 'sent' : 'received';
    const bgClass = uid === user.uid ? 'blue' : 'grey';
    const [showActionButtons, setShowActionsButtons] = useState(false);
    const doctorRooms = privates && privates.filter((p) => p.members.find(m => m.includes(doctor && doctor.userId)))
    const isMember = doctorRooms && doctorRooms.find((p) => p.members.find(m => m.includes(uid)))
    const isActive = patients && patients.find(p => p.userId === uid)
    // const dr = doctors && doctors.find((d) => d.userId === user.uid)

    // console.log('isMember', isMember)

    const [err, setErr] = useState('')
    const doctorRoom = doctor && doctor.specializes.includes(currentRoom)
    const isOwn = doctor && doctor.userId === uid
    // console.log('isown', isOwn)
    const isImage = message && message.msgType === 'image'
    // console.log('image', isImage)    

    const toggleCard = () => {
        setShowActionsButtons(!showActionButtons)
    }

    const privateRef = collection(db, 'privates')

    const navigate = useNavigate()
    const handlePrivate = async (e) => {
        e.preventDefault()


        const data = {
            members: [`${user.uid}`, `${uid}`]
          }
  
        // console.log('data', data)
        try {

          if(!isActive){
           setAlert(`${displayName} is not found or temporary disabled`)
          }

          else if(isMember){
            navigate(navigate(`/privates/${isMember.id}`))
          }else 
          {        
         
            const res = await addDoc(privateRef, data)
            if(res){
              navigate(`/privates/${res.id}`)
          
            } 
          }
    
          } catch (error) {
            setErr(error.message)
          }
      }

    const options = { weekday: 'short', month: 'short', day: 'numeric' };

    const variants = {
      visible: i => ({
        opacity: 1,
        transition: {
          delay: i * 0.3,
        },
      }),
      hidden: { opacity: 0 },
    }

  return (
    <div className={`message ${messageClass}`}>
        <div className={`contents ${messageClass}`} onClick={toggleCard}>           
            <div className="photo">
                <img src={photoURL} alt="" />
            </div>
            <div className={`text ${bgClass}`}>
                <div className="user-name" onClick={() => navigate(`/profile/${uid}`)}>
                    <p >{ displayName}</p>
                </div>
                {isImage? <img src={text} alt='' onClick={() => setDisplayImage(message)}/> :
                <p>{text}</p>}
                {caption && <>{caption}</>}
                <small className='message_time'>{createdAt && new Date(createdAt.seconds * 1000).toLocaleTimeString("en-US", options)}</small>
            </div>
            <div
                style={{display: "block"}}
                className="actions"
                >
                    {/* <button onClick={() => deleteDoc(doc(db, 'messages', message.id))}>Delete</button> */}
                    {doctor && doctorRoom && !isOwn &&
                    <form onSubmit={handlePrivate}>
                        <button type='submit' className='btn_invite'>Reply</button>
                    </form>}
            </div>
        </div>
      
    </div>
  )
}

export default MessageCard
