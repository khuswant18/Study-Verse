import React from 'react'
import './Navbar.css'

function Navbar() {
  return (
      <div className="header">
        <header className="header-content">

          <a href="#logo" className="logo">
            <span className="logo-text">Study<span className='verse'>Verse </span> </span>
          </a>

          <nav className="nav">
            <a href="#home" className="nav-link">Home</a>
            <a href="#Features" className="nav-link">Features</a>
            <a href="#Pricing" className="nav-link">Pricing</a>
            <a href="#Blog" className="nav-link">Blog</a>
            <a href="#About" className="nav-link">About</a>
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
