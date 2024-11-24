export default async function ShowStudents() {
  const url = `https://hp-api.onrender.com/api/characters/students`;
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Response status: response.status`);
    }
    const json = await response.json();
    console.log(json);
  } catch (error) {
    if (error instanceof Error) {
      console.error(error.message);
    } else {
      console.error(String(error));
    }
  }
  return (
    <>
      <h1>Студенти Хогвордсу</h1>
      <div className='students-container'></div>
    </>
  );
}
