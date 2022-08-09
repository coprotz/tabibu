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



function App() {
  const [currentRoom, setCurrentRoom] = useState("General")
  const { user } = useAuth()
  // const [user] = useAuthState(auth)
  const [loading, setLoading] = useState(true)
  const [viewDoc, setViewDoc] = useState(null)
  const [viewDoctor, setViewDoctor] = useState(null)
  // const [privates, setPrivates] = useState([])
  const [departments, setDepartments] = useState(null)
  const [privates, setPrivates] = useState([])
  const [doctors, setDoctors] = useState(null)
  const [messages, setMessages] = useState(null)
  // const userPrivates = privates && privates.filter((p) => p.members.find(m => m.includes(user.uid)))

  useEffect(() => {
    fetch('http://localhost:8000/departments')
    .then(res => {
        return res.json();
    })
    .then(data => {
        setDepartments(data)
        console.log(data)
    })
},[])

useEffect(() => {
  fetch('http://localhost:8000/messages')
  .then(res => {
      return res.json();
  })
  .then(data => {
      setMessages(data)
      console.log(data)
  })
},[])

useEffect(() => {
    fetch('http://localhost:8000/doctors')
    .then(res => {
        return res.json();
    })
    .then(data => {
        setDoctors(data)
        console.log(data)
    })
},[])

useEffect(() => {
    fetch('http://localhost:8000/privates')
    .then(res => {
        return res.json();
    })
    .then(data => {
        setPrivates(data)
        console.log(data)
    })
},[])


  // console.log('privates', user.uid)

  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 3000)
  }, [])

  const privatesRef = collection(db, 'privates')
  const doctorsRef = collection(db, 'doctors')
  const departmentsRef = collection(db, 'departments')

  // useEffect(() => {
  //   onSnapshot(privatesRef, snapshot => {
  //     setPrivates(snapshot.docs.map(doc => {
  //       return {
  //         id: doc.id,         
  //         ...doc.data()
  //       }
  //     }))
  //   })
  // },[])

  const RequireAuth = ({children}) => {
    return user && user ? (children) : <Navigate to="/login"/>
  }

  return (
    <div className='app'>
      {loading && <Spinner/>}
      <ProfileContext.Provider value={{viewDoctor, setViewDoctor}}>     
        <BrowserRouter>
          <Routes>          
            <Route exact path='/' element={
              <RequireAuth>
                <Home privates={privates} doctors={doctors} departments={departments}/>
              </RequireAuth>
              }/>
            <Route path='/depart/:id' element={
              <RequireAuth>
                <Department privates={privates} doctors={doctors} departments={departments} messages={messages}/>
              </RequireAuth>              
              }/>
              <Route path='/privates/:id' element={
              <RequireAuth>
                <PrivateRoom user={user} privates={privates}  doctors={doctors} departments={departments} messages={messages}/>
              </RequireAuth>              
              }/>
            <Route path='/doctors' element={
              <RequireAuth>
                <Doctors user={user} privates={privates} doctors={doctors} departments={departments}/>
              </RequireAuth>            
            }/>
             <Route path='/register' element={
              <RequireAuth>
                <Register />
              </RequireAuth>            
            }/>
            <Route path='/profile/:id' element={
              <RequireAuth>
                <Profile/>
              </RequireAuth>
            
            }/>
             <Route path='/account' element={
              <RequireAuth>
                <Account/>
              </RequireAuth>
            
            }/>
            <Route path='/login' element={<Login/>}/>
            <Route path='/about' element={<About/>}/>         
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
