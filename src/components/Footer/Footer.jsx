import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';
import '../Footer/Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-header">
            <h2>Contact Us</h2>
          </div>
          <div className="footer-text">
            © {new Date().getFullYear()} Innosight Solution. All rights reserved.
          </div>
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
      </div>
    </footer>
  );
};

export default Footer;