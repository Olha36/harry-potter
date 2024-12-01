import { TfiHome } from 'react-icons/tfi';
import { useNavigate } from 'react-router-dom';
import Welcome from '../pages/Welcome';
import GryffindorImg from '../img/houses/gryffindor.jpg';
import SlytherinImg from '../img/houses/slytherin.jpg';
import RawenclawImg from '../img/houses/ravenclaw.jpg';
import HufflepuffImg from '../img/houses/hufflepuff.jpg';
import '../css/houses.css';

function Houses() {
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
      <div className='hogwards-wrapper'>
        <h1>
          Персонажі в <br /> певному будинку
        </h1>
        <TfiHome onClick={handleHomeButton} />
      </div>

      <div className='houses-list flex'>
        <div className='gryffindor flex align-items active'>
            <img src={GryffindorImg} alt="Gryffindor" className="house-img" />
            <h3 className="house-name">Gryffindor</h3>
        </div>
        <div className='slytherin flex align-items'>
            <img src={SlytherinImg} alt="Slytherin" className="house-img" />
            <h3 className="house-name">Slytherin</h3>
        </div>
        <div className='ravenclaw flex align-items'>
            <img src={RawenclawImg} alt="Ravenclaw" className="house-img" />
            <h3 className="house-name">Ravenclaw</h3>
        </div>
        <div className='hufflepuff flex align-items'>
            <img src={HufflepuffImg} alt="Hufflepuff" className="house-img" />
            <h3 className="house-name">Hufflepuff</h3>
        </div>
      </div>
    </>
  );
}

export default Houses;
