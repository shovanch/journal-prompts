import React from 'react';
import './Footer.scss';
import Github from 'assets/images/github.svg';
import LinkedIn from 'assets/images/linkedin.svg';
import Twitter from 'assets/images/twitter.svg';

export const Footer = () => (
  <footer className="footer">
    <p>Developed by Shovan Chatterjee</p>
    <div className="footer__icons">
      <a href="https://twitter.com/shovan_ch">
        <img className="footer__icon" src={Twitter} alt="twitter icon" />
      </a>
      <a href="https://github.com/shovanch">
        <img className="footer__icon" src={Github} alt="github icon" />
      </a>
      <a href="https://linkedin.com/in/shovanch">
        <img className="footer__icon" src={LinkedIn} alt="linkedin icon" />
      </a>
    </div>
  </footer>
);

export default Footer;
