import React, { useEffect, useState } from 'react'
import Container from 'react-bootstrap/Container'
// import { Link } from 'react-router-dom'


// IMPORT PROJECTS ACCORDIAN
import AccordianProj4 from '../accordians/AccordianProj4'
// import AccordianProj3 from '../accordians/AccordianProj3'
// import AccordianProj2 from '../accordians/AccordianProj2'
// import AccordianProj1 from '../accordians/AccordianProj1'



const Projects = () => {

  const delay = ms => new Promise(
    resolve => setTimeout(resolve, ms)
  )
  // let update = document.querySelector('.content-outer')
  let [contentOuter, setCouterOuter] = useState(null)
  // const [errors, setErrors] = useState(false)


  useEffect(() => {
    const makeSlide = async () => {
      await delay(1000)

      const update = document.querySelector('.content-outer')
      setCouterOuter(update)

      console.log('contentOuter within await', update)
    }
    makeSlide()
    console.log('contentOuter', contentOuter)
  })



  const handleClick = e => {

    console.log('somethings been clicked', e.target)

    e.target.classList.add('moveLeft')

    contentOuter.classList.add('.moveLeft')

    // console.log('contentOuter', contentOuter)
    // console.log('contentOuter', contentOuter)


    // let contentOuter = document.querySelector('.content-outer').classList.add('leaveLeft')
    // const contentOuter = document.getElementsByClassName('content-inner').classList.add('enterRight')

    // contentOuter.classList.add('leaveLeft')

  }


  return (
    <>
      <Container id='projects-container'>
        <h1>All projects {'>>>'}</h1>
        <div className='proj-selectors img-left' id='proj4'>

          <div className='content-outer' onClick={handleClick}>
            <div className='proj-content proj-content-left'>
              <h2 className='title-rotate'>Women that Shred</h2>
              <p className='proj-text'>{`Solo project >>  1-week >>`}</p>
              <p className='proj-text'>{`Full-stack application presenting latest female snowboards, advice on selecting a snowboard & an authenticated community area for the buying & selling of 'preloved' boards >>`}</p>
            </div>
            <img className='proj-img' id='wts-img' src='../../assets/projects/p4-img1.png' alt='Women that Shred landing page' />
          </div>

          <div className='content-inner'>
            <AccordianProj4 className='accordian' />
            <div className='proj-detail '>
              <h2 className='title-rotate'>Women that Shred</h2>
              <p className='proj-text'>We'll put some project details in here </p>
            </div>

          </div>


          {/* <img src='arrow-right' alt='arrows' /> */}
          {/* <div className='expand'>
          <div className='expand-content'>
            <h2>Women that Shred</h2>
            <p>{`Solo project >>  1-week >>  Full-stack application presenting latest female snowboards, advice on selecting a snowboard & an authenticated community area for the buying & selling of ‘preloved’ boards >>  Django & REST-framework built an organised backend, querying an SQL database using postgreSQL >>  React.js, React-bootstrap & React-Slick to create appealing displays, with a focus on SASS animation to create a dynamic & engaging interface.`}</p>
          </div>
          <AccordianProj4 className='accordian' />
        </div> */}
        </div>

        <div className='proj-selectors img-right' id='proj3'>
          <img className='proj-img' id='nb-img' src='../../assets/projects/p3-img1.png' alt='national park page' />
          <div className='proj-content proj-content-right'>
            <h2 className='title-rotate'>Natural Beauty</h2>
            <p className='proj-text'>{`<< Group project (3ppl) << 1-week`}</p>
            <p className='proj-text'>{`<< Full-stack web application aimed at encouraging people to explore the natural beauty around the UK (incl. interactive map & carousels)`}</p>
          </div>
          {/* <img src='arrow-right' alt='arrows' /> */}
          {/* <div className='expand'>
          <div className='expand-content'>
            <h2>Natural Beauty</h2>
            <p>{`Group project (3 ppl) >> 1-week >>  Full-stack web application aimed at encouraging people to explore the natural beauty around the UK (incl. interactive map & carousels) >> Together, we created a RESTful API reviewing each National Park & Areas of Outstanding Natural Beauty. Within the team, my focus was on the structuring & presentation of information, incl. database management, key info pages, info carousels & styling (SASS).`}</p>
          </div>
          <AccordianProj3 className='accordian' />
        </div> */}
        </div>

        <div className='proj-selectors img-left' id='proj2'>

          <div className='proj-content proj-content-left'>
            <h2 className='title-rotate'>Fruity4You</h2>
            <p className='proj-text'>{`Group project >>  48hr hackathon >>`}</p>
            <p className='proj-text'>{`React app aimed at providing nutritional info on fruits, plus a make-a-fruit-salad user-input option >>`}</p>
          </div>
          <img className='proj-img' id='f4u-img' src='../../assets/projects/p2-img1.png' alt='Fruity4you landing page' />
          {/* <img src='arrow-right' alt='arrows' /> */}
          {/* <div className='expand'>
          <div className='expand-content'>
            <h2>Fruity4You</h2>
            <p>{'Group project (3 ppl) >> 48hr hackathon >> Build a React app aimed at providing nutritional info on fruits, plus a make-a-fruit-salad user-input option >> Public API (FruityVice) queried using Express.js to create a frontend website >> I built the fruit info page & designed & implemented the styling using SASS.'}</p>
          </div>
          <AccordianProj2 className='accordian' />
        </div> */}
        </div>

        <div className='proj-selectors img-right' id='proj1'>
          <img className='proj-img' id='fis-img' src='../../assets/projects/p1-img1.png' alt='Froggers in Space intro' />

          <div className='proj-content proj-content-right'>
            <h2 className='title-rotate'>Froggers in Space</h2>
            <p className='proj-text'>{`Solo project << 1-week`}</p>
            <p className='proj-text'>{`<< Grid-based game using HTML & vanilla JavaScript >> Frogger's lost in a space/time vortex, can you get her back to her friends?? Focus on game-play & stylistic elements to create an immersive, addictive & amusing environment that compliments the storyline.`}</p>
          </div>
          {/* <img src='arrow-right' alt='arrows' /> */}
          {/* <div className='expand'>
          <div className='expand-content'>
            <h2>Froggers in Space</h2>
            <p>{`Solo project >> 1-week >> Grid-based game using  HTML & vanilla JavaScript >> A version of Frogger focussing on game-play & stylistic elements >> Focus on timing & placement of obstacles to make for an addictive, challenging game >> A fairly simple set of CSS styles (e.g. box-shadows to create 'glow') & sound effects to create an immersive & amusing environment that compliments the storyline.`}</p>
          </div>
          <AccordianProj1 className='accordian' />
        </div> */}
        </div>

        <div className='proj-selectors img-left' id='uob'>

          <div className='proj-content proj-content-left'>
            <h2 className='title-rotate'>MOBERO UoB</h2>
            <p className='proj-text'>{`6-month supervision >>`}</p>
            <p className='proj-text'>{`Supporting a team of BSc Computer Science students to develop a novel mobile application >> aimed at assisting families of children with ADHD & poor sleep in establishing effective bedtime routines >>`}</p>
          </div>
          <img className='proj-img' id='mob-img' src='../../assets/projects/mobero.png' alt='mobero mobile interfaces' />
          {/* <img src='arrow-right' alt='arrows' /> */}
          {/* <div className='expand'>
          <div className='expand-content'>
            <h2>MOBERO UoB</h2>
            <h2>MORE CONTENT TO COME ON THIS ONE {'>>>'}</h2>
            <p>{`6-month supervision >> Supporting a team of BSc Computer Science students to develop a novel mobile application >> aimed at assisting families of children with ADHD & poor sleep in establishing effective bedtime routines; tracking improvements in sleep behaviours & ADHD symptoms in order to test efficacy >> Fortnightly development meetings; tracking iterative progress in app development; feedback on technical & data requirements; principles of design thinking.`}</p>
          </div>
          <img id='mobero-img' src='../../assets/projects/mobero.png' alt='mobero interface' />
        </div> */}
        </div>


      </Container>
      <div className='overlay' id='projects'></div>
    </>
  )

}

export default Projects