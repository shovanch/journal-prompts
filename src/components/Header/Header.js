import React from "react";
import { Link } from "react-router-dom";
import "./Header.scss";

const Header = () => (
  <header className="header">
    <Link to="/" className="header-logo">
      Journal Prompts
    </Link>
    <Link to="/">About</Link>
  </header>
);

export default Header;
