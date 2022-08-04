import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { doctors } from '../../data'


const PrivateRoom = () => {
    const { id } = useParams()
    const navigate = useNavigate()
    const currentRoom = doctors.find(d => d.id === id)

    // console.log('id', id)

  return (
    <div>
      you are now in private room with {currentRoom.name}
      <button onClick={() => navigate('/')}>back to home</button>
    </div>
  )
}

export default PrivateRoom
