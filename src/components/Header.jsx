import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <header className="header">
      <h1>My Homepage</h1>
      <nav>
        <ul>
          <li><a href="#hero">Home</a></li>
          <li><a href="#features">Features</a></li>
          <li><a href="#footer">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
