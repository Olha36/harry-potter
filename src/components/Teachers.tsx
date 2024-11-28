import { TfiHome } from 'react-icons/tfi';
import { useNavigate } from 'react-router-dom';
import Welcome from '../pages/Welcome';
import '../css/teachers.css'
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

  return (
    <>
      <div className='hogwards-teachers'>
        <h1>Співробітники Хогвордсу</h1>
        <TfiHome onClick={handleHomeButton} />
      </div>
      <div className='hogwards-container'></div>
    </>
  );
}
