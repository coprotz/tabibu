import React from 'react'
import { auth } from '../config'
import { signOut } from 'firebase/auth'

const Logout = ({ setShowSidebar, user }) => 
    user && (
        <button
            className='logout'
            onClick={() => {
                signOut(auth);
                setShowSidebar(false)
            }}
            >
            Sign Out
        </button>
    )



export default Logout
