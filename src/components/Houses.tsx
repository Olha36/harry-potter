import { useState } from 'react';
import { TfiHome } from 'react-icons/tfi';
import { useNavigate } from 'react-router-dom';
import '../css/houses.css';
import GryffindorImg from '../img/houses/gryffindor.jpg';
import HufflepuffImg from '../img/houses/hufflepuff.jpg';
import RawenclawImg from '../img/houses/ravenclaw.jpg';
import SlytherinImg from '../img/houses/slytherin.jpg';
import Welcome from '../pages/Welcome';

function Houses() {
  const [error, setError] = useState<string | null>(null);
  const [houses, setHouses] = useState<House[]>([]);
  const [selectedHouse, setSelectedHouse] = useState<string | null>(null);
  const navigate = useNavigate();
  const handleHomeButton = () => {
    navigate('/welcome');
    return (
      <>
        <Welcome />
      </>
    );
  };

  interface House {
    id: string;
    name: string;
    house: string;
    image: string;
  }

  const houseAPIs: Record<string, string> = {
    Gryffindor: 'https://hp-api.onrender.com/api/characters/house/gryffindor',
    Slytherin: 'https://hp-api.onrender.com/api/characters/house/slytherin',
    Ravenclaw: 'https://hp-api.onrender.com/api/characters/house/ravenclaw',
    Hufflepuff: 'https://hp-api.onrender.com/api/characters/house/hufflepuff',
  };


    const fetchHouseData = async (houseName: string) => {
        const url = houseAPIs[houseName];
        setError(null);
        try {
          const response = await fetch(url);
          if (!response.ok) {
            throw new Error(`Error: ${response.status}`);
          }
          const data = await response.json();
          setHouses(data);
          setSelectedHouse(houseName);
        } catch (error) {
          if (error instanceof Error) {
            setError(error.message);
          }
        }
      };

      const handleHouseClick = (houseName: string) => {
        console.log(houseName);
        fetchHouseData(houseName);
      };

      
  return (
    <>
      <div className='hogwards-wrapper'>
        <h1>
          Персонажі в <br /> певному будинку
        </h1>
        <TfiHome onClick={handleHomeButton} />
      </div>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <div className='houses-list flex'>
        <div className='gryffindor flex align-items active' role='button' onClick={() => handleHouseClick('Gryffindor')}>
          <img src={GryffindorImg} alt='Gryffindor' className='house-img' />
          <h3 className='house-name'>Gryffindor</h3>
        </div>
        <div className='slytherin flex align-items' role='button' onClick={() => handleHouseClick('Slytherin')}>
          <img src={SlytherinImg} alt='Slytherin' className='house-img' />
          <h3 className='house-name'>Slytherin</h3>
        </div>
        <div className='ravenclaw flex align-items' role='button' onClick={() => handleHouseClick('Ravenclaw')}>
          <img src={RawenclawImg} alt='Ravenclaw' className='house-img' />
          <h3 className='house-name'>Ravenclaw</h3>
        </div>
        <div className='hufflepuff flex align-items' role='button' onClick={() => handleHouseClick('Hufflepuff')}>
          <img src={HufflepuffImg} alt='Hufflepuff' className='house-img' />
          <h3 className='house-name'>Hufflepuff</h3>
        </div>
      </div>
      {selectedHouse && (
        <div className='house-details'>
          <h2>{selectedHouse} Characters</h2>
          <div className='house-characters'>
            {houses.map((house) => (
              <div key={house.id} className='house-card'>
                <img src={house.image} alt={house.name} className='character-img' />
                <h4>{house.name}</h4>
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
}

export default Houses;
