import React from 'react';
import ModalTypes from './Types';


interface ModalProps {
  modal: ModalTypes | null;
  onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ modal, onClose }) => {
  if (!modal) return null;

  return (
    <div className='modal-overlay' onClick={onClose}>
      <div className='modal-content' onClick={(e) => e.stopPropagation()}>
        <h2>{modal.name}</h2>
        <p>Species: {modal.species}</p>
        <p>Gender: {modal.gender}</p>
        <p>House: {modal.house}</p>
        <p>Date of Birth: {modal.dateOfBirth}</p>
        <p>Wizard: {modal.wizard ? 'Yes' : 'No'}</p>
        <p>Ancestry: {modal.ancestry}</p>
        <p>Eye Colour: {modal.eyeColour}</p>
        <p>Hair Colour: {modal.hairColour}</p>
        <p>Patronus: {modal.patronus}</p>
        <p>Actor: {modal.actor}</p>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default Modal;
