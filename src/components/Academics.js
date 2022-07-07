import React from 'react'
import Container from 'react-bootstrap/Container'

const Academics = () => {

  return (
    <Container id='academics-container'>
      <div className='academic-div' id='career'>
        <h2 className='short-text' id='se-text'>ACADEMIC CAREER</h2>
        <h2 className='long-text' id='se-text'>ACADEMIC CAREER</h2>
        <div>
          <p>Here's a description about my career to date</p>
          <ul>
            <li>list item</li>
            <li>list item</li>
            <li>list item</li>
            <li>list item</li>
            <li>list item</li>
          </ul>

        </div>
      </div>

      <div className='academic-div' id='publications'>
        <h2 className='short-text' id='pubs-text'>PUBLICATIONS</h2>
        <h2 className='long-text' id='pubs-text'>PUBLICATIONS</h2>
        <div>
          <p>Here's a description of some of the writing I've done</p>
          <ul>
            <li>list item</li>
            <li>list item</li>
            <li>list item</li>
            <li>list item</li>
            <li>list item</li>
          </ul>
        </div>
      </div>

      <div className='academic-div' id='snowboarder'>
        <h2 className='short-text' id='pubeng-text'>PUBLIC ENGAGEMENT</h2>
        <h2 className='long-text' id='pubeng-text'>PUBLIC ENGAGEMENT</h2>
        <div>
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
    </Container>
  )
}

export default Academics