import { addDoc, serverTimestamp, collection, onSnapshot, query, orderBy, deleteDoc } from 'firebase/firestore';
import React, { useEffect, useRef, useState } from 'react'
import { auth, db } from '../../config';
import './chats.css'
import MessageCard from '../../components/MessageCard';
import SendForm from '../../components/sendForm/SendForm';



const ChatRoom = ({currentRoom}) => {

    const { uid, photoURL, displayName } = auth.currentUser
    const [loading, setLoding] = useState(null)    
    const [message, setMessage] = useState('')
    const [messages, setMessages] = useState([])
    const messageRef = collection(db, 'messages')
    const q = query(messageRef, orderBy("createdAt"));

    const scrollRef = React.useRef(null);

    React.useLayoutEffect(() => {
      if(scrollRef.current) {
        scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
      }
    })


    useEffect(() => {
      onSnapshot(q, snapshot => {
        setMessages(snapshot.docs.map(doc => {
          return {
            id: doc.id,
            viewing: false,
            ...doc.data()
          }
        }))
      })
    },[])


    // const handleSubmit = async(e) => {
    //     e.preventDefault()
    //     setLoding(true)
    //     const data = {
    //             uid,
    //             photoURL,
    //             createdAt: serverTimestamp(),
    //             text: message,
    //             room: currentRoom,
    //             displayName
    //     }

    //     try {
    //         await addDoc(messageRef, data)
    //         setLoding(null);
    //         setMessage('');
            
    //     } catch (error) {
    //         console.log(error.message)
    //     }
    //     scrollRef.current.scrollIntoView({ behavior: 'smooth' })
      
    // };

  return (
    <div className='messages' >
        <div className='messages_wrapper' ref={scrollRef}>         
            {messages && messages.filter(m => m.room === currentRoom).map((message) => (
                <div className="ref_scroll" key={message.id} >
                     <MessageCard
                        message={message}
   
                    />
                </div>
            ))}          
            {/* <span ref={scrollRef}>ALLY</span>         */}
        </div>
        <SendForm currentRoom={currentRoom}/>
        {/* <div className="form_action">
             <form onSubmit={handleSubmit} className='form_wrapper'>
                <textarea 
                    name=""
                    value={message}
                    placeholder="Enter Message"
                    onChange={(e) =>setMessage(e.target.value)} 
                    className='text_input'
                    >
                </textarea>
                <button
                    type='submit'
                    disabled={!message}
                    className="btn_send"
                    >{loading ? 'Sending...' : 'Send'}</button>
          </form>
        </div> */}
        
     
    </div>
  )
}

export default ChatRoom
