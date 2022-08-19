import {  useAuthState } from 'react-firebase-hooks/auth'
import './App.css';
import React, { useEffect, useState } from 'react';
import { auth, db, useAuth } from './config';
import ChatRoom from './pages/chatroom/ChatRoom';
import Login from './pages/login/Login';
import Navbar from './components/Navbar';
import Spinner from './components/spinner/Spinner';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import Home from './pages/home/Home';
import Department from './pages/department/Department';
import { ProfileContext } from './components/hook/context/ProfileContext';
import Doctors from './pages/doctors/Doctors';
import PrivateRoom from './pages/chatroom/PrivateRoom';
import About from './pages/about/About';
import Account from './pages/account/Account';
import { collection, onSnapshot } from 'firebase/firestore';
import SingleDoctor from './pages/doctors/SingleDoctor';
import Profile from './pages/profile/Profile';
import Register from './pages/register/Register';
import useData from './components/hook/useData';



function App() {
  const [currentRoom, setCurrentRoom] = useState("General")

  const {doctors, privates, departments, messages} = useData()
  const { user } = useAuth()
  // const [user] = useAuthState(auth)
  const [loading, setLoading] = useState(true)
  const [viewDoc, setViewDoc] = useState(null)
  const [viewDoctor, setViewDoctor] = useState(null)

  console.log('user', user.uid)


  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 5000)
  }, [])

  // const RequireAuth = () => {
  //   return user? <Department/> : <Navigate to="/login"/>
  // }

  return (
    <div className='app'>
      {loading && <Spinner/>}
      {/* <ProfileContext.Provider value={{viewDoctor, setViewDoctor}}>      */}
        <BrowserRouter>
          <Routes>          
            <Route exact path='/' element={
              // <RequireAuth>
                <Home />
              // </RequireAuth>
              }/>
            <Route path='/depart/:id' element={
              // <RequireAuth>
                <Department />
              // </RequireAuth>              
              }/>
              <Route path='/privates/:id' element={
              // <RequireAuth>
                <PrivateRoom user={user} privates={privates}  doctors={doctors} departments={departments} messages={messages}/>
              // </RequireAuth>              
              }/>
            <Route path='/doctors' element={
              // <RequireAuth>
                <Doctors user={user} privates={privates} doctors={doctors} departments={departments}/>
              // </RequireAuth>            
            }/>
             {/* <Route path='/register' element={
              <RequireAuth>
                <Register />
              </RequireAuth>            
            }/> */}
            <Route path='/profile/:id' element={
              // <RequireAuth>
                <Profile/>
              // </RequireAuth>
            
            }/>
             <Route path='/account' element={
              // <RequireAuth>
                <Account/>
              // </RequireAuth>
            
            }/>
            <Route path='/login' element={<Login/>}/>
            <Route path='/about' element={<About/>}/>         
          </Routes>
        </BrowserRouter> 
      {/* </ProfileContext.Provider> */}
      {/* {loading && <Spinner/>} */}
      {/* <Navbar 
        user={user}
        currentRoom={currentRoom}
        setCurrentRoom={setCurrentRoom} 
      />
      <div className='contents_wrapper'>
        {user ? <ChatRoom currentRoom={currentRoom}/> : <Login />}
      </div> */}
    </div>
  );
}

export default App;
