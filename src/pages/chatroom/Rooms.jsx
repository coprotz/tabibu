import React from 'react'
import { departments } from '../../data';

const Rooms = ({ currentRoom, setShowSidebar, setCurrentRoom }) => {
    const handleRoomChange = (room) => {
        setCurrentRoom(room);
        setShowSidebar(false)
    }
  return (
    <div className='rooms'>
        <h2>Departments</h2>
        <ul>
            {departments.map((item, index) => (
            <li
                key={index}
                onClick={() => {
                    handleRoomChange(item.name)
                }}
                className={currentRoom === item.name ? 'active' : ""}
                >
                {item.name}

            </li>
            ))}
           
        </ul>

    </div>
  )
}

export default Rooms
