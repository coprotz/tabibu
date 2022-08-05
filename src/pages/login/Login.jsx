import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import React, { useState } from 'react'
import { auth, useAuth } from '../../config';
import { HiOutlineGlobeAlt } from "react-icons/hi";
import logo from '../../components/images/chat3.png'
import './login.css'
import { FcGoogle } from "react-icons/fc";
import { useNavigate, useParams } from 'react-router-dom'
import Nav from '../../components/nav/Nav';
import userEvent from '@testing-library/user-event';

const Login = () => {

  const { googleSignIn, user } = useAuth()
  const [err, setErr] = useState('')

  const navigate = useNavigate()

    const signWithGoogle = async (e) => {      
        e.preventDefault();

        try {
          await googleSignIn()
          if(user){
            navigate('/')
          }
          
        } catch (error) {
          setErr(error.message)
        }
        // const provider = new GoogleAuthProvider();
        // signInWithPopup(auth, provider)
        // navigate('/')

    }



  return (
    <div className='login_container'>    
      <Nav/>
      {err && <span className='error'>{err}</span>}
      <div className="login_body">
        <div className="logo_chat">
          <img src={logo} alt="" className='img'/>
        </div>
        <div className="login_wrapper">
            <button className='btn_google' onClick={signWithGoogle}> <FcGoogle/>SignIn with Google</button>
            {user && user.displayName}
        </div>
      </div>
      <small className='empowered'>Empowered by BarruTech</small>
    </div>
  )
}

export default Login
