import { HashRouter, Routes, Route } from 'react-router-dom';
import './App.css'
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';

function App() {

  return (
    <div>
      <HashRouter>
          <Routes>
            <Route index element={<Home />} />
            <Route path='/home' element={<Home />} />
            <Route path='/about' element={<About />} /> 
            <Route path='/contact' element={<Contact />} />
          </Routes>
        </HashRouter>
    </div>
  )
}

export default App
