import { BrowserRouter, Routes, Route } from 'react-router-dom'

import NavBar from './components/NavBar'
import LandingPage from './components/Landing'
import About from './components/About'
import Projects from './components/Projects'
import Academics from './components/Academics'
import Contact from './components/Contact'
import Accordion from './components/AccordianWVW'

function App() {
  return (
    <main className='main-container'>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path='/portfolio-fk' element={<LandingPage />} />
          <Route path='/portfolio-fk/about' element={<About />} />
          <Route path='/portfolio-fk/projects' element={<Projects />} />
          <Route path='/portfolio-fk/academics' element={<Academics />} />
          <Route path='/portfolio-fk/contact' element={<Contact />} />
          <Route path='/portfolio-fk/accordian' element={<Accordion />} />

        </Routes>

      </BrowserRouter>

      {/* <div className="custom-cursor"></div> */}
    </main>
  );
}

export default App;
