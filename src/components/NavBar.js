import React from 'react'
import { Link } from 'react-router-dom'

import Logo from '../styles/assets/logoThick.png'


const NavBar = () => {

  // const [ active, setActive ] = useState('hamburger-menu')
  // const [ toggleIcon, setToggleIcon ] = useState('nav-toggler')


  const menuReveal = () => {
    let menu = document.getElementById("hamburger-menu")

    if (menu.style.display === 'flex') {
      menu.style.display = 'none'
    } else {
      menu.style.display = 'flex'
    }

  }

  return (
    <header  >
      <nav id='navbar-desktop' className='navbar'>
        <Link className='link' to='/about'>About</Link>
        <Link className='link' to='/projects'>Projects</Link>
        <Link className='link' to='/'><img src={Logo} alt='FK logo' className='logo' /></Link>
        <Link className='link' to='/academics'>Academics</Link>
        <Link className='link' to='/contact'>Contact</Link>
      </nav>

      <nav id='navbar-mobile' className='navbar'>
        <Link className='link' to='/'><img src={Logo} alt='FK logo' className='logo' /></Link>
        <div id='hamburger-menu' className='hamburger-menu'>
          <Link className='link' to='/about'>About</Link>
          <Link className='link' to='/projects'>Projects</Link>
          <Link className='link' to='/academics'>Academics</Link>
          <Link className='link' to='/contact'>Contact</Link>
        </div>
        <div id='hamburger' onClick={menuReveal} className='icon'>
          <div className='burger'></div>
          <div className='burger'></div>
          <div className='burger'></div>
        </div>
      </nav>
    </header>
  )
}

export default NavBar
