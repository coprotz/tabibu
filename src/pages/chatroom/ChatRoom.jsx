// import { collection, onSnapshot, query, orderBy } from 'firebase/firestore';
import React, { useState } from 'react'
import { db, useAuth } from '../../config';
import './chats.css'
import MessageCard from '../../components/MessageCard';
import SendForm from '../../components/sendForm/SendForm';
// import useFetch from '../../components/hook/useFetch';
import useData from '../../components/hook/useData';
import ImageCard from '../../components/ImageCard';



const ChatRoom = ({currentRoom}) => {

    // const { data: messages, isPending, Error } = useFetch('http://localhost:8000/messages');
    // const { data: doctors } = useFetch('http://localhost:8000/doctors');

    const { messages, doctors } = useData()
    const { user } = useAuth()
    const doctor = doctors && doctors.find(d => d.userId === user.uid)
    const scrollRef = React.useRef(null);
    const [alert, setAlert] = useState("")

    

    React.useLayoutEffect(() => {
      if(scrollRef.current) {
        scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
      }
    })

    const [displayImage, setDisplayImage] = useState(null)

    console.log('room', currentRoom)

  return (
    <div className='messages' >
      {alert &&
      <div className="alert_message_overlay">
        <div className="alert_message">
          <h1>Oops...!!</h1>
          {alert}
          <button onClick={() => setAlert("")}>OK</button>
        </div>
      </div>}
        {displayImage &&
        <div className="display_image_outer">
          <div className="disply_image_top">
            <button type='button' onClick={() => setDisplayImage(null)}>Close</button>  
            <button type='button'>download</button>           
          </div>
          <div className="display_image_body">
            <h4 style={{color: 'white'}}>{displayImage && displayImage.displayName}</h4>
            <img src={displayImage && displayImage.text} alt="" />
            <p style={{color: 'white'}}>{displayImage && displayImage.caption}</p>
          </div>
          <div></div>
        </div>}
        
        <div className='messages_wrapper' ref={scrollRef}>         
            {messages && messages.filter(m => m.room === currentRoom).map((message) => (
                <div className="ref_scroll" >         
                     <MessageCard
                      message={message}
                      doctor={doctor}
                      currentRoom={currentRoom} 
                      key={message.id}
                      setDisplayImage={setDisplayImage}  
                      setAlert={setAlert} 
                  />
                </div>
            ))}       
      
        </div>
        <SendForm currentRoom={currentRoom}/>
    </div>
  )
}

export default ChatRoom
