import React from 'react'
import { useNavigate } from 'react-router-dom'
import './profile.css'

const NotFound = () => {

    const navigate = useNavigate()
  return (
    <div className='not_found'>
        <div className="not_found_top">
            <span>TABIBU<strong>CHAT</strong></span>
        </div>
        <div className="not_found_body">
            <h1>404</h1>
            <span>the User you are looing for is not found, please try again latter </span>
            <button onClick={() => navigate(-1)}>Back</button>
        </div>
        <div className="not_found_footer"></div>
      
    </div>
  )
}

export default NotFound
