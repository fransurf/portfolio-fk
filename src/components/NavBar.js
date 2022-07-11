import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {

  return (
    <header  >
      <nav id='navbar' >

        <Link className='link' to='/'>TAKE ME HOME</Link>
      </nav>
    </header>
  )
}

export default NavBar
