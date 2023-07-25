import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub, faGoogle } from '@fortawesome/free-brands-svg-icons';
import './footer.css';

const FooterComp = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <a href="https://www.linkedin.com/in/shauryadahiya1998/" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faLinkedin} className="footer-icon" />
        </a>
        <a href="https://github.com/ShauryaDahiya1998" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faGithub} className="footer-icon" />
        </a>
        <a href="mailto:shauryadahiya@gmail.com" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faGoogle} className="footer-icon" />
        </a>
      </div>
    </footer>
  );
};

export default FooterComp;
