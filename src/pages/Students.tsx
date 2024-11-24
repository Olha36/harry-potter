import { useEffect, useState } from 'react';
import StudentsPage from '../components/Students';

function Students() {
  const [studentsPageComponent, setStudentsPageComponent] = useState<JSX.Element | null>(null);

  useEffect(() => {
    setStudentsPageComponent(<StudentsPage />);
  }, []);

  return <div>{studentsPageComponent}</div>;
}

export default Students;
