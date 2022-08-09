import React from 'react'
import Container from 'react-bootstrap/Container'
import { Link } from 'react-router-dom'

const LandingPage = () => {
  return (
    <Container className='landing-container'>
      {/* LANDING PAGE CONTENT */}
      <section className='landing-content'>
        <div className='name'>
          <h1 className='landing-title'>Frances Knight<span>.</span></h1>
        </div>
        <div className='tagline'>
          <h2 className='landing-subtitle typewriter' id='type1'><span>{`{`}</span> from passionate neuroscientist to </h2>
          <h2 className='landing-subtitle typewriter' id='type2'>junior software engineer <span>{`}`}</span></h2>
        </div>
      </section>

      {/* MENU BAR WITH FUN COLOUR TRANSITIONS */}
      <section className='landing-nav'>
        <ul className='list'>
          <li><Link to='/about' className='link' id='about'>ABOUT</Link></li>
          <li><Link to='/projects' className='link' id='projects'>PROJECTS</Link></li>
          <li><Link to='/academics' className='link' id='academics'>ACADEMICS</Link></li>
          <li><Link to='/contact' className='link' id='contact'>CONTACT</Link></li>
        </ul>

      </section>

      {/* POTENTIAL TO ADD SCROLLING MESSAGE ACROSS SCREEN */}
      {/* <div className='scroll-bar'>
        <div className='scroll-content' id='landing-scroll'> - this website is a work in progress - it's not perfect - it's designed to showcase some of the things I enjoy doing - I hope you enjoy it too - </div>
      </div> */}

    </Container>





  )
}

export default LandingPage