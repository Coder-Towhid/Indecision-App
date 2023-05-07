
import React from 'react';
import Modal from 'react-modal';

const OptionModal = ({ option, id, isOpen, onConfirm }) => {
  const handleClick = () => {
    onConfirm(id);
  };
console.log(option, id, isOpen)

  return (
    
    <Modal isOpen={isOpen} contentLable="Selected Option">
      <h3>Selected Option</h3>
      {option && <p>{option}</p>}
      <button onClick={handleClick}>Okay</button>
    </Modal>
  );
};

export default OptionModal;
