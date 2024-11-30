import { useEffect, useState } from 'react';
import { TfiHome } from 'react-icons/tfi';
import { useNavigate } from 'react-router-dom';
import '../App.css'
import '../css/teachers.css';
import Welcome from '../pages/Welcome';
import arrow from '../img/arrow.png';

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

  interface Teacher {
    name: string;
    alternate_names: string[];
    species: string;
    gender: string;
    house: string;
    dateOfBirth: string;
    wizard: boolean;
    ancestry: string;
    eyeColour: string;
    hairColour: string;
    patronus: string;
    hogwartsStudent: boolean;
    hogwartsStaff: boolean;
    actor: string;
    image: string;
  }
  const [teachers, setTeachers] = useState<Teacher[]>([]);
  const [error, setError] = useState<string | null>(null);

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
          <div className='container-card' key={teacher.name}>
            <img className='card-picture' src={teacher.image} alt={teacher.name} />
            <h2>{teacher.name}</h2>
            <p>{teacher.species}</p>
            <p>{teacher.gender}</p>
            <p>{teacher.house}</p>
            <div className='button-group'>
            <p>Більше інформації</p>
            <img src={arrow} alt='arrow' />
            </div>
            <div className='container-more_info'>
              <p>{teacher.dateOfBirth}</p>
              <p>{teacher.wizard ? 'Wizard' : 'Not a wizard'}</p>
              <p>{teacher.ancestry}</p>
              <p>{teacher.eyeColour}</p>
              <p>{teacher.hairColour}</p>
              <p>{teacher.patronus}</p>
              <p>{teacher.hogwartsStudent ? 'Student' : 'Not a student'}</p>
              <p>{teacher.hogwartsStaff ? 'Staff' : 'Not a staff'}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
