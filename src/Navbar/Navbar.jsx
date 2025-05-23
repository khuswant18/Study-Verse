import React from 'react'
import './Navbar.css'
import { NavLink } from 'react-router';

function Navbar() {
  return (
      <div className="header">
        <header className="header-content">

          <a href="#logo" className="logo">
            <span className="logo-text">Study<span className='verse'>Verse </span> </span>
          </a>

          <nav className="nav">
            <NavLink to="" className="nav-link">Home</NavLink>
            <NavLink to='/courses' href="" className="nav-link">Courses</NavLink>
            <NavLink to="/pricing" className="nav-link">Pricing</NavLink>
            <NavLink to="/stories" className="nav-link">Stories</NavLink>
            <NavLink to="/about" className="nav-link">About</NavLink>
          </nav>

          <a href="#contact" className="contact-button">
            Contact Us
          </a>

          <button type="button" className="menu-button">
            <img src="./images/Hamburger.svg" alt="menu-icon" className="menu-icon" />
          </button>

        </header>
      </div>
  )
}

export default Navbar;
