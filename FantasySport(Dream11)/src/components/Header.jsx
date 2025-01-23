import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell, faWallet } from "@fortawesome/free-solid-svg-icons";
import "./Header.css";

function Header() {
  return (
    <header className="header">
      <div className="menu-icon">☰</div>
      <h1>DreamSports11</h1>
      <div className="icons">
        <FontAwesomeIcon icon={faBell} className="icon" />
        <FontAwesomeIcon icon={faWallet} className="icon" />
      </div>
    </header>
  );
}

export default Header;
