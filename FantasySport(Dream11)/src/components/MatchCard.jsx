import React from "react";
import "./MatchCard.css";

function MatchCard({ match, className, isFirstCard, isLineupsOut }) {
  return (
    <div className={`match-card ${className || ""}`}>
      <div className="tournament-name">
        <span>{match.tournament}</span>
        <div className="notification-icon-container">
          <img
            src="bell.png"
            alt="Notification"
            className="notification-icon"
          />
          {isLineupsOut && <span className="lineups-out">Lineups Out</span>}
        </div>
      </div>
      <div className="teams-section">
        <div className="team">
          <img
            src={`/image/${match.team1.logo}.png`}
            alt={`${match.team1.name} Logo`}
          />
          <div className="team-name">{match.team1.name}</div>
        </div>
        <div className="match-time">{match.time}</div>
        <div className="team">
          <div className="team-name">{match.team2.name}</div>
          <img
            src={`/image/${match.team2.logo}.png`}
            alt={`${match.team2.name} Logo`}
          />
        </div>
      </div>
      <div className="match-details">
        <div className="mega-container">
          <div className="match-type">{match.type}</div>
          <span className="match-prize">{match.prize}</span>
        </div>
        <div className="team-count-container">
          <span className="team-count-text">
            {match.teamCount} Team {match.contestCount} Contest
          </span>
          <img src="speaker.png" alt="Team Icon" className="team-icon" />
        </div>
      </div>
    </div>
  );
}

export default MatchCard;
