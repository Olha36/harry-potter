import { useEffect, useState } from 'react';
import { TfiHome } from 'react-icons/tfi';
import { useNavigate } from 'react-router-dom';
import '../App.css';
import '../css/teachers.css';
import arrow from '../img/arrow.png';
import Welcome from '../pages/Welcome';
import Modal from '../components/Modal';
import Teacher from './Types';

export default function Teachers() {
  const navigate = useNavigate();
  const handleHomeButton = () => {
    navigate('/welcome');
    return (
      <>
        <Welcome />
      </>
    );
  };

  const [teachers, setTeachers] = useState<Teacher[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [selectedTeacher, setSelectedTeacher] = useState<Teacher | null>(null);

  const handleButtonClick = (teacher: Teacher) => {
    setSelectedTeacher(teacher);
  };

  const handleCloseModal = () => {
    setSelectedTeacher(null)
  }

  useEffect(() => {
    const fetchTeachers = async () => {
      const url = `https://hp-api.onrender.com/api/characters/staff`;

      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error(`Error: ${response.status}`);
        }
        const data = await response.json();
        setTeachers(data);
      } catch (error) {
        if (error instanceof Error) {
          setError(error.message);
        } else {
          setError('An unknown error occured');
        }
      }
    };
    fetchTeachers();
  }, []);
  return (
    <>
      <div className='hogwards-wrapper'>
        <h1>Співробітники Хогвордсу</h1>
        <TfiHome onClick={handleHomeButton} />
      </div>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <div className='container'>
        {teachers.map((teacher) => (
          <div
            className='container-card'
            key={teacher.name}
            style={{
              backgroundImage: teacher.image ? `url(${teacher.image})` : 'none',
              backgroundSize: teacher.image ? 'cover' : 'initial',
              backgroundPosition: teacher.image ? 'center' : 'initial',
            }}
          >
            {!teacher.image && (
              <div
                style={{
                  height: '100%',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              >
                <span style={{ fontSize: '25px', fontStyle: 'italic' }}>Image is absent in the URL</span>
              </div>
            )}

            <div className='card-content'>
              <h2>{teacher.name}</h2>
              <p>
                {teacher.alternate_names && teacher.alternate_names.length > 0 ? (
                  teacher.alternate_names.slice(0, 2).map((name, index) => (
                    <span key={index}>
                      {name}
                      {index === 0 && teacher.alternate_names.length > 1 ? ',' : ''}
                    </span>
                  ))
                ) : (
                  <span>Teacher has no alternative names</span>
                )}
              </p>
              <p>{teacher.house ? <span>{teacher.house}</span> : <span>House is not specified</span>}</p>
              <p>{teacher.dateOfBirth ? <span>{teacher.dateOfBirth}</span> : <span>Date of birth is not specified</span>}</p>
              
              <div className='button-group' onClick={() =>handleButtonClick(teacher)}>
                <p>Більше інформації</p>
                <img src={arrow} alt='arrow' />
              </div>
            </div>
          </div>
        ))}
      </div>
      {selectedTeacher && <Modal modal={selectedTeacher} onClose={handleCloseModal} />}
    </>
  );
}
