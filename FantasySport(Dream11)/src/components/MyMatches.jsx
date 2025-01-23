import React from "react";
import MatchCard from "./MatchCard";
import "./MatchCard.css";
import "./MyMatches.css";

const matches = [
  {
    tournament: "TATA IPL",
    team1: {
      name: "Mumbai Indians",
      shortName: "MI",
      logo: "MILogo",
    },
    team2: {
      name: "Sunrise Hyderabad",
      shortName: "SRH",
      logo: "SRHlogo",
    },
    time: "3h 35m",
    prize: "₹32 Crores",
    type: "MEGA",
    teamCount: 1,
    contestCount: 1,
    isLineupsOut: true,
  },
  {
    tournament: "TATA IPL",
    team1: {
      name: "Chennai Super Kings",
      shortName: "CSK",
      logo: "cskLogo",
    },
    team2: {
      name: "Royal Challengers Bangalore",
      shortName: "RCB",
      logo: "RcbLogo",
    },
    time: "1d",
    prize: "₹45 Crores",
    type: "MEGA",
    teamCount: 1,
    contestCount: 1,
    isLineupsOut: false,
  },
  // ... other matches
];

function MyMatches() {
  return (
    <section className="my-matches">
      <h2>
        My Matches <span>View All</span>
      </h2>
      {matches.map((match, index) => (
        <MatchCard
          key={index}
          match={match}
          isFirstCard={index === 0}
          // Pass the isLineupsOut prop here
          isLineupsOut={match.isLineupsOut}
        />
      ))}
      <div className="upcoming-matches-text">
        <h2>Upcoming Matches</h2>
      </div>
      {matches.map((match, index) => (
        <MatchCard
          key={index}
          match={match}
          className={index === 1 ? "shifted-card" : ""}
        />
      ))}
    </section>
  );
}

export default MyMatches;
