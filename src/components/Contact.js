import React from 'react'

import Container from 'react-bootstrap/Container'
import { Link } from 'react-router-dom'


const Contact = () => {

  return (
    <>
      <Container className='landing-container'>
        {/* MAIN CONTENT ON CONTACT PAGE */}
        <section className='landing-content' id='contact-content'>
          <div className='name'>
            <h1 className='landing-title' id='contact-title'>Frances Knight<span>.</span></h1>
          </div>
          <h2 className='landing-subtitle typewriter' id='contact-subtitle' ><span>{`{`}</span> You can contact me on ... <span>{`}`}</span></h2>
          <ul id='contacts-list' >
            <a href='https://www.linkedin.com/in/frances-knight-757691b8/' className='contact-link' alt='link to LinkedIn profile' target='blank'>LinkedIn</a>
            <a href='https://github.com/fransurf/' className='contact-link' alt='link to GitHub profile' target='blank'>GitHub</a>
            <a href="mailto:flcknight@gmail.com" className='contact-link' alt='link to email' target='blank'>flcknight@gmail.com</a>
          </ul>
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

        {/* SCROLL BAR */}
        <div className='scroll-bar' id='contact-scroll'>
          <div className='scroll-content'> <span>|</span> HTML5 <span>|</span> CSS <span>|</span> JavaScript <span>|</span> Sass <span>|</span> Bootstrap <span>|</span> React <span>|</span> Python <span>|</span> Django <span>|</span> PostgreSQL <span>|</span> Node.js <span>|</span> Axios <span>|</span> Express.js <span>|</span> Insomnia <span>|</span> Yarn <span>|</span> npm <span>|</span> HTML5 <span>|</span> CSS <span>|</span> JavaScript <span>|</span> Sass <span>|</span> Bootstrap <span>|</span> React <span>|</span> Python <span>|</span> Django <span>|</span> PostgreSQL <span>|</span> Node.js <span>|</span> Axios <span>|</span> Express.js <span>|</span> Insomnia <span>|</span> Yarn <span>|</span> npm <span>|</span></div>
        </div>

        {/* FOR PAGE TRANSITION - SLIDES NAVY OVERLAY ACROSS */}
        <div className='overlay' id='contact'></div>
      </Container>


    </>
  )
}

export default Contact