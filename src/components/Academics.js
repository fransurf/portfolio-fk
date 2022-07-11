import React from 'react'
import Container from 'react-bootstrap/Container'

const Academics = () => {

  return (
    <Container id='academics-container'>
      <div id='academics-left' >
        <div className='academic-div expand' id='career'>
          <h2 className='short-text' id='se-text'>ACADEMIC CAREER</h2>
          <h2 className='long-text' id='se-text'>ACADEMIC CAREER</h2>
          <div className='long-text long-text-box academics' id='career'>
            <div className='long-text-inner'>
              <p>{`"Before making a transition into software engineering, I started my career as a psychology lecturer, specialising in neuroscience. As a neuroscience lecturer, I enjoyed the challenge of presenting complex concepts in accessible, engaging & humorous ways. Across my research career, I have been drawn to understanding how different technologies can be used to support the diagnosis & intervention of developmental disorders. It was collaborating on the development of these technologies that sparked my interest in the world of software development."`}</p>
              <h2>Education</h2>
              <ul>
                <li>AURORA Women in Leadership | Leadership Foundation for Higher Education | 2019-2020</li>
                <li>Fellowship in Higher Education | Higher Education Academy | 2016-2017</li>
                <li>Ph.D Developmental Neuroscience, Psychology | Goldsmiths, UoL | 2010-2013</li>
                <li>MSc Cognitive {'&'} Clinical Neuroscience (Distinction) | Goldsmiths, UoL | 2009-2010</li>
                <li>BSc Experimental Psychology (2:1) | University of Reading | 2004-2007</li>
              </ul>
              <h2>Special awards {'&'} commendations</h2>
              <ul >
                <li>{`Award: Most Visually Pleasing Lectures | Student awards | Education & Psychology Society, UoB | 2019-2020`}</li>
                <li>Keynote panelist: SEEL Debate for Educational Psychologists: Is an ADHD diagnosis helpful or harmful? | UCL | 2019</li>
                <li>Award: Best Second Year Unit | Student awards | Education {'&'} Psychology Society, UoB | 2018-2019</li>
                <li>Nominated: Inspirational teaching  | Student Choice award | UCL | 2017-2018</li>
              </ul>
            </div>
          </div>
        </div>

        <div className='academic-div expand' id='publications'>
          <h2 className='short-text' id='pubs-text'>PUBLICATIONS</h2>
          <h2 className='long-text' id='pubs-text'>PUBLICATIONS</h2>
          <div className='long-text long-text-box academics' id='publications'>
            <div className='long-text-inner'>
              <p>As I specialised, my academic research consisted of two overlapping avenues; ADHD and sleep. My focus was always on understanding the current challenges faced for young people with both ADHD and poor sleep, in order to develop interventions to better support these issues</p>
              <h2>Publications of note</h2>
              <div id='pulication-divs'>
                <div className='pubs' id='myrto'><a href='https://psycnet.apa.org/record/2021-60005-001' alt='link to paper'> </a></div>
                <div className='pubs' id='braincando'><a href='https://www.taylorfrancis.com/chapters/edit/10.4324/9780429197741-8/sleepy-teens-classroom-frances-le-cornu-knight' alt='link to paper'> </a></div>
                <div className='pubs' id='adhd-sleep'><a href='https://www.tandfonline.com/doi/abs/10.1080/15402002.2017.1395335?journalCode=hbsm20' alt='link to paper'> </a></div>
                <div className='pubs' id='adol-sleep'><a href='https://www.ncbi.nlm.nih.gov/pmc/articles/PMC4664801/' alt='link to paper'> </a></div>
              </div>
            </div>

          </div>
        </div>

        <div className='academic-div expand' id='snowboarder'>
          <h2 className='short-text' id='pubeng-text'>PUBLIC ENGAGEMENT</h2>
          <h2 className='long-text' id='pubeng-text'>PUBLIC ENGAGEMENT</h2>
          <div className='long-text long-text-box academics' id='public-engagement'>
            <p>Here's a description to my approach to public engagement</p>
            <ul>
              <li>list item</li>
              <li>list item</li>
              <li>list item</li>
              <li>list item</li>
              <li>list item</li>
            </ul>
          </div>
        </div>

      </div>

      <div id='academics-right'>
        <h1>Academics</h1>
      </div>

    </Container>
  )
}

export default Academics