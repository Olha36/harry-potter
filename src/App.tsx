import { HashRouter, Routes, Route } from 'react-router-dom';
import './App.css'
import Home from './pages/Home';
import Welcome from './pages/Welcome';
import Students from './pages/Students'
import Teachers from './pages/Teachers'
import Houses from './pages/Houses';

function App() {

  return (
    <div>
      <HashRouter>
          <Routes>
            <Route index element={<Home />} />
            <Route path='/home' element={<Home />} />
            <Route path='/welcome' element={<Welcome />} /> 
            <Route path='/students' element={<Students />} />
            <Route path='/teachers' element={<Teachers />} />
            <Route path='/houses' element={<Houses />} />
          </Routes>
        </HashRouter>
    </div>
  )
}

export default App
