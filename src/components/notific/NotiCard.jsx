import { collection, doc, updateDoc } from 'firebase/firestore';
import React, { useState } from 'react'
import { useEffect } from 'react';
import { format } from 'timeago.js'
import { db, useAuth } from '../../config';
import useData from '../hook/useData'



const NotiCard = ({item, unReads, reads, viewNot, userNots}) => {
    const { privates } = useData();    
    const {user} = useAuth();
    const { uid } = user;
    // const unRead = unReads.find(u => u.isRead.find(m => m === user.uid))
    // const notRef = collection(db, 'notifications')

    const userChat = privates && privates.find((p) => p.id === item.room) 
    const toMe = userChat && userChat.members.find((m) => m.includes(uid))
    const [loading, setLoading] = useState(null)
    const [read, setRead] = useState([])
    const isRead = item.isRead.includes(`${uid}`)

    useEffect(() => {
        setRead(item.isRead)
    },[item])

    console.log('unReads', unReads)
    console.log('read', read)


    const handleRead = async (e) => {
        e.preventDefault()

        setLoading(true)

        // read.push(user.uid).length
        

        try {
            // let isRead = []

            const data = read.push(...read, uid)
            
            setRead(data)
            console.log('read', read)
            // await updateDoc(doc(db, 'notifications', `${item.id}`), {isRead: read})
            setLoading(null)
        } catch (error) {
            console.log(error.message)
        }

    }

    // console.log('read', read)


  return (
    <div className="notific_body_inner" key={item.id}>
        <div className={isRead ? 'notific_card': 'unread_card'}>
            <div className="notific_photo">
                <img src={item && item.photo} alt="" className='img'/>
            </div>
            <div className="notific_details">
                <p><strong>{item && item.user}</strong> {item && item.content} {toMe ? 'you' : item && item.room}</p>
                <h5>{format(item && item.time)}</h5>
            
                <form className="btns_actions_to" onSubmit={handleRead}>
                    {isRead ? <button type='button' className='btn_read'>Read</button> : <button className='btn_unread' type='submit'>{loading ? 'Sending...' : 'Mark as Read'}</button> }
                                          
                </form>
            </div>
        </div>

    </div>
  )
}

export default NotiCard
