// import { collection, onSnapshot, query, orderBy } from 'firebase/firestore';
import React from 'react'
import { db, useAuth } from '../../config';
import './chats.css'
import MessageCard from '../../components/MessageCard';
import SendForm from '../../components/sendForm/SendForm';
// import useFetch from '../../components/hook/useFetch';
import useData from '../../components/hook/useData';



const ChatRoom = ({currentRoom}) => {

    // const { data: messages, isPending, Error } = useFetch('http://localhost:8000/messages');
    // const { data: doctors } = useFetch('http://localhost:8000/doctors');

    const { messages, doctors } = useData()
    const { user } = useAuth()
    const doctor = doctors && doctors.find(d => d.userId === user.uid)
    const scrollRef = React.useRef(null);

    React.useLayoutEffect(() => {
      if(scrollRef.current) {
        scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
      }
    })

    console.log('room', currentRoom)

  return (
    <div className='messages' >
        <div className='messages_wrapper' ref={scrollRef}>         
            {messages && messages.filter(m => m.room === currentRoom).map((message) => (
                <div className="ref_scroll" key={message.id} >
                     <MessageCard
                        message={message}
                        doctor={doctor}
                        currentRoom={currentRoom}
   
                    />
                </div>
            ))}       
      
        </div>
        <SendForm currentRoom={currentRoom}/>
    </div>
  )
}

export default ChatRoom
