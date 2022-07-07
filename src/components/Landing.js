import React from 'react'
import Container from 'react-bootstrap/Container'
import { Link } from 'react-router-dom'

const LandingPage = () => {
  return (
    <Container className='landing-container'>
      <section className='landing-content'>
        <div className='name'>
          <h1>FRANCES KNIGHT</h1>
        </div>
        <div className='tagline'>
          <h2>{`< from passionate neuroscientist to software engineer >`}</h2>
        </div>
      </section>

      <section className='landing-nav'>
        <ul className='list'>
          <li><Link to='/about' className='link' id='about'>ABOUT</Link></li>
          <li><Link to='/projects' className='link' id='projects'>PROJECTS</Link></li>
          <li><Link to='/academics' className='link' id='academics'>ACADEMICS</Link></li>
          <li><Link to='/contact' className='link' id='contact'>CONTACT</Link></li>
        </ul>
        {/* <Link to='/about' className='link' id='about'>ABOUT</Link>
        <Link to='/projects' className='link' id='projects'>PROJECTS</Link>
        <Link to='/academics' className='link' id='academics'>ACADEMICS</Link>
        <Link to='/contact' className='link' id='contact'>CONTACT</Link> */}
      </section>

    </Container>
  )
}

export default LandingPage