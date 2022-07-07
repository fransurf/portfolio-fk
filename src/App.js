import { BrowserRouter, Routes, Route } from 'react-router-dom'

import NavBar from './components/NavBar'
import LandingPage from './components/Landing'
import About from './components/About'
import Projects from './components/Projects'
import Academics from './components/Academics'
import Contact from './components/Contact'

function App() {
  return (
    <main className='main-container'>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path='/' element={<LandingPage />} />
          <Route path='/about' element={<About />} />
          <Route path='/projects' element={<Projects />} />
          <Route path='/academics' element={<Academics />} />
          <Route path='/contact' element={<Contact />} />

        </Routes>

      </BrowserRouter>
    </main>
  );
}

export default App;
