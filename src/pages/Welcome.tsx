import '../css/welcome.css';
import students from '../img/students.jpg';
import teachers from '../img/teachers.jpg';
import houses from '../img/houses.jpg';

function Welcome() {
  return (
    <div className='welcome-wrapper'>
      <div className='welcome-container'>
        <h1>
          Ласкаво просимо <br /> у світ Гаррі Поттера
        </h1>
        <button className='show-characters'>Показати всіх персонажів</button>
      </div>
      <div className="welcome-cards">
        <div className="welcome-students">
          <img src={students} alt="students" />
          <button>Студенти Хогвортсу</button>
        </div>
        <div className="welcome-teachers">
          <img src={teachers} alt="teachers" />
          <button>Співробітники Хогвордсу</button>
        </div>
        <div className="welcome-houses">
          <img src={houses} alt="houses" />
          <button>Персонажі в певному будинку</button>
        </div>
      </div>
    </div>
  );
}

export default Welcome;
