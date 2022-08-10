import { addDoc, collection, deleteDoc, doc } from 'firebase/firestore';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { auth, db, useAuth } from '../config';
import useData from './hook/useData';



const MessageCard = ({message, doctor, currentRoom}) => {

    const { user } = useAuth()

    const { privates, doctors } = useData()

    const {  id, text, uid, createdAt, displayName, photoURL} = message;

    const messageClass = uid === user.uid ? 'sent' : 'received';
    const bgClass = uid === user.uid ? 'blue' : 'grey';
    const [showActionButtons, setShowActionsButtons] = useState(false);

    const doctorRooms = privates && privates.filter((p) => p.members.find(m => m.includes(doctor && doctor.userId)))
    const isMember = doctorRooms && doctorRooms.find((p) => p.members.find(m => m.includes(uid)))

    const dr = doctors && doctors.find((d) => d.userId === user.uid)

    console.log('isMember', isMember)

    const [err, setErr] = useState('')

    const doctorRoom = doctor && doctor.specializes.includes(currentRoom)

    // console.log('currentroom', currentRoom)
    // console.log('doctoroom', doctorRoom)
    // console.log('doctor', doctor)

    // const isOwn = () => {
    //   if(doctor.userId === user.uid){
    //     return true
    //   }
    // }

    const isOwn = doctor && doctor.userId === uid

    console.log('isown', isOwn)

    

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
  
        console.log('data', data)
        try {
          if(isMember){
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
                <p>{text}</p>
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
