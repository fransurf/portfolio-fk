import React from 'react'
import Container from 'react-bootstrap/Container'
import { Link } from 'react-router-dom'


const About = () => {

  return (
    <>
      <Container id='about-container'>

        {/* <div id='about-title'>
          <h2>About</h2>
        </div> */}
        <div className='about-content'>
          <div className='about-div expand' id='se'>

            <div className='about-top'>
              <div className='top-contents img-overlay' id='se-img'>
                <h2 className='about-heading' id='se-text'>SOFTWARE ENGINEER</h2>
              </div>
              <div className=' top-contents about-text'>
                <p>{`My particular fixation in software engineering is on producing well-structured content in beautiful & fun, dynamic interfaces.`} <br></br><br></br> {`I take the same approach with my code: I don't believe the shortest code is the best. I aim to produce readable code that any body can quickly manoeuvre.`} <br></br><br></br> {`As a software engineer, I am always learning. If there's a problem to solve, you can call me Poirot`}</p>
              </div>
            </div>
            <Link to='/projects' className='about-link'>Projects</Link>
          </div>

          <div className='about-div expand' id='neuro'>
            <div className='about-top'>
              <div className='img-overlay' id='neuro-img'>
                <h2 className='about-heading' id='neuro-text'>NEUROSCIENTIST</h2>
              </div>
              <div className='about-text'>
                <p>{`In my heart, I'm an uber geek. And my heart found neuroscience.`} <br></br><br></br> {`Understanding human behaviour in terms of the network of interactions in the brain fascinates me. And I love passing that passion on.`} <br></br><br></br> {`Teaching neuroscience has taught me a lot about the importance of engaging a person's interest & breaking down information in order to maximise attention & learning.`}</p>
              </div>
            </div>
            <Link to='/academics' className='about-link'>Academics</Link>
          </div>

          <div className='about-div expand' id='snowboarder'>

            <div className='about-top'>

              <div className='img-overlay' id='snowboarder-img'>
                <h2 className='about-heading' id='snowboarder-text'>SNOWBOARDER</h2>
              </div>
              <div className='about-text'>
                <p>{`My happiest place is on the mountains or the waves. I am a dedicated snowboarder & recently took a 6-month career break to transfer those skills onto the waves in Sri Lanka. I find the experience of being at the mercy of mother nature both exhilarating & humbling.`} <br></br><br></br> {` Outside of the extreme, I love camping (the boot of my car is like an extension of Mountain Warehouse), running, yoga, dinners with good friends & a good series.`}</p>
              </div>
            </div>
            <Link to='/indulge' className='about-link'>Shall we indulge?</Link>
          </div>
        </div>


      </Container>
      <div className='overlay' id='about'></div>
      <div className='overlay2'></div>
    </>
  )
}

export default About


