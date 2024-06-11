/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'
import './NavSlide.css'

const NavBarSide = ({ isOpen, toggleMenu }) => {
  return (
    <div className={`side-menu ${isOpen ? 'open' : ''}`}>
    <button className="close-btn" onClick={toggleMenu}>×</button>
    <ul>
        <li><a href="#home">Home</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#contact">Contact</a></li>
    </ul>
</div>
  )
}

export default NavBarSide