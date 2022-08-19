import React from 'react'
import { Link, useNavigate } from 'react-router-dom';
import useData from '../../components/hook/useData';
import { BsFillImageFill } from "react-icons/bs";


const DepartCard = ({item}) => {

    const { departments, messages } = useData()
    const currentRoom = departments && departments.find(d => d.id === item.id)
    const roomMsgs = messages && messages.filter((m) => m.room === currentRoom.name)
    const lastMsg = messages && messages.findLast((m) => m.room === currentRoom.name)
    const isImage = lastMsg && lastMsg.msgType === 'image'

    const options = {  day: 'numeric' };

    console.log('last', lastMsg);

    const navigate = useNavigate()
  return (
    <div className='dept-item' onClick={() => navigate(`/depart/${item.id}`)}>
        <div className="depart_last">
           <h4>{item.name}</h4> 
           <div className="last_user_msg">
                <span className='depart_name_1'>{lastMsg && lastMsg.displayName}:</span>
                {isImage ? <span className='depart_image'><BsFillImageFill/>Photo</span>:
                <p className='depart_text'>{lastMsg && lastMsg.text}</p>}
            </div> 
        </div>
        
        <div className="depart_status">
            <small className='depart_time'>
                {new Date(lastMsg && lastMsg.createdAt.seconds * 1000).toLocaleTimeString()}
                {/* {new Date(lastMsg && lastMsg.createdAt.seconds * 1000).getTime()} */}
                </small>
            <span className='depart_qty'>{roomMsgs && roomMsgs.length}</span>
        </div>
    </div>
  )
}

export default DepartCard
