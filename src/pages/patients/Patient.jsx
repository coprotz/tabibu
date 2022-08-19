import React from 'react'
import './patients.css'
import { FaRegUser, FaRegCalendarCheck, FaRegComments, FaNotesMedical, FaUserMd } from "react-icons/fa";
import { GrUpgrade } from "react-icons/gr";
import { ImLab } from "react-icons/im";
import { BsChatLeftDots } from "react-icons/bs";
import { useState } from 'react';
import Profile from './Profile';
import Appointments from './appoints/Appointments'
import Messages from './Messages';
import Prescriptions from './Prescriptions';
import LabTests from './LabTests'
import Subscriptions from './Subscriptions'
import Doctors from './Doctors';

const Patient = ({patient}) => {
    const [page, setPage] = useState(1)
    const RenderPage = () => {
        if(page === 1){
            return (
                <Profile patient={patient}/>
            )
        }else if(page === 2){
            return (
                <Appointments />
            )
        }else if(page === 3){
            return (
                <Messages />
            )
        }else if(page === 4){
            return (
                <Prescriptions />
            )
        }else if(page === 5){
            return (
                <LabTests />
            )
        }else if(page === 7){
            return (
                <Subscriptions />
            )
        }else if(page === 6){
            return (
                <Doctors />
            )
        }
    }
  return (
    <div className='patients_wrapper'>
      <div className="patient_menu">
        <div className={page === 1? 'active_p_menu' : "p_menu_item "} onClick={() => setPage(1)}>
            <FaRegUser/>
            <span className='p_item_name'>Profile</span>
        </div>
        <div className={page === 2? 'active_p_menu' : "p_menu_item "} onClick={() => setPage(2)}>
            <FaRegCalendarCheck/>
            <span className='p_item_name'>Appointments</span>
        </div>
        <div className={page === 3? 'active_p_menu' : "p_menu_item "} onClick={() => setPage(3)}>
            <BsChatLeftDots/>
            <span className='p_item_name'>Messages</span>
        </div>
        <div className={page === 4? 'active_p_menu' : "p_menu_item "} onClick={() => setPage(4)}>
            <FaNotesMedical/>
            <span className='p_item_name'>Prescriptions</span>
        </div>
        <div className={page === 5? 'active_p_menu' : "p_menu_item "} onClick={() => setPage(5)}>
            <ImLab/>
            <span className='p_item_name'>Lab Tests</span>
        </div>
        <div className={page === 6? 'active_p_menu' : "p_menu_item "} onClick={() => setPage(6)}>
            <FaUserMd/>
            <span className='p_item_name'>Doctors</span>
        </div>
        <div className={page === 7? 'active_p_menu' : "p_menu_item "} onClick={() => setPage(7)}>
            <GrUpgrade/>
            <span className='p_item_name'>Subscriptions</span>
        </div>
      </div>
      {RenderPage()}
    </div>
  )
}

export default Patient
