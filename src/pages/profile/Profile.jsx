import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import doc1 from '../../components/images/doc2.jpg'
import { BsXLg } from "react-icons/bs";
import useFetch from '../../components/hook/useFetch';
import SingleDoctor from '../doctors/SingleDoctor';
import SinglePatient from '../../components/singlePatient/SinglePatient';
import useData from '../../components/hook/useData';



const Profile = () => {

    // const { data: doctors, isPending, Error } = useFetch('http://localhost:8000/doctors');
    // const { data: patients } = useFetch('http://localhost:8000/patients');

    const { patients, doctors } = useData()
    const { id } = useParams()   
    const doctor = doctors && doctors.find((d) => d.userId === id)
    const patient = patients && patients.find((d) => d.userId === id)

    console.log('doc', doctors)

    const RenderProfile = () => {
        if(doctor){
            return (
               <SingleDoctor doctor={doctor}/> 
            )
        }else if(patient){
            return (
                <SinglePatient patient={patient}/>
            )
        }
    }

  return (
  <>
  {RenderProfile()}
  </>
  )
}

export default Profile
