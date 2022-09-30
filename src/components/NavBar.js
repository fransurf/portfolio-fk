import React from 'react'
import { Link } from 'react-router-dom'

import Logo from '../styles/assets/logoThick.png'


const NavBar = () => {

  // const [ active, setActive ] = useState('hamburger-menu')
  // const [ toggleIcon, setToggleIcon ] = useState('nav-toggler')

// * REVEAL DROPDOWN MENU ON HAMBURGER CLICK
  const menuReveal = () => {
    let menu = document.getElementById("hamburger-menu")
    menu.classList.toggle('active')

    let hamburger = document.getElementById("hamburger")
    hamburger.classList.toggle('active')
  }

  // * REMOVE DROPDOWN ON NAVIGATION TO NEW PAGE
  const menuDisappear = () => {
    let menu = document.getElementById("hamburger-menu")
    menu.classList.remove('active')

    let hamburger = document.getElementById("hamburger")
    hamburger.classList.remove('active')
  }

  return (
    <header  >
      <nav id='navbar-desktop' className='navbar'>
        <Link className='link' to='/about'>About</Link>
        <Link className='link' to='/projects'>Projects</Link>
        <Link className='logo' to='/'><img src={Logo} alt='FK logo' className='logo link' /></Link>
        <Link className='link' to='/academics'>Academics</Link>
        <Link className='link' to='/contact'>Contact</Link>
      </nav>

      <nav id='navbar-mobile' className='navbar'>
        <Link className='hamburger-link link' to='/' onClick={menuDisappear}><img src={Logo} alt='FK logo' className='logo' /></Link>
        <div id='hamburger-menu' className='hamburger-menu'>
          <Link className='hamburger-link' to='/about' onClick={menuDisappear}>About</Link>
          <Link className='hamburger-link' to='/projects' onClick={menuDisappear}>Projects</Link>
          <Link className='hamburger-link' to='/academics' onClick={menuDisappear}>Academics</Link>
          <Link className='hamburger-link' to='/contact' onClick={menuDisappear}>Contact</Link>
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
