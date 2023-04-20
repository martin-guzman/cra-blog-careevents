/*  Footer Component
    Contains Copyright and Contact Information.
*/
// Import React and Styles
import React from 'react';
import './styles.css';

const Footer = () => (
  <footer>
    <div className='footer-container'>
      <address>© {new Date().getFullYear()}, Company Name ULC All rights reserved.<br />
        123 Street Way, St. John's, NL A1A 2B2, Canada<br />
        1-877-234-5678<br />
        <a href="mailto:contact@example.com">info@company.com</a>
      </address> 
    </div>
  </footer>
);

export default Footer;