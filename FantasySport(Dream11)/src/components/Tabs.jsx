import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBaseballBall,
  faFootballBall,
  faBasketballBall,
  faBaseballBatBall,
} from "@fortawesome/free-solid-svg-icons";
import "./Tabs.css";

function Tabs() {
  const tabs = [
    { name: "Cricket", path: "/", icon: faBaseballBall },
    { name: "Football", path: "/football", icon: faFootballBall },
    { name: "Basketball", path: "/basketball", icon: faBasketballBall },
    { name: "Baseball", path: "/baseball", icon: faBaseballBall },
    { name: "Hockey", path: "/hockey", icon: faBaseballBatBall },
  ];

  return (
    <div className="tabs">
      {tabs.map((tab) => (
        <Link to={tab.path} key={tab.name} className="tab">
          <FontAwesomeIcon icon={tab.icon} className="tab-icon" />
          {tab.name}
        </Link>
      ))}
    </div>
  );
}

export default Tabs;
