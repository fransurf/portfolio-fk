import React from 'react'
import Container from 'react-bootstrap/Container'
import { Link } from 'react-router-dom'
// import Skills from '../helpers/Skills'

const LandingPage = () => {
  return (
    <Container className='landing-container'>
      <section className='landing-content'>
        <div className='name'>
          <h1  id='landing-title'>Frances Knight<span>.</span></h1>
        </div>
        <div className='tagline'>
          <h2 className='landing-subtitle typewriter' id='type1'><span>{`{`}</span> from passionate neuroscientist to </h2>
          <h2 className='landing-subtitle typewriter' id='type2'>junior software engineer <span>{`}`}</span></h2>
        </div>
        {/* <Skills id='skills-bar'/> */}
      </section>

      <section className='landing-nav'>
        <ul className='list'>
          <li><Link to='/about' className='link' id='about'>ABOUT</Link></li>
          <li><Link to='/projects' className='link' id='projects'>PROJECTS</Link></li>
          <li><Link to='/academics' className='link' id='academics'>ACADEMICS</Link></li>
          <li><Link to='/contact' className='link' id='contact'>CONTACT</Link></li>
        </ul>

      </section>



    </Container>
    
  )
}

export default LandingPage