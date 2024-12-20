import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../css/welcome.css';
import houses from '../img/houses.jpg';
import students from '../img/students.jpg';
import teachers from '../img/teachers.jpg';
import Students from '../pages/Students';
import Teachers from '../pages/Teachers';
import Houses from '../components/Houses';
interface Button {
  (): void;
}

function Welcome() {
  const navigate = useNavigate();
  const [showCharacters, setShowCharacters] = useState(false);
  const [text, setText] = useState(false);

  const handleShowCharactersButton: Button = () => {
    setShowCharacters((prev: boolean) => !prev);
    setText((prev: boolean) => !prev);
  };

  const handleCharactersButton = () => {
    navigate('/students');
    return (
      <>
        <Students />
      </>
    );
  };

  const handleTeachersPageButton =() => {
    navigate('/teachers');
    return (
      <>
        <Teachers />
      </>
    );
  }

  const handleHousePageButton = () => {
    navigate('/houses');
    return (
      <>
      <Houses />
      </>
    )
  }

  return (
    <div className='welcome-wrapper'>
      <div className='welcome-container'>
        <h1>
          Ласкаво просимо <br /> у світ Гаррі Поттера
        </h1>
        <button className='show-characters' onClick={handleShowCharactersButton}>
          {text ? 'Сховати персонажів' : 'Показати всіх персонажів'}
        </button>
      </div>
      <div className='welcome-cards' style={{ display: showCharacters ? 'flex' : 'none' }}>
        <div className='welcome-students'>
          <img src={students} alt='students' />
          <button onClick={handleCharactersButton}>Студенти Хогвортсу</button>
        </div>
        <div className='welcome-teachers'>
          <img src={teachers} alt='teachers' />
          <button onClick={handleTeachersPageButton}>Співробітники Хогвордсу</button>
        </div>
        <div className='welcome-houses'>
          <img src={houses} alt='houses' />
          <button onClick={handleHousePageButton}>Персонажі в певному будинку</button>
        </div>
      </div>
    </div>
  );
}

export default Welcome;
