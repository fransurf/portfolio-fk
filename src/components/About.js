import React from 'react'
import Container from 'react-bootstrap/Container'
import { Link } from 'react-router-dom'


const About = () => {

  return (
    <>
      <Container id='about-container'>

        <div id='about-title'>
          <h1>About</h1>
        </div>
        <div className='about-content'>
          <div className='about-div expand' id='se'>
            <div className='about-top'>
              <div className='top-contents img-overlay' id='se-img'></div>
              {/* <img className='img-overlay' src='../assets/Excalidraw.png' alt='wireframe' id='se-img' /> */}
              <div className=' top-contents about-text'>
                <p>{`My particular fixation in software engineering is on producing well-structured content in beautiful & fun dynamic interfaces. Years of lecturing have taught me, it's not merely about the content itself but the way it is interacted with that engages an audience.`} <br></br> {`I take the same approach with my code: I don't believe the shortest code is the best. I aim to produce readable code that people can pick up & quickly manoeuvre around.`} <br></br> {`With coding, I am always learning. If there's a problem to solve, you can call me Poirot`}</p>
              </div>
            </div>
            <div className='about-bottom'>
              <h2 className='about-heading' id='se-text'>SOFTWARE ENGINEER</h2>
              <Link to='/projects' className='link about-link'>Take a look?</Link>
            </div>
          </div>

          <div className='about-div expand' id='neuro'>
            <div className='about-top'>
              <div className='img-overlay' id='neuro-img'></div>
              {/* <img className='img-overlay' src='../assets/Excalidraw.png' alt='wireframe' id='se-img' /> */}
              <div className='about-text'>
                <p>{`In my heart, I'm an uber geek. And my heart found neuroscience.`} <br></br> {`Understanding human behaviour in terms of the nuanced network of interactions in the brain (& body) fascinates me. And loved passing that passion onto my students, seeing their faces light up as they began to grasp these complex concepts was a joy. Teaching neuroscience has taught me a lot about the importance of engaging a person's interest & breaking down information in order to maximise attention & learning.`}</p>
              </div>
            </div>
            <div className='about-bottom'>
              <h2 className='about-heading' id='neuro-text'>NEUROSCIENTIST</h2>
              <Link to='/academics' className='link about-link'>It's all academic</Link>
            </div>
          </div>

          <div className='about-div expand' id='snowboarder'>
            <div className='about-top'>
              <div className='img-overlay' id='snowboarder-img'></div>
              {/* <img className='img-overlay' src='../assets/Excalidraw.png' alt='wireframe' id='se-img' /> */}
              <div className='about-text'>
              <p>{`My happiest place is on the mountains or the waves. I am a dedicated snowboarder & recently took a 6-month career break to transfer those skills onto the waves in the surf mecca that is Sri Lanka. I find the experience of being at the mercy of mother nature both exhilarating & humbling. Outside of the extreme, I love camping (the boot of my car is like an extension of Mountain Warehouse), running, yoga, dinners with good friends & a good series.`}</p>
              </div>
            </div>
            <div className='about-bottom'>
              <h2 className='about-heading' id='snowboarder-text'>SNOWBOARDER</h2>
              <Link to='/indulge' className='link about-link'>Shall we indulge?</Link>
            </div>
          </div>
        </div>


      </Container>
      <div className='overlay' id='about'></div>
      <div className='overlay2'></div>
    </>
  )
}

export default About


