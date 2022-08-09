import React from 'react'

export default function ControlButtons(props) {

  const {handleReset, handlePauseResume, handleStart, isPaused, handleComplete, active, member} = props
    const StartButton = (
      <>
      {member && member.isOnline? 
      <div className="btn1 btn-one btn-start"
           onClick={handleStart}>
        Start
      </div> : <span className='offline_m'>{`${member && member.name} is offline`}</span>}</>
    );
    const ActiveButtons = (
      <div className="btn-grp">
        <div className="btn1 btn-two" 
             onClick={handleReset}>
          Reset
        </div>
        <div className="btn1 btn-one" 
             onClick={handlePauseResume}>
          {isPaused ? "Resume" : "Pause"}
        </div>
        {isPaused &&
        <div className="btn1 btn-three" 
             onClick={handleComplete}>
          Complete
        </div>}
      </div>
    );
    
    return (
      <div className="Control-Buttons">
        <div>{active ? ActiveButtons : StartButton}</div>
      </div>
    );
  }
