import { useEffect, useState } from 'react';
import TeachersPage from '../components/Teachers';

function Teachers() {
  const [teachersPageComponent, setTeachersPageComponent] = useState<JSX.Element | null>(null);

  useEffect(() => {
    setTeachersPageComponent(<TeachersPage />);
  }, []);

  return <div>{teachersPageComponent}</div>;
}

export default Teachers;