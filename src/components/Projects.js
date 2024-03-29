import React from 'react'
import Container from 'react-bootstrap/Container'
// import { Link } from 'react-router-dom'

import Skills from '../helpers/Skills'


// PROJECT PICTURES
import Proj4img from '../styles/assets/projects/p4-img1.png' 
import Proj3img from '../styles/assets/projects/p3-img1.png' 
import Proj2img from '../styles/assets/projects/p2-img1.png' 
import Proj1img from '../styles/assets/projects/p1-img1.png' 
import Proj1img2 from '../styles/assets/projects/p1-img2.png' 
import MOBEROimg from '../styles/assets/projects/mobero.png' 

const Projects = () => {

  // * FOR CREATING A MOVEMENT TRANSITION BY APPLYING CLASS
  // Current code in Projects copy.js
  // * COMING SOON


  return (
    <>
      <Container className='content-container' id='projects-container'>
        <h1 className='page-title'><span>{`{`}</span> My projects <span>{`}`}</span></h1>
        <Skills />

        {/* SECTIONS FOR EACH PROJECT */}
        <div className='proj-selectors img-left' id='proj4'>

          {/* WOMEN THAT SHRED */}
          <div className='content-outer' >
            <div className='proj-content proj-content-left'>
              <a className='proj-text' target='blank' href="https://women-that-shred.herokuapp.com/" ><h2 className='title-rotate'>Women that Shred</h2></a>
              <p className='proj-text'>{`Solo project >>  1-week >>`}</p>
              <p className='proj-text'>{`Full-stack application presenting female snowboards, advice on board selection & an authenticated community area for the buying & selling of 'preloved' boards >>`}</p>
              <p className='proj-text proj-tech'>{`Django | REST-framework | PostgreSQL | SASS | TablePlus | React.js | React-Slick (Carousel) >>>`}</p>
              
            </div>
            <img className='proj-img' id='wts-img' src={Proj4img} alt='Women that Shred landing page' />
          </div>
        </div>

        {/* <Skills /> */}

        {/* NATURAL BEAUTY */}
        <div className='proj-selectors img-right' id='proj3'>
          <div className='content-outer'>
            <img className='proj-img' id='nb-img' src={Proj3img} alt='national park page' />
            <div className='proj-content proj-content-right'>
              <a className='proj-text' target='blank' href="https://github.com/fransurf/SEI-PROJECT-4-WF/blob/main/README.md" ><h2 className='title-rotate'>Natural Beauty</h2></a> 
              <p className='proj-text'>{`<< Group project (3ppl) << 1-week`}</p>
              <p className='proj-text'>{`<< Full-stack web application aimed at encouraging people to explore the natural beauty around the UK (incl. interactive map & carousels)`}</p>
              <p className='proj-text proj-tech'>{`<< Node.js | MongoDB | Express | B-crypt | React.js | React-bootstrap | React-Slick | SASS`}</p>
              
            </div>
          </div>
        </div>

        {/* <Skills /> */}

        {/* FRUITY-4-YOU */}
        <div className='proj-selectors img-left' id='proj2'>
          <div className='content-outer' >
            <div className='proj-content proj-content-left'>
              <a className='proj-text' target='blank' href="https://fruity4you.netlify.app/" ><h2 className='title-rotate'>Fruity4You</h2></a>
              <p className='proj-text'>{`Group project >>  48hr hackathon >>`}</p>
              <p className='proj-text'>{`React app aimed at providing nutritional info on fruits, plus a make-a-fruit-salad user-input option >>`}</p>
              <p className='proj-text proj-tech'>{`Node.js | Express | JavaScript | React.js | React Hooks | SASS >>`}</p>

            </div>
            
            <img className='proj-img' id='f4u-img' src={Proj2img} alt='Fruity4you landing page' />
          </div>
        </div>

        {/* <Skills /> */}

        {/* FROGGERS IN SPACE */}
        <div className='proj-selectors img-right' id='proj1'>
          <div className='content-outer' >
            {/* <img className='proj-img img-portrait' id='fis-img' src={Proj1img} alt='Froggers in Space intro' /> */}
            <img className='proj-img img-landscape' id='fis-img' src={Proj1img2} alt='Froggers in Space intro' />

            <div className='proj-content proj-content-right'>
              <a className='proj-text' target='blank' href="https://fransurf.github.io/SEI-Project-ONE/" ><h2 className='title-rotate'>Froggers in Space</h2></a>
              <p className='proj-text'>{`Solo project << 1-week`}</p>
              <p className='proj-text'>{`<< Grid-based game using HTML & vanilla JavaScript >> Frogger's lost in a space/time vortex, can you get her back to her friends?? Focus on game-play & stylistic elements to create an immersive, addictive & amusing environment that compliments the storyline.`}</p>
              <p className='proj-text proj-tech'>{`<< JavaScript | HTML | CSS`}</p>
              
            </div>
          </div>
        </div>

        {/* <Skills /> */}

        {/* MOBERO SLEEP APP */}
        <div className='proj-selectors img-left' id='uob'>
          <div className='content-outer' >
            <div className='proj-content proj-content-left'>
              <a className='proj-text' target='blank' href="http://joergmueller.info/pdf/CHI16SonneMobero.pdf" ><h2 className='title-rotate'>MOBERO UoB</h2></a>
              <p className='proj-text'>{`6-month supervision >>`}</p>
              <p className='proj-text'>{`Supporting a team of BSc Computer Science students to develop a novel mobile application >> aimed at assisting families of children with ADHD & poor sleep in establishing effective bedtime routines >>`}</p>

            </div>
            <img className='proj-img' id='mob-img' src={MOBEROimg} alt='mobero mobile interfaces' />
          </div>
        </div>


      </Container>
      <div className='overlay' id='projects'></div>
    </>
  )

}

export default Projects