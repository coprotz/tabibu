import { deleteDoc, doc } from 'firebase/firestore';
import React, { useState } from 'react'
import { auth, db } from '../config';

const MessageCard = ({message}) => {
    const {  id, text, uid, createdAt, displayName, photoURL} = message;
    const messageClass = uid === auth.currentUser.uid ? 'sent' : 'received';
    const bgClass = uid === auth.currentUser.uid ? 'blue' : 'grey';
    const [showActionButtons, setShowActionsButtons] = useState(false);
    const toggleCard = () => {
        setShowActionsButtons(!showActionButtons)
    }

    const options = { weekday: 'short', month: 'short', day: 'numeric' };
  return (
    <div className={`message ${messageClass}`}>
        <div className={`contents ${messageClass}`} onClick={toggleCard}>
            
            <div className="photo">
                <img src={photoURL} alt="" />
            </div>
            <div className={`text ${bgClass}`}>
                <div className="user-name">
                    <p>{displayName}</p>
                </div>
                <p>{text}</p>
                <small className='message_time'>{createdAt && new Date(createdAt.seconds * 1000).toLocaleTimeString("en-US", options)}</small>
            </div>
            <div
                style={{display: showActionButtons ? "block":"none"}}
                className="actions"
                >
                    <button onClick={() => deleteDoc(doc(db, 'messages', message.id))}>Delete</button>
            </div>
        </div>
      
    </div>
  )
}

export default MessageCard
