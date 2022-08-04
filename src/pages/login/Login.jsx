import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import React from 'react'
import { auth } from '../../config';
import { HiOutlineGlobeAlt } from "react-icons/hi";
import logo from '../../components/images/chat3.png'
import './login.css'
import { FcGoogle } from "react-icons/fc";
import { useNavigate, useParams } from 'react-router-dom'

const Login = () => {

  const navigate = useNavigate()

    const signWithGoogle = async (e) => {
        e.preventDefault();
        const provider = new GoogleAuthProvider();
        signInWithPopup(auth, provider)
        navigate('/')

    }



  return (
    <div className='login_container'>
      <div className="lang_change">
        <h4>Tabibu App</h4>
        <button className='btn-lang'><HiOutlineGlobeAlt/> English</button>
      </div>
      <div className="login_body">
        <div className="logo_chat">
          <img src={logo} alt="" className='img'/>
        </div>
        <div className="login_wrapper">
            <button className='btn_google' onClick={signWithGoogle}> <FcGoogle/>SignIn with Google</button>
        </div>
      </div>

        
    </div>
  )
}

export default Login
