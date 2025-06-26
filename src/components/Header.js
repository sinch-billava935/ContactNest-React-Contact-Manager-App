import React from "react";
import "../styles/Header.css";

const Header = () => {
  return (
    <header className="header-container">
      <div className="header-inner">
        <h1 className="header-title">ContactNest</h1>
      </div>
      <p className="header-subtitle">All your contacts in one nest.</p>
    </header>
  );
};

export default Header;
