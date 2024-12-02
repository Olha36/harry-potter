import { useEffect, useState } from 'react';
import { TfiHome } from 'react-icons/tfi';
import { useNavigate } from 'react-router-dom';
import '../App.css';
import Modal from '../components/ModalStudent';
import '../css/students.css';
import arrow from '../img/arrow.png';
import Welcome from '../pages/Welcome';
import Student from './Types';

export default function ShowStudents() {
  const [students, setStudents] = useState<Student[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [selectedStudent, setSelectedStudent] = useState<Student | null>(null);

  const handleMoreInfoClick = (student: Student) => {
    setSelectedStudent(student);
  };

  const handleCloseModal = () => {
    setSelectedStudent(null);
  };

  const navigate = useNavigate();

  const handleHomeButton = () => {
    navigate('/welcome');
    return (
      <>
        <Welcome />
      </>
    );
  };

  useEffect(() => {
    const fetchStudents = async () => {
      const url = `https://hp-api.onrender.com/api/characters/students`;

      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error(`Error: ${response.status}`);
        }
        const data = await response.json();
        setStudents(data); // Update state with fetched data
      } catch (error) {
        if (error instanceof Error) {
          setError(error.message);
        } else {
          setError('An unknown error occurred');
        }
      }
    };

    fetchStudents();
  }, []);

  return (
    <>
      <div className='hogwards-wrapper'>
        <h1>Студенти Хогвордсу</h1>
        <TfiHome onClick={handleHomeButton} />
      </div>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <div className='container'>
        {students.map((student) => (
          <div
            key={student.name}
            className='container-card'
            style={{
              backgroundImage: student.image ? `url(${student.image})` : 'none',
              backgroundSize: student.image ? 'cover' : 'initial',
              backgroundPosition: student.image ? 'center' : 'initial',
            }}
          >
            {!student.image && (
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
              <h2>{student.name}</h2>
              <p>
                {student.alternate_names && student.alternate_names.length > 0 ? (
                  student.alternate_names.slice(0, 2).map((name, index) => (
                    <span key={index}>
                      {name}
                      {index === 0 && student.alternate_names.length > 1 ? ',' : ''}
                    </span>
                  ))
                ) : (
                  <span>Student has not alternate names</span>
                )}
              </p>
              <p>{student.house ? <span>{student.house}</span> : <span>House is not specified</span>}</p>
              <p>
                {student.dateOfBirth ? <span>{student.dateOfBirth}</span> : <span>Date of birth is not specified</span>}
              </p>
              <div className='button-group' onClick={() => handleMoreInfoClick(student)}>
                <p>Більше інформації</p>
                <img src={arrow} alt='arrow' />
              </div>
              <div className='container-more_info'>
                <p>{student.wizard}</p>
                <p>{student.ancestry}</p>
                <p>{student.eyeColour}</p>
                <p>{student.hairColour}</p>
                <p>{student.patronus}</p>
                <p>{student.hogwartsStudent}</p>
                <p>{student.hogwartsStaff}</p>
                <p>{student.actor}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      {selectedStudent && <Modal student={selectedStudent} onClose={handleCloseModal} />}
    </>
  );
}
