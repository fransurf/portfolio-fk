import React from 'react'
import Container from 'react-bootstrap/Container'
import Accordian from './AccordianWVW'

const Projects = () => {

  return (
    <Container id='projects-container'>
      <div className='proj-selectors' id='proj4'>
        <h2 className='title-rotate'>Women that Shred</h2>
        {/* <img src='arrow-right' alt='arrows' /> */}
        <div className='expand'>
          <div className='expand-content'>
            <h2>Women that Shred</h2>
            <p>{`Solo project >>  1-week >>  Full-stack application presenting latest female snowboards, advice on selecting a snowboard & an authenticated community area for the buying & selling of ‘preloved’ boards >>  Django & REST-framework built an organised backend, querying an SQL database using postgreSQL >>  React.js, React-bootstrap & React-Slick to create appealing displays, with a focus on SASS animation to create a dynamic & engaging interface.`}</p>
          </div>
          <Accordian className='accordian' />
        </div>
      </div>

      <div className='proj-selectors' id='proj3'>
        <h2 className='title-rotate'>Natural Beauty</h2>
        {/* <img src='arrow-right' alt='arrows' /> */}
        <div className='expand'>
          <h2>Natural Beauty</h2>
          <p>{`Group project (3 ppl) >> 1-week >>  Full-stack web application aimed at encouraging people to explore the natural beauty around the UK (incl. interactive map & carousels) >> Together, we created a RESTful API reviewing each National Park & Areas of Outstanding Natural Beauty. Within the team, my focus was on the structuring & presentation of information, incl. database management, key info pages, info carousels & styling (SASS).`}</p>
        </div>
      </div>

      <div className='proj-selectors' id='proj2'>
        <h2 className='title-rotate'>Fruity4You</h2>
        {/* <img src='arrow-right' alt='arrows' /> */}
        <div className='expand'>
          <h2>Fruity4You</h2>
          <p>{'Group project (3 ppl) >> 48hr hackathon >> Build a React app aimed at providing nutritional info on fruits, plus a make-a-fruit-salad user-input option >> Public API (FruityVice) queried using Express.js to create a frontend website >> I built the fruit info page & designed & implemented the styling using SASS.'}</p>
        </div>
      </div>

      <div className='proj-selectors' id='proj1'>
        <h2 className='title-rotate'>Froggers in Space</h2>
        {/* <img src='arrow-right' alt='arrows' /> */}
        <div className='expand'>
          <h2>Froggers in Space</h2>
          <p>{`Solo project >> 1-week >> Grid-based game using  HTML & vanilla JavaScript >> A version of Frogger focussing on game-play & stylistic elements >> Focus on timing & placement of obstacles to make for an addictive, challenging game >> A fairly simple set of CSS styles (e.g. box-shadows to create 'glow') & sound effects to create an immersive & amusing environment that compliments the storyline.`}</p>
        </div>
      </div>

      <div className='proj-selectors' id='uob'>
        <h2 className='title-rotate'>MOBERO UoB</h2>
        {/* <img src='arrow-right' alt='arrows' /> */}
        <div className='expand'>
          <h2>MOBERO UoB</h2>
          <p>{`6-month supervision >> Supporting a team of BSc Computer Science students to develop a novel mobile application >> aimed at assisting families of children with ADHD & poor sleep in establishing effective bedtime routines; tracking improvements in sleep behaviours & ADHD symptoms in order to test efficacy >> Fortnightly development meetings; tracking iterative progress in app development; feedback on technical & data requirements; principles of design thinking.`}</p>
        </div>
      </div>


    </Container>
  )
}

export default Projects