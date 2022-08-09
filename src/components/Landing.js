import React from 'react'
import Container from 'react-bootstrap/Container'
import { Link } from 'react-router-dom'

const LandingPage = () => {
  return (
    <>

      <Container className='landing-container'>
        <section className='landing-content'>
          <div className='name'>
            <h1 className='landing-title'>Frances Knight<span>.</span></h1>
          </div>
          <div className='tagline'>
            <h2 className='landing-subtitle typewriter' id='type1'><span>{`{`}</span> from passionate neuroscientist to </h2>
            <h2 className='landing-subtitle typewriter' id='type2'>junior software engineer <span>{`}`}</span></h2>
          </div>
        </section>

        <section className='landing-nav'>
          <ul className='list'>
            <li><Link to='/about' className='link' id='about'>ABOUT</Link></li>
            <li><Link to='/projects' className='link' id='projects'>PROJECTS</Link></li>
            <li><Link to='/academics' className='link' id='academics'>ACADEMICS</Link></li>
            <li><Link to='/contact' className='link' id='contact'>CONTACT</Link></li>
          </ul>

        </section>

        {/* SCROLL BAR */}
        {/* <div className='scroll-bar'><span className='scroll-content'>this website is a work in progress - I hope you've enjoyed it - </span></div> */}


      </Container>
      {/* <div className='scroll-bar'>
        <div className='scroll-content' id='landing-scroll'> HTML5 <span>|</span> CSS <span>|</span> JavaScript <span>|</span> Sass <span>|</span> Bootstrap <span>|</span> React <span>|</span> Python <span>|</span> Django <span>|</span> PostgreSQL <span>|</span> Node.js <span>|</span> Axios <span>|</span> Express.js <span>|</span> Insomnia <span>|</span> Yarn <span>|</span> npm <span>|</span> HTML5 <span>|</span> CSS <span>|</span> JavaScript <span>|</span> Sass <span>|</span> Bootstrap <span>|</span> React <span>|</span> Python <span>|</span> Django <span>|</span> PostgreSQL <span>|</span> Node.js <span>|</span> Axios <span>|</span> Express.js <span>|</span> Insomnia <span>|</span> Yarn <span>|</span> npm <span>|</span></div>
      </div> */}
    </>

  )
}

export default LandingPage