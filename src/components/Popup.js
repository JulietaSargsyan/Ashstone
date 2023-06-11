import React from 'react'

function Popup({ selectedPost, closePopup }) {
  return (
    <div className="popup-overlay" onClick={closePopup}>
        <div className='popup-container' onClick={(e) => e.stopPropagation()}>
            <h3 className='post__title'>{selectedPost.title}</h3>
            <p className="post__description">{selectedPost.text}</p>
            <div className='close-btn'>
              <button onClick={closePopup}>Close</button>
            </div>
        </div>
    </div>
   
  )
}

export default Popup;