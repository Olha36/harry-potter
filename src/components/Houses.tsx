import { TfiHome } from 'react-icons/tfi';
import { useNavigate } from 'react-router-dom';
import Welcome from '../pages/Welcome';

function Houses() {
  const navigate = useNavigate();
  const handleHomeButton = () => {
    navigate('/welcome');
    return (
        <>
            <Welcome />
        </>
    )
  };
  return (
    <>
      <div className='hogwards-wrapper'>
        <h1>Персонажі в певному будинку</h1>
        <TfiHome onClick={handleHomeButton} />
      </div>
    </>
  );
}

export default Houses;
