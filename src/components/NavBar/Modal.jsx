/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import './Modal.css'; // Create a CSS file for styling

const Modal = ({ show, onClose, children }) => {

  if (!show) {
    return null;
  }

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button onClick={onClose} className="modal-close">
          &times;
        </button>
        {/* {children} */}
        <div>helo</div>
        <div>helo</div>
        <div>helo</div>
        <div>helo</div>
        <div>helo</div>
        <div>helo</div>
        <div>helo</div>
        <div>helo</div>
        <div>helo</div>
        <div>helo</div>
        <div>helo</div>
        <div>helo</div>
        <div>helo</div>
        <div>helo</div>
        <div>helo</div>
        <div>helo</div>
        <div>helo</div>
        <div>helo</div>
        <div>helo</div>
        <div>helo</div>
        <div>helo</div>
        <div>helo</div>
        <div>helo</div>
        <div>helo</div>
        <div>helo</div>
        <div>helo</div>
        <div>helo</div>
        <div>helo</div>
        <div>helo</div>
        <div>helo</div>
        <div>helo</div>
        <div>helo</div>
        <div>helo</div>
        <div>helo</div>
        <div>helo</div>
        <div>helo</div>
        <div>helo</div>
        <div>helo</div>
        <div>helo</div>
        <div>helo</div>
        <div>helo</div>
        <div>helo</div>
      </div>
    </div>
  );
};

export default Modal;