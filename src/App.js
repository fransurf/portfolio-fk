import { BrowserRouter, Routes, Route } from 'react-router-dom'
// ^ using HashRouter instead of BrowserRouter for deployment on github pages

import NavBar from './components/NavBar'
import LandingPage from './components/Landing'
import About from './components/About'
import Projects from './components/Projects'
import Academics from './components/AcademicsTrial'
import Contact from './components/Contact'
import Accordion from './components/AccordianWVW'

function App() {
  return (
    <main className='main-container'>
      <BrowserRouter >
        {/* ^ providing a basename which directs to the gh-page url for the routes to work off */}
        <NavBar />
        <Routes>
          <Route path='/' element={<LandingPage />} />
          <Route path='/about' element={<About />} />
          <Route path='/projects' element={<Projects />} />
          <Route path='/academics' element={<Academics />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/accordian' element={<Accordion />} />

        </Routes>

      </BrowserRouter>

      {/* <div className="custom-cursor"></div> */}
    </main>
  );
}

export default App;
