import React from 'react'
import Logo from '../img/RickAndMorty.png'
import '../components/styles/Nav.css'

const Nav = () => {
  return (
    <div className='nav_container'>
      <img src={Logo} className='logo' alt='Logo'/>
    </div>
  )
}

export default Nav
