import React from 'react'
import '../Footer/Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-header">
          <h2>Contact Us</h2>
        </div>
        <div className="social-icons">
          <a href="https://www.facebook.com/" className="icon">
            <FontAwesomeIcon icon={faFacebook} />
          </a>
          <a href="https://twitter.com/i/flow/login" className="icon">
            <FontAwesomeIcon icon={faTwitter} />
          </a>
          <a href="https://www.instagram.com/" className="icon">
            <FontAwesomeIcon icon={faInstagram} />
          </a>
        </div>
        <p className="footer-text">
          © {new Date().getFullYear()} Innosight Solution. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
