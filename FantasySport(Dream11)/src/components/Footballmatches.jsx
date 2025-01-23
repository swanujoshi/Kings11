import React from "react";
import MatchCard from "./MatchCard";
import "./Footballmatches.css";
import "./MatchCard.css";

function FootballMatches() {
  const myMatches = [
    {
      tournament: "FIFA World Cup",
      team1: { name: "Brazil", logo: "brazil" },
      team2: { name: "Argentina", logo: "argentina" },
      time: "2h 30m",
      type: "MEGA",
      prize: "₹100 Crores",
    },
  ];
  const upcomingMatches = [
    {
      tournament: "UEFA Champions League",
      team1: { name: "Real Madrid", logo: "real_madrid" },
      team2: { name: "Liverpool", logo: "liverpool" },
      time: "1h 45m",
      type: "H2H",
      prize: "₹50 Crores",
    },
    {
      tournament: "FIFA World Cup",
      team1: { name: "Brazil", logo: "brazil" },
      team2: { name: "Argentina", logo: "argentina" },
      time: "2h 30m",
      type: "MEGA",
      prize: "₹100 Crores",
    },
    {
      tournament: "English Premier League",
      team1: { name: "Manchester City", logo: "manchester_city" },
      team2: { name: "Manchester United", logo: "manchester_united" },
      time: "4h 10m",
      type: "MEGA",
      prize: "₹80 Crores",
    },
    {
      tournament: "La Liga",
      team1: { name: "Barcelona", logo: "barcelona" },
      team2: { name: "Real Madrid", logo: "real_madrid" },
      time: "3h 20m",
      type: "H2H",
      prize: "₹60 Crores",
    },
    {
      tournament: "Serie A",
      team1: { name: "Juventus", logo: "juventus" },
      team2: { name: "AC Milan", logo: "ac_milan" },
      time: "5h 00m",
      type: "MEGA",
      prize: "₹75 Crores",
    },
  ];

  return (
    <div className="football-page">
      <div className="my-matches-section">
        <h2>
          My Matches <span>View All</span>
        </h2>
        {myMatches.map((match) => (
          <MatchCard key={match.id} match={match} className="football-card" />
        ))}
      </div>
      <div className="upcoming-matches-section">
        <h2>Upcoming Matches</h2>
        {upcomingMatches.map((match) => (
          <MatchCard key={match.id} match={match} />
        ))}
      </div>
    </div>
  );
}

export default FootballMatches;
