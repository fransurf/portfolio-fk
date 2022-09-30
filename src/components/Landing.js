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

      {/* FUN COLOUR TRANSITIONS DOTS */}
      <section className='landing-nav'>
        <ul className='list'>
          <li><div className='dot' id='aqua'></div></li>
          <li><div className='dot' id='pink'></div></li>
          <li><div className='dot' id='navy'></div></li>
          <li><div className='dot' id='blue'></div></li>
        </ul>
      </section>

      {/* POTENTIAL TO ADD SCROLLING MESSAGE ACROSS SCREEN */}
      {/* <div className='scroll-bar'>
        <div className='scroll-content' id='landing-scroll'> - this website is a work in progress - it's not perfect - it's designed to showcase some of the things I enjoy doing - I hope you enjoy it too - </div>
      </div> */}

      <div id='mobile-message'>
        <h1 className='landing-title'>Frances Knight<span>.</span></h1>
        <div className='tagline'>
          <h2 className='landing-subtitle typewriter mobile' id='type1'><span>{`{`}</span> My mobile site is under construction... </h2>
          <h2 className='landing-subtitle typewriter mobile' id='type2'> enjoy me on a desktop for now <span>{`}`}</span></h2>
        </div>
      </div>
    </Container>





  )
}

export default LandingPage