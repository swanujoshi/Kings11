import React from "react";
import MatchCard from "./MatchCard";

function FootballMatches() {
  const myMatches = [
    {
      tournament: "FIFA World Cup",
      team1: { name: "Brazil", logo: "brazil.png" },
      team2: { name: "Argentina", logo: "argentina.png" },
      time: "2h 30m",
      type: "MEGA",
      prize: "₹100 Crores",
    },
  ];
  const upcomingMatches = [
    {
      tournament: "FIFA World Cup",
      team1: { name: "Brazil", logo: "brazil.png" },
      team2: { name: "Argentina", logo: "argentina.png" },
      time: "2h 30m",
      type: "MEGA",
      prize: "₹100 Crores",
    },
    {
      tournament: "UEFA Champions League",
      team1: { name: "Real Madrid", logo: "real_madrid.png" },
      team2: { name: "Liverpool", logo: "liverpool.png" },
      time: "1h 45m",
      type: "H2H",
      prize: "₹50 Crores",
    },
    {
      tournament: "English Premier League",
      team1: { name: "Manchester City", logo: "manchester_city.png" },
      team2: { name: "Manchester United", logo: "manchester_united.png" },
      time: "4h 10m",
      type: "MEGA",
      prize: "₹80 Crores",
    },
    {
      tournament: "La Liga",
      team1: { name: "Barcelona", logo: "barcelona.png" },
      team2: { name: "Real Madrid", logo: "real_madrid.png" },
      time: "3h 20m",
      type: "H2H",
      prize: "₹60 Crores",
    },
    {
      tournament: "Serie A",
      team1: { name: "Juventus", logo: "juventus.png" },
      team2: { name: "AC Milan", logo: "ac_milan.png" },
      time: "5h 00m",
      type: "MEGA",
      prize: "₹75 Crores",
    },
  ];

  return (
    <div className="football-page">
      <div className="my-matches-section">
        <h2>My Matches</h2>
        {myMatches.map((match) => (
          <MatchCard key={match.id} match={match} />
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
