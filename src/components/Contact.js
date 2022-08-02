import React from 'react'

import Container from 'react-bootstrap/Container'
import { Link } from 'react-router-dom'


const Contact = () => {

  return (
    <>
      <Container className='landing-container'>
        <section className='landing-content' id='contact-content'>
          <h1>FRANCES KNIGHT</h1>
          <h2>{`<< Find me at >>`}</h2>
          <ul>
            <a href='https://www.linkedin.com/in/frances-knight-757691b8/' className='contact-link' alt='link to LinkedIn profile' target='blank'>LinkedIn</a>
            <a href='https://github.com/fransurf/' className='contact-link' alt='link to GitHub profile' target='blank'>GitHub</a>
          </ul>
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
      <div className='overlay' id='contact'></div>
    </>
  )
}

export default Contact