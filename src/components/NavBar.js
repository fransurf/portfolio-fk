import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {

  return (
    <header  >
      <nav id='navbar' >
          <Link className='link' to='/about'>About</Link>
          <Link className='link' to='/projects'>Projects</Link>
          <Link className='link' to='/'>FK</Link>
          <Link className='link' to='/academics'>Academics</Link>
          <Link className='link' to='/contact'>Contact</Link>
      </nav>
    </header>
  )
}

export default NavBar
