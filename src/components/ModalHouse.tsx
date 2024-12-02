import React from 'react';
import House from './Types';

interface ModalProps {
  house: House | null;
  onClose: () => void;
}

const ModalHouse: React.FC<ModalProps> = ({ house, onClose }) => {
  if (!house) return null;

  return (
    <div className='modal-overlay' onClick={onClose}>
      <div className='modal-content' onClick={(e) => e.stopPropagation()}>
        <h2>{house.name}</h2>
        <p>Species: {house.species}</p>
        <p>Gender: {house.gender}</p>
        <p>House: {house.house}</p>
        <p>Date of Birth: {house.dateOfBirth}</p>
        <p>Wizard: {house.wizard ? 'Yes' : 'No'}</p>
        <p>Ancestry: {house.ancestry}</p>
        <p>Eye Colour: {house.eyeColour}</p>
        <p>Hair Colour: {house.hairColour}</p>
        <p>Patronus: {house.patronus}</p>
        <p>Actor: {house.actor}</p>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default ModalHouse;
