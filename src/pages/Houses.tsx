import { useEffect, useState } from 'react';
import HousesPage from '../components/Houses';

function Students() {
  const [housesPageComponent, setHousesPageComponent] = useState<JSX.Element | null>(null);

  useEffect(() => {
    setHousesPageComponent(<HousesPage />);
  }, []);

  return <div>{housesPageComponent}</div>;
}

export default Students;
