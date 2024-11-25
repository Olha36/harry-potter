import { useEffect, useState } from 'react';
import '../css/students.css';
import arrow from '../img/arrow.png';

export default function ShowStudents() {
  interface Student {
    name: string;
    alternate_names: string[];
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

  const [students, setStudents] = useState<Student[]>([]);
  const [error, setError] = useState<string | null>(null);

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

    fetchStudents(); // Call the async function
  }, []); // Empty dependency array means this runs only once when the component mounts

  return (
    <>
      <h1>Студенти Хогвордсу</h1>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <div className='students-container'>
        {students.map((student) => (
          <div key={student.name} className='student-card'>
            <img src={student.image} alt={`${student.name}'s portrait`} width='150' />
            <h2>{student.name}</h2>
            <p>{student.alternate_names[0]}</p>
            <p>{student.house}</p>
            <p>{student.dateOfBirth || 'Unknown'}</p>
            <div className='button-group'>
              <p>Більше інформації</p>
              <img src={arrow} alt='arrow' />
            </div>
            <div className='students-more_info'>
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
        ))}
      </div>
    </>
  );
}
