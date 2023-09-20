import React, { useState } from 'react';
import '../navbar/navbar.css';
import logo from '../assets/Innosight.png'

function NavMenu() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav role="navigation">

        <div className="menu-logo-container">
          <a href="/">
            <img src={logo} alt="Logo" className="menu-logo" />
          </a>
      </div>
      
      <div id="menuToggle">
        <input type="checkbox" checked={isMenuOpen} onClick={toggleMenu} />
        <span></span>
        <span></span>
        <span></span>

       

        <ul id="menu">
          <a href="/">
            <li>Home</li>
          </a>
           <li className="nav-item dropdown">
              <a href="#">Services</a>
              <ul className="dropdown-menu">
                <li><a href="/services/residential-services">Residential Services</a></li>
                <li><a href="/services/commercial-services">Commercial Services</a></li>
                <li><a href="/services/retail-services">Retail Services</a></li>
              </ul>
            </li>
          <li className="nav-item dropdown">
            
              <a href="#">Projects</a>
              <ul className="dropdown-menu">
                <li><a href="/projects/residential-projects">Residential Projects</a></li>
                <li><a href="/projects/commercial-projects">Commercial Projects</a></li>
              </ul>
            </li>
          <a href="#">
            <li>Contact</li>
          </a>
        </ul>
      </div>
    </nav>
  );
}

export default NavMenu;
