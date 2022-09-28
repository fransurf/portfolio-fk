import React, { useState, useEffect } from 'react'
import Container from 'react-bootstrap/Container'

import Loading from '../helpers/Loading.js'


const About = () => {

  // SETTING STATE FOR LOADING ICON
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => setLoading(false), 500)
  }, [])

  return (
    <>
      {loading === false ? (
        <Container className='content-container' id='about-container'>

          {/* TITLE */}
          <h1 className='page-title' id='about-title'>About me<span>.</span> </h1>

          {/* CONTENT IN 3 DIVS WITH IMAGE OVERLAY REVEALING TEXT ON HOVER */}
          <div className='about-content'>
            <div className='about-div' id='se'>
              <h2 className='about-heading' id='se-text'><span>.</span>sofware engineer</h2>
              <div className='about-top'>
                <div className='top-contents img-overlay' id='se-img'></div>
                <div className=' top-contents about-text'>
                  <p>{`My particular fixation in software engineering is on producing well-structured content in beautiful & fun, dynamic interfaces.`} <br></br><br></br> {`I take the same approach with my code: I don't believe the shortest code is the best. I aim to produce readable code that anybody can quickly manoeuvre.`} <br></br><br></br> {`As a software engineer, I am always learning. If there's a problem to solve, you can call me Poirot. Take a look at the banner below for my current languages/frameworks`}</p>
                </div>
              </div>
              {/* <Link to='/projects' className='about-link'>Projects</Link> */}
            </div>

            <div className='about-div' id='neuro'>
              <h2 className='about-heading' id='neuro-text'><span>.</span>neuroscientist</h2>
              <div className='about-top'>
                <div className='img-overlay' id='neuro-img'></div>
                <div className='about-text'>
                  <p>{`In my heart, I'm an uber geek. And early on, my heart found neuroscience.`} <br></br><br></br> {`Understanding human behaviour in terms of the network of interactions in the brain fascinates me. And I love passing that passion on.`} <br></br><br></br> {`Teaching neuroscience has taught me a lot about the importance of engaging a person's interest & breaking down information in order to maximise attention & learning.`}</p>
                </div>
              </div>
              {/* <Link to='/academics' className='about-link'>Academics</Link> */}
            </div>

            <div className='about-div' id='snowboarder'>
              <h2 className='about-heading' id='snowboarder-text'><span>.</span>snowboarder</h2>
              <div className='about-top'>

                <div className='img-overlay' id='snowboarder-img'></div>
                <div className='about-text'>
                  <p>{`My happiest place is on the mountains or the waves. I am a dedicated snowboarder & recently took a 6-month career break to transfer those skills onto the waves in Sri Lanka. I find the experience of being at the mercy of mother nature both exhilarating & humbling.`} <br></br><br></br> {` Outside the extreme, I love camping (the boot of my car is like an extension of Mountain Warehouse), running, yoga, dinner with friends, pub quizzes & a good series.`}</p>
                </div>
              </div>
              {/* <Link to='/indulge' className='about-link'>Shall we indulge?</Link> */}
            </div>
          </div>

          {/* SCROLL BAR - PRESENTING TECH SKILLS */}
          <div className='scroll-bar' id='about-scroll'>
            <div className='scroll-content'> HTML5 <span>|</span> CSS <span>|</span> JavaScript <span>|</span> Sass <span>|</span> Bootstrap <span>|</span> React <span>|</span> Python <span>|</span> Django <span>|</span> PostgreSQL <span>|</span> Node.js <span>|</span> Axios <span>|</span> Express.js <span>|</span> Insomnia <span>|</span> Yarn <span>|</span> npm <span>|</span> HTML5 <span>|</span> CSS <span>|</span> JavaScript <span>|</span> Sass <span>|</span> Bootstrap <span>|</span> React <span>|</span> Python <span>|</span> Django <span>|</span> PostgreSQL <span>|</span> Node.js <span>|</span> Axios <span>|</span> Express.js <span>|</span> Insomnia <span>|</span> Yarn <span>|</span> npm <span>|</span></div>
          </div>


        </Container>

      ) : (

        <Loading />

      )}

      <div className='overlay' id='about'></div>
      {/* <div className='overlay2'></div> */}
    </>
  )
}

export default About


