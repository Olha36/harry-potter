import React from 'react';
import Student from './Types';

interface ModalProps {
  student: Student | null;
  onClose: () => void;
}

const ModalStudent: React.FC<ModalProps> = ({ student, onClose }) => {
  if (!student) return null;

  return (
    <div className='modal-overlay' onClick={onClose}>
      <div className='modal-content' onClick={(e) => e.stopPropagation()}>
        <h2>{student.name}</h2>
        <p>Species: {student.species}</p>
        <p>Gender: {student.gender}</p>
        <p>House: {student.house}</p>
        <p>Date of Birth: {student.dateOfBirth}</p>
        <p>Wizard: {student.wizard ? 'Yes' : 'No'}</p>
        <p>Ancestry: {student.ancestry}</p>
        <p>Eye Colour: {student.eyeColour}</p>
        <p>Hair Colour: {student.hairColour}</p>
        <p>Patronus: {student.patronus}</p>
        <p>Actor: {student.actor}</p>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default ModalStudent;
