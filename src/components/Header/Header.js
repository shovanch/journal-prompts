import React from 'react';
import { Link } from 'react-router-dom';
import './Header.scss';

export const Header = () => (
  <header className="header">
    <Link to="/">Writing Prompts</Link>
    <Link to="/">About</Link>
  </header>
);

export default Header;
