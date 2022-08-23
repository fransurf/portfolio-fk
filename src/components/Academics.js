import React, { useState } from 'react'
import Container from 'react-bootstrap/Container'

const Academics = (props) => {

  const [selected, setSelected] = useState(0)

  return (
    <>
      <Container className='content-container' id='academics-container'>
        <div id='academic-title'>
          <h1 className='page-title'>It's all academic<span>.</span></h1>
          <div id='emoji'></div>
        </div>

        <div id='academics' >
          {/* ACADEMIC CAREER */}
          <div className='academic-div expand' id='career'>
            <h2 className='academic-subtitle' id='se-text'>Academic career</h2>
            <div className='long-text long-text-box academics' id='career'>
              <div className='long-text-inner'>
                {/* TOGGLE BAR */}
                <div className='toggle'>
                  <h3 onClick={() => setSelected(0)}> <span>{`<<`}</span> About my career <span>{`>>`}</span></h3>
                  <h3 onClick={() => setSelected(1)}> <span>{`<<`}</span> Qualifications <span>{`>>`}</span></h3>
                </div>

                {/* ABOUT CAREER */}
                {(selected === 0) && <div id="nav-career">
                  <p className='description '>{`"Before making the transition into software engineering, I started my career as a psychology lecturer, specialising in neuroscience.`}<br></br><br></br>{`I enjoyed the challenge of presenting complex concepts in accessible, engaging & humorous ways.`}<br></br><br></br>{`Across my research career, I have been drawn to understanding how different technologies can be used to support the diagnosis & intervention of developmental disorders. It was collaborating on the development of these technologies that sparked my interest in the world of software development."`}</p>
                </div>}

                {/* QUALIFICATIONS */}
                {(selected === 1) && <div className='quals' id="nav2-career">
                  <h3 className='acad-heading'>Education</h3>
                  <ul>
                    <li className='description-li'>AURORA Women in Leadership | Leadership Foundation for Higher Education | 2019-2020</li>
                    <li className='description-li'>Fellowship in Higher Education | Higher Education Academy | 2016-2017</li>
                    <li className='description-li'>Ph.D Developmental Neuroscience, Psychology | Goldsmiths, UoL | 2010-2013</li>
                    <li className='description-li'>MSc Cognitive {'&'} Clinical Neuroscience (Distinction) | Goldsmiths, UoL | 2009-2010</li>
                    <li className='description-li'>BSc Experimental Psychology (2:1) | University of Reading | 2004-2007</li>
                  </ul>
                  <h3 className='acad-heading'> Special awards {'&'} commendations</h3>
                  <ul >
                    <li className='description-li'>{`Award: Most Visually Pleasing Lectures | Student awards | Education & Psychology Society, UoB | 2019-2020`}</li>
                    <li className='description-li'>Keynote panelist: SEEL Debate for Educational Psychologists: Is an ADHD diagnosis helpful or harmful? | UCL | 2019</li>
                    <li className='description-li'>Award: Best Second Year Unit | Student awards | Education {'&'} Psychology Society, UoB | 2018-2019</li>
                    <li className='description-li'>Nominated: Inspirational teaching  | Student Choice award | UCL | 2017-2018</li>
                  </ul>
                </div>}

              </div>
            </div>
          </div>

          {/* RESEARCH */}
          <div className='academic-div expand' id='publications'>
            <h2 className='academic-subtitle' id='pubs-text'>Research</h2>
            <div className='long-text long-text-box academics' id='research'>

              <div className='long-text-inner'>
                {/* TOGGLE BAR */}
                <div className='toggle'>
                  <h3 onClick={() => setSelected(0)}> <span>{`<<`}</span> About my research <span>{`>>`}</span></h3>
                  <h3 onClick={() => setSelected(1)}> <span>{`<<`}</span> Publications of note <span>{`>>`}</span></h3>
                </div>

                {/* ABOUT MY RESEARCH */}
                {(selected === 0) && <div id="nav-research">
                  <p className='description'>{`"As I specialised, my academic research consisted of two overlapping avenues; ADHD and sleep.`}<br></br><br></br>{`My focus was always on understanding the current challenges faced for young people with both ADHD and poor sleep, in order to develop interventions to better support them"`}</p>
                </div>}

                {/* PUBLICATIONS */}
                {(selected === 1) && <div className='quals' id="nav2-pubs">
                  <div id='publication-divs'>
                    <a href='https://psycnet.apa.org/record/2021-60005-001' alt='link to paper' className='pubs-link' target='blank'><div className='pubs' id='myrto' ></div></a>
                    <a href='https://www.taylorfrancis.com/chapters/edit/10.4324/9780429197741-8/sleepy-teens-classroom-frances-le-cornu-knight' alt='link to paper' className='pubs-link' target='blank'><div className='pubs' id='braincando'></div></a>
                    <a href='https://www.tandfonline.com/doi/abs/10.1080/15402002.2017.1395335?journalCode=hbsm20' alt='link to paper' className='pubs-link' target='blank'><div className='pubs' id='adhd-sleep'></div></a>
                    <a href='https://www.ncbi.nlm.nih.gov/pmc/articles/PMC4664801/' alt='link to paper' className='pubs-link' target='blank'><div className='pubs' id='adol-sleep'></div></a>
                  </div>
                </div>}

              </div>
            </div>
          </div>

          {/* PUBLIC ENGAGEMENT */}
          <div className='academic-div expand' id='snowboarder'>
            <h2 className='academic-subtitle' id='pubeng-text'>Public engagement</h2>
            <div className='long-text long-text-box academics' id='pub-eng'>

              <div className='long-text-inner' >
                {/* TOGGLE BAR */}
                <div className='toggle'>
                  <h3 onClick={() => setSelected(0)}><span>{`<<`}</span> About my research <span>{`>>`}</span></h3>
                  <h3 onClick={() => setSelected(1)}><span>{`<<`}</span> Publications of note <span>{`>>`}</span></h3>
                </div>

                {/* ABOUT MY TALKS */}
                {(selected === 0) && <div id="nav-research">
                  <p className='description'>{`"Given my field of research, I felt the importance of public engagement; presenting current findings to the people that it affects promoting understanding and open discussion.`}<br></br><br></br>{`In addition to academic presentations, I regularly gave talks at ADHD & development support groups, as well as to pupils, parents & teachers at schools"`}</p>
                </div>}

                {/* RECENT TALKS */}
                {(selected === 1) && <div className='quals' id="nav2-pubs">
                <ul>
                    <li className='description-li' id='li-pubs'>Brownhill, Knight {'&'} Norris | <b>Invited speaker: An ADHD Teacher Toolkit - what are the needs?</b> | Bristol Conversations, UoB | 2020</li>
                    <li className='description-li' id='li-pubs'>Knight | <b>Keynote panellist: SEEL Debate for Educational Psychologists: Is an ADHD diagnosis helpful or harmful?</b> | BPS DECP, UCL | 2019</li>
                    <li className='description-li' id='li-pubs'>Knight {'&'} Fancourt | <b>Poster: Sleepy teens: What a difference a delay makes | World Sleep Society conference</b> | 2019</li>
                    <li className='description-li' id='li-pubs'>Knight | <b>Invited speaker: [ADHD] Approaches to assessment {'&'} Intervention</b> | London ADHD Research Forum | 2019</li>
                    <li className='description-li' id='li-pubs'>Knight | <b>Poor sleep in childhood, {'&'} its effect on learning, attention {'&'} behaviour</b> | BrainCanDo, Queen Anne's | Bell House, Centre for Educational Needs | Award ceremony, Fairley House School for Specific Learning Difficulties | 2017-2020</li>
                  </ul>
                </div>}
              </div>
            </div>
          </div>
        </div>

      </Container>
      <div className='overlay' id='academics'></div>
    </>
  )
}

export default Academics