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
                <li><a href="/residential-services">Residential Services</a></li>
                <li><a href="/commercial-services">Commercial Services</a></li>
                <li><a href="/retail-services">Retail Services</a></li>
              </ul>
            </li>
          <a href="/projects">
            <li>Projects</li>
          </a>
          <a href="#">
            <li>Contact</li>
          </a>
        </ul>
      </div>
    </nav>
  );
}

export default NavMenu;
