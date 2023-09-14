import React, { useState } from "react";
import logo from '../assets/Innosight.png'

function NavMenu() {
  const [showServicesMenu, setShowServicesMenu] = useState(false);

  const toggleServicesMenu = () => {
    setShowServicesMenu(!showServicesMenu);
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
      <a className="navbar-brand" href="/">
        <img className="logo" src={logo} width="90" height="80" alt="logo" />
      </a>
      {/* Button is visible on both desktop and mobile */}
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className={`collapse navbar-collapse${showServicesMenu ? " show" : ""}`} id="navbarNav">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item active">
            <a className="nav-link" href="/">
              Home <span className="sr-only">(current)</span>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/about">
              About
            </a>
          </li>
          <li className="nav-item dropdown">
            <a
              className="nav-link dropdown-toggle"
              href="/services"
              id="servicesDropdown"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Services
            </a>
            <div className="dropdown-menu" style={{ marginRight:'50px'}} aria-labelledby="servicesDropdown">
              <a className="dropdown-item" href="/service1">
                Sub-Service 1
              </a>
              <a className="dropdown-item" href="/service2">
                Sub-Service 2
              </a>
              <a className="dropdown-item" href="/service3">
                Sub-Service 3
              </a>
            </div>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/course">
              Courses
            </a>
          </li>

          {/* Services dropdown menu with sub-services */}
          
        </ul>
      </div>
    </nav>
  );
}

export default NavMenu;
