import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import '../Whatsapp/whatsapp.css';

const WhatsAppIcon = () => {
  return (
    <div className="whatsapp-icon">
      <a
        href="https://api.whatsapp.com/send?phone=YOUR_PHONE_NUMBER"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FontAwesomeIcon icon={faWhatsapp} size="2x" />
      </a>
    </div>
  );
};

export default WhatsAppIcon;
