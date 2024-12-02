import { useEffect, useState } from 'react';
import { TfiHome } from 'react-icons/tfi';
import { useNavigate } from 'react-router-dom';
import '../css/houses.css';
import arrow from '../img/arrow.png';
import GryffindorImg from '../img/houses/gryffindor.jpg';
import HufflepuffImg from '../img/houses/hufflepuff.jpg';
import RavenclawImg from '../img/houses/ravenclaw.jpg';
import SlytherinImg from '../img/houses/slytherin.jpg';
import Welcome from '../pages/Welcome';
import ModalHouse from './ModalHouse';
import House from './Types';

const houseAPIs: Record<string, string> = {
  Gryffindor: 'https://hp-api.onrender.com/api/characters/house/gryffindor',
  Slytherin: 'https://hp-api.onrender.com/api/characters/house/slytherin',
  Ravenclaw: 'https://hp-api.onrender.com/api/characters/house/ravenclaw',
  Hufflepuff: 'https://hp-api.onrender.com/api/characters/house/hufflepuff',
};

// interface House {
//   id: string;
//   name: string;
//   alternate_names: string[];
//   species: string;
//   gender: string;
//   house: string;
//   dateOfBirth: string;
//   wizard: boolean;
//   ancestry: string;
//   eyeColour: string;
//   hairColour: string;
//   patronus: string;
//   hogwartsStudent: boolean;
//   hogwartsStaff: boolean;
//   actor: string;
//   image: string;
//   wand: {
//     wood: string;
//     core: string;
//     length: number | null;
//   };
//   hogwartStudent: boolean;
// }

function Houses() {
  const [error, setError] = useState<string | null>(null);
  const [houses, setHouses] = useState<House[]>([]);
  const [selectedHouse, setSelectedHouse] = useState<string>('Gryffindor');
  const [modalHouse, setModalHouse] = useState<House | null>(null);
  const navigate = useNavigate();

  const handleHomeButton = () => {
    navigate('/welcome');
    return <Welcome />;
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
      if (!Array.isArray(data)) {
        throw new Error('Unexpected API response format');
      }
      setHouses(data);
    } catch (error) {
      if (error instanceof Error) {
        setError(error.message);
      }
      console.error('Failed to fetch house data:', error);
    }
  };

  const handleHouseClick = (houseName: string) => {
    setSelectedHouse(houseName);
  };

  const handleButtonClick = (house: House) => {
    setModalHouse(house);
  };

  const handleCloseModal = () => {
    setModalHouse(null);
  };

  useEffect(() => {
    fetchHouseData(selectedHouse);
  }, [selectedHouse]);

  return (
    <>
      <div className="hogwards-wrapper">
        <h1>
          Персонажі в <br /> певному будинку
        </h1>
        <TfiHome onClick={handleHomeButton} />
      </div>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <div className="houses-list flex">
        {['Gryffindor', 'Slytherin', 'Ravenclaw', 'Hufflepuff'].map((house) => {
          const isActive = selectedHouse === house;
          const houseImages: Record<string, string> = {
            Gryffindor: GryffindorImg,
            Slytherin: SlytherinImg,
            Ravenclaw: RavenclawImg,
            Hufflepuff: HufflepuffImg,
          };
          return (
            <div
              key={house}
              className={`house flex align-items ${house.toLowerCase()} ${isActive ? 'active' : ''}`}
              role="button"
              onClick={() => handleHouseClick(house)}
            >
              <img src={houseImages[house]} alt={house} className="house-img" />
              <h3 className="house-name">{house}</h3>
            </div>
          );
        })}
      </div>
      {houses.length > 0 && (
        <div className="house-details">
          <div className="house-characters container">
            {houses.map((house) => (
              <div
                key={house.id}
                className="house-card container-card"
                style={{
                  backgroundImage: house.image ? `url(${house.image})` : 'none',
                  backgroundSize: house.image ? 'cover' : 'initial',
                  backgroundPosition: house.image ? 'center' : 'initial',
                }}
              >
                {!house.image && (
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
                <div className="card-content">
                  <h4>{house.name}</h4>
                  <p>
                    {house.alternate_names && house.alternate_names.length > 0 ? (
                      house.alternate_names.slice(0, 2).map((name, index) => (
                        <span key={index}>
                          {name}
                          {index === 0 && house.alternate_names.length > 1 ? ',' : ''}
                        </span>
                      ))
                    ) : (
                      <span>Character has no alternative names</span>
                    )}
                  </p>
                  <p>{house.house || 'House is not specified'}</p>
                  <p>{house.dateOfBirth || 'Date of birth is not specified'}</p>
                  <div className="button-group" onClick={() => handleButtonClick(house)}>
                    <p>Більше інформації</p>
                    <img src={arrow} alt="arrow" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
      {modalHouse && <ModalHouse house={modalHouse} onClose={handleCloseModal} />}
    </>
  );
}

export default Houses;
