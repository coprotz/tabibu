import React, {useState} from 'react'
import { addDoc, collection } from 'firebase/firestore'
import { useNavigate } from 'react-router-dom'
import { db, useAuth } from '../../config'

const InviteDoc = ({setDoctor, dr, doctor }) => {
    const navigate = useNavigate()

    const {user} = useAuth()
    const [err, setErr] = useState('')
    const privateRef = collection(db, 'privates')
    const { uid, photoURL, displayName } = user

    const data = {
      members: [`${dr.id}`, `${uid}`]
    }

    const handlePrivate = async (e) => {
      e.preventDefault()

      // console.log('data', data)
      try {
        const res = await addDoc(privateRef, data)
        if(res){
          navigate(`/privates/${res.id}`)
       
        }
  
      } catch (error) {
        setErr(error.message)
      }
    }

  return (
    <div 
        className='btn_docs'        
        >Invite {dr && dr.name} for Consultation
        <div className="btns_actions">
          <form onSubmit={handlePrivate}>
            <button type='submit' className='btn_invite'>OK</button>
          </form>
          <button onClick={() => setDoctor("")}>Cancel</button>
        </div>
        {err && <span>{err}</span>}
    </div>
  )
}

export default InviteDoc
