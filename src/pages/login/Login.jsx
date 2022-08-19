// import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import React, { useState } from 'react'
import { useAuth } from '../../config';
// import { HiOutlineGlobeAlt } from "react-icons/hi";
import logo from '../../components/images/chat3.png'
import './login.css'
import { FcGoogle } from "react-icons/fc";
import { useNavigate, useParams } from 'react-router-dom'
import Nav from '../../components/nav/Nav';
// import userEvent from '@testing-library/user-event';
import useData from '../../components/hook/useData';
import { AiFillInstagram, AiFillTwitterCircle } from "react-icons/ai";
import {  BsInstagram, BsTwitter, FaFacebookF } from "react-icons/bs";
import { ImFacebook, ImTwitter, ImInstagram } from "react-icons/im";

const Login = () => {

  const { doctors, patients } = useData()

  const { googleSignIn, user } = useAuth()
  const [err, setErr] = useState('')

  // const doctor = doctors && doctors.find((d) => d.userId ===  user.uid)
  // const patient = patients && patients.find((d) => d.userId === user.uid)

  console.log('user', user);

  const navigate = useNavigate()

    const signWithGoogle = async (e) => {      
        e.preventDefault();

        try {
          await googleSignIn()
          if(user){
            navigate('/')   
          }else {
            navigate('/register')
          }
              
          
        } catch (error) {
          setErr(error.message)
        }   

    }



  return (
    <div className='login_container'>    
      <Nav/>
      {err && <span className='error'>{err}</span>}
      <div className="login_body">
        <div className="logo_chat">
          <img src={logo} alt="" className='img'/>
        </div>
        <h1 className='sign_in'>Sign In</h1>
        <div className="login_wrapper">
            <button className='btn_google' onClick={signWithGoogle}> <FcGoogle/>SignIn with Google</button>
            {/* {user && user.displayName} */}
        </div>
        <div className="login_social">
          <button><ImFacebook/></button>
          <button><ImInstagram/></button>
          <button><ImTwitter/></button>
        </div>
      </div>
      <small className='empowered'>Empowered by BarruTech</small>
    </div>
  )
}

export default Login
