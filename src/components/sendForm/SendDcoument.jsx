import React from 'react'

const SendDcoument = ({setDocument, file, currentRoom, document, setAttached}) => {

    const handleCancel = () => {
        setDocument(null)
        setAttached(null)
    }
  return (
    <div className="doc_selected">
        <div className="doc_selected_action">
            <span>Send "{ document && document.name}" to {currentRoom}?</span>
            <div className="selected_files_actions">
              <button type='button' onClick={handleCancel}>CANCEL</button>
              <button>SEND</button>
            </div>
        </div>
    </div>
  )
}

export default SendDcoument
