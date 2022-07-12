import React from 'react'
import Container from 'react-bootstrap/Container'
import { Link } from 'react-router-dom'


const About = () => {

  return (
    <>
      <Container id='about-container'>

        <div id='about-left'>
          <h1>About</h1>
        </div>
        <div id='about-right' >
          <div className='about-div expand' id='se'>
            <h2 className='short-text' id='se-text'>SOFTWARE ENGINEER</h2>
            <h2 className='long-text long-text-title' id='se-text'>SOFTWARE ENGINEER</h2>
            <div className='long-text long-text-box' id='se-box' >
              <img src='../assets/Excalidraw.png' alt='wireframe' id='se-img' />
              <div id='se-desc'>
                <p><b>Here will be all my lovely text about becoming a software engineer....</b>Vestibulum bibendum egestas laoreet. Sed eu sem vitae mauris venenatis finibus ornare in erat. Integer id ex imperdiet, rhoncus nunc et, imperdiet ligula. Morbi scelerisque nunc mauris. Sed ornare varius ex, ut suscipit odio ultricies vitae. Nunc volutpat elit ut risus volutpat, eget maximus nunc maximus. Pellentesque placerat nulla quis justo dapibus, eleifend suscipit mi lobortis. Vivamus tincidunt vel arcu ac dictum. </p>
                <Link to='/projects' className='link'>Want to take a look?</Link>
              </div>
            </div>
          </div>

          <div className='about-div expand' id='neuro'>
            <h2 className='short-text' id='neuro-text'>NEUROSCIENTIST</h2>
            <h2 className='long-text long-text-title' id='neuro-text'>NEUROSCIENTIST</h2>
            <div className='long-text long-text-box' id='neuro-box'>
              <img src='../assets/brain2.jpg' alt='real human brain' className='brain-img' id='brain-img1' />
              <img src='../assets/brain1.jpg' alt='real human brain' className='brain-img' id='brain-img2' />
              <div id='neuro-desc'>
                <p><b>Here will be all my lovely text about my past as a neuroscientist....</b> Vestibulum bibendum egestas laoreet. Sed eu sem vitae mauris venenatis finibus ornare in erat. Integer id ex imperdiet, rhoncus nunc et, imperdiet ligula. Morbi scelerisque nunc mauris. Sed ornare varius ex, ut suscipit odio ultricies vitae. Nunc volutpat elit ut risus volutpat, eget maximus nunc maximus. Pellentesque placerat nulla quis justo dapibus, eleifend suscipit mi lobortis. Vivamus tincidunt vel arcu ac dictum.</p>
                <Link to='/academics' className='link'>It's all academic</Link>
              </div>
            </div>
          </div>

          <div className='about-div expand' id='snowboarder'>
            <h2 className='short-text' id='snowboarder-text'>SNOWBOARDER</h2>
            <h2 className='long-text long-text-title' id='snowboarder-text'>SNOWBOARDER</h2>
            <div className='long-text long-text-box' id='snowboarder-box'>
              <img src='../assets/boardingCloseup.png' alt='snowboarder' id='snowboarder-img' />
              <div id='snowboarder-desc'>
                <p>{`My happiest place is on the mountains or the waves. I am a dedicated snowboarder & recently took a 6-month career break to transfer those skills onto the waves in the surf mecca that is Sri Lanka. I find the experience of being at the mercy of mother nature both exhilarating & humbling. Outside of the extreme, I love camping (the boot of my car is like an extension of Mountain Warehouse), running, yoga, dinners with good friends & a good series.`}</p>
                <Link to='/indulge' className='link'>Shall we indulge?</Link>
              </div>
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


