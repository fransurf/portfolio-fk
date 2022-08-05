import React from 'react'
import Container from 'react-bootstrap/Container'

const Academics = () => {

  return (
    <>
      <Container className='content-container' id='academics-container'>
        <div id='academic-title'>
          <h1 className='page-title'>It's all academic<span>.</span></h1>
          <div id='emoji'></div>
        </div>


        <div id='academics' >

          <div className='academic-div expand' id='career'>
            <h2 className='short-text' id='se-text'>Academic career</h2>
            <h2 className='long-text long-text-title' id='se-text'>Academic career</h2>
            <div className='long-text long-text-box academics' id='career'>
              <div className='long-text-inner'>
                <p className='description'>{`"Before making the transition into software engineering, I started my career as a psychology lecturer, specialising in neuroscience. I enjoyed the challenge of presenting complex concepts in accessible, engaging & humorous ways. Across my research career, I have been drawn to understanding how different technologies can be used to support the diagnosis & intervention of developmental disorders. It was collaborating on the development of these technologies that sparked my interest in the world of software development."`}</p>
                <h2 className='acad-heading'>Education</h2>
                <ul>
                  <li className='description'>AURORA Women in Leadership | Leadership Foundation for Higher Education | 2019-2020</li>
                  <li className='description'>Fellowship in Higher Education | Higher Education Academy | 2016-2017</li>
                  <li className='description'>Ph.D Developmental Neuroscience, Psychology | Goldsmiths, UoL | 2010-2013</li>
                  <li className='description'>MSc Cognitive {'&'} Clinical Neuroscience (Distinction) | Goldsmiths, UoL | 2009-2010</li>
                  <li className='description'>BSc Experimental Psychology (2:1) | University of Reading | 2004-2007</li>
                </ul>
                <h2 className='acad-heading'> Special awards {'&'} commendations</h2>
                <ul >
                  <li className='description'>{`Award: Most Visually Pleasing Lectures | Student awards | Education & Psychology Society, UoB | 2019-2020`}</li>
                  <li className='description'>Keynote panelist: SEEL Debate for Educational Psychologists: Is an ADHD diagnosis helpful or harmful? | UCL | 2019</li>
                  <li className='description'>Award: Best Second Year Unit | Student awards | Education {'&'} Psychology Society, UoB | 2018-2019</li>
                  <li className='description'>Nominated: Inspirational teaching  | Student Choice award | UCL | 2017-2018</li>
                </ul>
              </div>
            </div>
          </div>

          <div className='academic-div expand' id='publications'>
            <h2 className='short-text' id='pubs-text'>Research</h2>
            <h2 className='long-text long-text-title' id='pubs-text'>Research</h2>
            <div className='long-text long-text-box academics' id='publications'>
              <div className='long-text-inner'>
                <p className='description'>{`"As I specialised, my academic research consisted of two overlapping avenues; ADHD and sleep. My focus was always on understanding the current challenges faced for young people with both ADHD and poor sleep, in order to develop interventions to better support them"`}</p>
                <h2 className='acad-heading'>Publications of note</h2>
                <div id='publication-divs'>
                  <a href='https://psycnet.apa.org/record/2021-60005-001' alt='link to paper' className='pubs-link' target='blank'><div className='pubs' id='myrto' ></div></a>
                  <a href='https://www.taylorfrancis.com/chapters/edit/10.4324/9780429197741-8/sleepy-teens-classroom-frances-le-cornu-knight' alt='link to paper' className='pubs-link' target='blank'><div className='pubs' id='braincando'></div></a>
                  <a href='https://www.tandfonline.com/doi/abs/10.1080/15402002.2017.1395335?journalCode=hbsm20' alt='link to paper' className='pubs-link' target='blank'><div className='pubs' id='adhd-sleep'></div></a>
                  <a href='https://www.ncbi.nlm.nih.gov/pmc/articles/PMC4664801/' alt='link to paper' className='pubs-link' target='blank'><div className='pubs' id='adol-sleep'></div></a>
                </div>
              </div>

            </div>
          </div>

          <div className='academic-div expand' id='snowboarder'>
            <h2 className='short-text' id='pubeng-text'>Public engagement</h2>
            <h2 className='long-text long-text-title' id='pubeng-text'>Public engagement</h2>
            <div className='long-text long-text-box academics' id='public-engagement'>
              <div className='long-text-inner'>
                <p className='description'>{`"Given my field of research, I recognised the importance of public engagement. In my opinion, research is as much for the public interest as it is for academics. In addition to academic presentations, I regularly gave talks at ADHD & development support groups, and to pupils, parents & teachers at schools"`}</p>
                <h2 className='acad-heading'>Presentations of note</h2>
                <ul>
                  <li className='description'>Brownhill, Knight {'&'} Norris | Invited speaker: An ADHD Teacher Toolkit - what are the needs? | Bristol Conversations, UoB | 2020</li>
                  <li className='description'>Knight | Keynote panellist: SEEL Debate for Educational Psychologists: Is an ADHD diagnosis helpful or harmful? | BPS DECP, UCL | 2019</li>
                  <li className='description'>Knight {'&'} Fancourt | Poster: Sleepy teens: What a difference a delay makes | World Sleep Society conference | 2019</li>
                  <li className='description'>Knight | Invited speaker: [ADHD] Approaches to assessment {'&'} Intervention | London ADHD Research Forum | 2019</li>
                  <li className='description'>Knight | Poor sleep in childhood, {'&'} its effect on learning, attention {'&'} behaviour | BrainCanDo, Queen Anne's | Bell House, Centre for Educational Needs | Award ceremony, Fairley House School for Specific Learning Difficulties | 2017-2020</li>
                </ul>
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