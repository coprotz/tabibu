import {  useAuthState } from 'react-firebase-hooks/auth'
import './App.css';
import React, { useEffect, useState } from 'react';
import { auth, useAuth } from './config';
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



function App() {
  const [currentRoom, setCurrentRoom] = useState("General")
  const { user } = useAuth()
  // const [user] = useAuthState(auth)
  const [loading, setLoading] = useState(true)
  const [viewDoc, setViewDoc] = useState(null)
  const [viewDoctor, setViewDoctor] = useState(null)


  console.log('user', user)

  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 3000)
  }, [])

  const RequireAuth = ({children}) => {
    return user ? (children) : <Navigate to="/login"/>
  }

  return (
    <div className='app'>
      {loading && <Spinner/>}
      <ProfileContext.Provider value={{viewDoctor, setViewDoctor}}>     
        <BrowserRouter>
          <Routes>          
            <Route path='/' element={
           
                user ? <Home/> : <Navigate to="/login"/>
                
         
              }/>
            <Route path='/depart/:id' element={
              <RequireAuth>
                <Department user={user}/>
              </RequireAuth>              
              }/>
              <Route path='/private/:id' element={
              <RequireAuth>
                <PrivateRoom user={user}/>
              </RequireAuth>              
              }/>
            <Route path='/doctors' element={
              <RequireAuth>
                <Doctors user={user} />
              </RequireAuth>
            
            }/>
            <Route path='/login' element={<Login/>}/>
          </Routes>
        </BrowserRouter> 
      </ProfileContext.Provider>
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
