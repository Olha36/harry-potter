import { useEffect, useState } from 'react';
import StudentsPage from '../components/Students';

function Students() {
  const [studentsPageComponent, setStudentsPageComponent] = useState<JSX.Element | null>(null);

  useEffect(() => {
    StudentsPage().then(component => {
      setStudentsPageComponent(component);
    });
  }, []);

  return (
    <div>
      {studentsPageComponent}
      <h1>Students page</h1>
    </div>
  );
}

export default Students;
