import React from 'react'
import useData from '../../components/hook/useData'
import Search from '../../components/search/Search'
import { useAuth } from '../../config'
import ChatCard from '../chatroom/ChatCard'

const Messages = () => {
  const {user} = useAuth()
  const {privates} = useData()
  const chats = privates && privates.filter((p) => p.members.find(m => m.includes(user.uid)))

  // const chats = privates && privates.filter(p => p.id === item.id)
  return (
    <div className='profile_wrapper'>
      <h1 className='a_page_title'>Messages</h1>
      <div className="messages_inner">
        <Search />
        <div className="user_chats">
          {chats && chats.map(chat => (
            <ChatCard chat={chat}/>
          ))}
        </div>
      </div>
      
    </div>
  )
}

export default Messages
