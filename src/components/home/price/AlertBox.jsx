import React from 'react';
import './price.css'

const AlertBox = ({ message, onClose }) => {
  return (
    <div className="alert-container">
      <div className="alert-box">
        <div className="alert-message">{message}</div>
        <button className="alert-button" onClick={onClose}>
          Close
        </button>
      </div>
    </div>
  );
};

export default AlertBox;
