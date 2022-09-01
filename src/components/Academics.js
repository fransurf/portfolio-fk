import React, { useState } from 'react'
import Container from 'react-bootstrap/Container'

const Academics = (props) => {

  // SETTING STATE FOR TOGGLE BETWEEN DESCRIPTION & QUALIFICATION
  const [selected, setSelected] = useState(0)

  return (
    <>
      <Container className='content-container' id='academics-container'>
        <div id='academic-title'>
          <h1 className='page-title'>It's all academic<span>.</span></h1>
          <div id='emoji'></div>
        </div>

        <div id='academics' >
          {/* ACADEMIC CAREER SECTION */}
          <div className='academic-div expand' id='career'>
            <h2 className='academic-subtitle' id='se-text'>Academic career</h2>
            <div className='long-text long-text-box academics' id='career'>
              <div className='long-text-inner'>
                {/* TOGGLE BAR */}
                <div className='toggle'>
                  <h3 onClick={() => setSelected(0)}> <span>{`<<`}</span> About my career <span>{`>>`}</span></h3>
                  <h3 onClick={() => setSelected(1)}> <span>{`<<`}</span> Qualifications <span>{`>>`}</span></h3>
                </div>

                {/* CAREER DESCRIPTION */}
                {(selected === 0) && <div id="nav-career">
                  <p className='description '>{`"I started my career as a psychology lecturer, specialising in neuroscience. I have an embedded interest in human behaviour & understanding how it relates to neuropsychological mechanisms in the brain & body.`}<br></br><br></br>{`In teaching, I enjoyed the challenge of presenting complex concepts in accessible, engaging & humorous ways. Students frequently reported that my visual presentation & interactive demonstrations were key to their understanding.`}<br></br><br></br>{`Across my academic career, I moved quickly from associate to senior lecturer, leading on 2 popular neuroscience modules & directing the BSc Psychology in Education at the University of Bristol."`}</p>
                </div>}

                {/* QUALIFICATIONS */}
                {(selected === 1) && <div className='quals' id="nav2-career">
                  <h3 className='acad-heading'>Education</h3>
                  <ul>
                    <li className='description-li'>Software Engineering Immersive | General Assembly | 2022</li>
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

          {/* RESEARCH SECTION */}
          <div className='academic-div expand' id='publications'>
            <h2 className='academic-subtitle' id='pubs-text'>Research</h2>
            <div className='long-text long-text-box academics' id='research'>

              <div className='long-text-inner'>
                {/* TOGGLE BAR */}
                <div className='toggle'>
                  <h3 onClick={() => setSelected(0)}> <span>{`<<`}</span> About my research <span>{`>>`}</span></h3>
                  <h3 onClick={() => setSelected(1)}> <span>{`<<`}</span> Publications of note <span>{`>>`}</span></h3>
                </div>

                {/* RESEARCH DESCRIPTION */}
                {(selected === 0) && <div id="nav-research">
                  <p className='description'>{`"Across my research career, I have been drawn to understanding how different technologies can be used to support the diagnosis & intervention of developmental disorders. It was collaborating on the development of these technologies that sparked my interest in the world of software development.`}<br></br><br></br>{`As I specialised, my academic research consisted of two overlapping avenues; ADHD and sleep.`}<br></br><br></br>{`I used a range of physiological technologies including electroencephalography (EEG: measuring eletrical brain activity), actigraphy (measuring sleep patterns) & VR measures of attentional processing."`}</p>
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

          {/* PUBLIC ENGAGEMENT SECTION */}
          <div className='academic-div expand' id='snowboarder'>
            <h2 className='academic-subtitle' id='pubeng-text'>Public engagement</h2>
            <div className='long-text long-text-box academics' id='pub-eng'>

              <div className='long-text-inner' >
                {/* TOGGLE BAR */}
                <div className='toggle'>
                  <h3 onClick={() => setSelected(0)}><span>{`<<`}</span> About my talks <span>{`>>`}</span></h3>
                  <h3 onClick={() => setSelected(1)}><span>{`<<`}</span> Presentations of note <span>{`>>`}</span></h3>
                </div>

                {/* PUBLIC ENGAGEMENT DESCRIPTION */}
                {(selected === 0) && <div id="nav-research">
                  <p className='description'>{`"Given my field of research, I have felt the importance of public engagement. Presenting current findings to the people that they affect, promoting understanding & open discussion is crucial for support & advancement.`}<br></br><br></br>{`In addition to academic presentations, I regularly gave talks at ADHD & development support groups, as well as to pupils, parents & teachers at schools`}<br></br><br></br>{`In order to promote participatory research (research that is guided by the people that it affects), my colleagues and I gained funding for a research network engaging neurodiverse students in setting the research agenda."`}</p>
                </div>}

                {/* RECENT TALKS */}
                {(selected === 1) && <div className='quals' id="nav2-pubs">
                <ul>
                    <li className='description-li' id='li-pubs'>Caldwell, Russell, Sedgewick {'&'} Knight | <a href='https://emergingminds.org.uk/special-interest-research-group-neurodiversity-and-young-peoples-mental-health-in-higher-education/' alt='link to REASON network' target='blank'>ReASoN network: Researchers {'&'} Students on Neurodiversity</a>| UoB {'&'} Exeter University | 2020</li>
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