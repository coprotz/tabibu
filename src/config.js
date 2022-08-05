import React, { createContext, useContext, useEffect, useState } from 'react';
import { initializeApp } from 'firebase/app';
import { getFirestore } from "firebase/firestore";

import { 
    // onAuthStateChanged, 
    // signOut, 
    // signInWithEmailLink, 
    // signInWithEmailAndPassword,
    getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithPopup, signOut,
    // sendSignInLinkToEmail, 
    // isSignInWithEmailLink,
    // createUserWithEmailAndPassword
} from 'firebase/auth'


const firebaseConfig = {
    apiKey: process.env.REACT_APP_FIREBASE_KEY,
    projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
    storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGE_ID,
    appId: process.env.REACT_APP_FIREBASE_APPID,    
    authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  };

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);

const AuthContext = createContext()



export function AuthProvider({ children }){
  const [user, setUser] = useState({})

  function googleSignIn(){
    const provider = new GoogleAuthProvider();
    return signInWithPopup(auth, provider)
  }

  function logOut(){
    return signOut(auth)
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, user => {
      setUser(user)
    })
    return () => {
      unsubscribe()
    }
  },[])

  return (
    <AuthContext.Provider value={{ user, googleSignIn, logOut }}>
        {children}
    </AuthContext.Provider>
  )
}

export function useAuth(){
  return useContext(AuthContext)
}



    // export const firebaseRef = firebase;




