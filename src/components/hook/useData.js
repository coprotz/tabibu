import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../../config";



const useData = () => {

 const [departments, setDepartments] = useState([])
 const departsRef = collection(db, 'departments')
 const [patients, setPatients] = useState([])
 const patientsRef = collection(db, 'patients')
 const [privates, setPrivates] = useState([])
 const privatesRef = collection(db, 'privates')
 const [doctors, setDoctors] = useState([])
 const doctorsRef = collection(db, 'doctors')
 const [messages, setMessages] = useState([])
 const messagesRef = collection(db, 'messages')

//  console.log('departs', departments)
//  console.log('patients', patients)
//  console.log('privates', privates)
//  console.log('doctors', doctors)
//  console.log('messages', messages)

 useEffect(() => {
    onSnapshot(departsRef, snapshot => {
        setDepartments(snapshot.docs.map(doc => {
            return {
                id: doc.id,
                ...doc.data()
            }
        }))
    })
 },[])

 useEffect(() => {
    onSnapshot(patientsRef, snapshot => {
        setPatients(snapshot.docs.map(doc => {
            return {
                id: doc.id,
                ...doc.data()
            }
        }))
    })
 },[])

 useEffect(() => {
    onSnapshot(privatesRef, snapshot => {
        setPrivates(snapshot.docs.map(doc => {
            return {
                id: doc.id,
                ...doc.data()
            }
        }))
    })
 },[])

 useEffect(() => {
    onSnapshot(doctorsRef, snapshot => {
        setDoctors(snapshot.docs.map(doc => {
            return {
                id: doc.id,
                ...doc.data()
            }
        }))
    })
 },[])

 const q = query(messagesRef, orderBy("createdAt"));

 useEffect(() => {
    onSnapshot(q, snapshot => {
        setMessages(snapshot.docs.map(doc => {
            return {
                id: doc.id,
                ...doc.data()
            }
        }))
    })
 },[])

 return { departments, patients, privates, messages, doctors }

}

export default useData;