import React from 'react';

interface Teacher {
  name: string;
  species: string;
  gender: string;
  house: string;
  dateOfBirth: string;
  wizard: boolean;
  ancestry: string;
  eyeColour: string;
  hairColour: string;
  patronus: string;
  actor: string;
}

interface ModalProps {
  teacher: Teacher | null;
  onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ teacher, onClose }) => {
  if (!teacher) return null;

  return (
    <div className='modal-overlay' onClick={onClose}>
      <div className='modal-content' onClick={(e) => e.stopPropagation()}>
        <h2>{teacher.name}</h2>
        <p>Species: {teacher.species}</p>
        <p>Gender: {teacher.gender}</p>
        <p>House: {teacher.house}</p>
        <p>Date of Birth: {teacher.dateOfBirth}</p>
        <p>Wizard: {teacher.wizard ? 'Yes' : 'No'}</p>
        <p>Ancestry: {teacher.ancestry}</p>
        <p>Eye Colour: {teacher.eyeColour}</p>
        <p>Hair Colour: {teacher.hairColour}</p>
        <p>Patronus: {teacher.patronus}</p>
        <p>Actor: {teacher.actor}</p>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default Modal;
