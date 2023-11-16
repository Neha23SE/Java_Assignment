// Modal.js
import React from 'react';
import Modal from 'react-modal';

const CustomModal = ({ isOpen, onClose, message }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      contentLabel="Success Modal"
      style={modalStyle}
    >
      <h2>Success!</h2>
      <p>{message}</p>
      <button onClick={onClose}>Close</button>
    </Modal>
  );
};

const modalStyle = {
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  content: {
    width: '300px',
    margin: 'auto',
    padding: '20px',
    borderRadius: '5px',
    boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.5)',
  },
};

export default CustomModal;
