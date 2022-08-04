import { initializeApp } from 'firebase/app';
import { getFirestore } from "firebase/firestore";

import { 
    // onAuthStateChanged, 
    // signOut, 
    // signInWithEmailLink, 
    // signInWithEmailAndPassword,
    getAuth,
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

    // export const firebaseRef = firebase;




