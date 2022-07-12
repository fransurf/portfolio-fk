import React from 'react'

import Container from 'react-bootstrap/Container'
import { Link } from 'react-router-dom'


const Contact = () => {

  return (
    <>
      <Container className='landing-container'>
        <section className='landing-content' id='contact-content'>
          <h1>FRANCES KNIGHT</h1>
          <h2>{`< from passionate neuroscientist to software engineer >`}</h2>
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