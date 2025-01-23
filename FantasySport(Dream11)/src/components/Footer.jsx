import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faTrophy,
  faComments,
  faGift,
  faUsers,
} from "@fortawesome/free-solid-svg-icons";
import "./Footer.css";

function Footer() {
  const navItems = [
    { name: "Home", icon: faHome },
    { name: "My Matches", icon: faUsers },
    { name: "Winners", icon: faTrophy },
    { name: "Chat", icon: faComments },
    { name: "Rewards", icon: faGift },
  ];

  return (
    <footer className="footer">
      {navItems.map((item) => (
        <div className="nav-item" key={item.name}>
          <FontAwesomeIcon icon={item.icon} className="icon" />
          <span>{item.name}</span>
        </div>
      ))}
    </footer>
  );
}

export default Footer;
