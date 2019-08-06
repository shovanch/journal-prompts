import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.scss';
import Github from 'assets/images/github.svg';
import LinkedIn from 'assets/images/linkedin.svg';
import Twitter from 'assets/images/twitter.svg';

export const Footer = () => (
  <footer className="footer">
    <p>Developed by Shovan Chatterjee</p>
    <div className="footer__icons">
      <Link to="/">
        <img className="footer__icon" src={Twitter} alt="" />
      </Link>
      <Link to="/">
        <img className="footer__icon" src={Github} alt="" />
      </Link>
      <Link to="/">
        <img className="footer__icon" src={LinkedIn} alt="" />
      </Link>


    </div>
  </footer>
);

export default Footer;
