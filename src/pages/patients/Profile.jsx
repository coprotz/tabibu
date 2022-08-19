import React from 'react'

const Profile = ({patient}) => {
    console.log('patient', patient);
  return (
    <div className='profile_wrapper'>
      <h1 className='a_page_title'>Profile</h1>
      <div className="profile_grids">
        <div className="p_card">
            <h2 className='p_card_head'>Age</h2>
            <span className='p_body'>{patient && patient.dob}</span>
        </div>
        <div className="p_card">
            <h2 className='p_card_head'>Gender</h2>
            <span className='p_body'>{patient && patient.sex}</span>
        </div>
        <div className="p_card">
            <h2 className='p_card_head'>Region</h2>
            <span className='p_body'>{patient && patient.region}</span>
        </div>
        
        <div className="p_card">
            <h2 className='p_card_head'>District</h2>
            <span className='p_body'>{patient && patient.district}</span>
        </div>
        <div className="p_card">
            <h2 className='p_card_head'>Membership</h2>
            <span className='p_body'>{patient && patient.isSubscribed === true? 'Active': 'Inactive'}</span>
        </div>
        <div className="p_card">
            <h2 className='p_card_head'>Weight</h2>
            <span className='p_body'>{patient && patient.weight}kg</span>
        </div>
        <div className="p_card">
            <h2 className='p_card_head'>Height</h2>
            <span className='p_body'>{patient && patient.height}cm</span>
        </div>
        <div className="p_card">
            <h2 className='p_card_head'>Diet plan</h2>
            <span className='p_body'>{patient && patient.diet}</span>
        </div>
        <div className="p_card">
            <h2 className='p_card_head'>Exercises</h2>
            <span className='p_body'>{patient && patient.exercises}</span>
        </div>
        <div className="p_card">
            <h2 className='p_card_head'>Alcohol</h2>
            <span className='p_body'>{patient && patient.alcohol}</span>
        </div>
        <div className="p_card">
            <h2 className='p_card_head'>Caffeine</h2>
            <span className='p_body'>{patient && patient.caffeine}</span>
        </div>
        <div className="p_card">
            <h2 className='p_card_head'>Allergies</h2>
            <span className='p_body'>I have one serious</span>
        </div>
        <div className="p_card">
            <h2 className='p_card_head'>Historical Diseases</h2>
            <span className='p_body'>I have one serious</span>
        </div>
        <div className="p_card">
            <h2 className='p_card_head'>Under Medications</h2>
            <span className='p_body'>I have one serious</span>
        </div>
        <div className="p_card">
            <h2 className='p_card_head'>Historical Operations</h2>
            <span className='p_body'>I have one serious</span>
        </div>
        <div className="p_card">
            <h2 className='p_card_head'>Smoke</h2>
            <span className='p_body'>I dont smoke</span>
        </div>
      </div>
    </div>
  )
}

export default Profile
