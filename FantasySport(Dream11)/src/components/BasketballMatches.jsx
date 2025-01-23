import React from "react";
import MatchCard from "./MatchCard";
import "./Basketball.css";

function BasketballMatches() {
  const basketballMatches = [
    {
      tournament: "NBA",
      team1: { name: "Los Angeles Lakers", logo: "lakers" },
      team2: { name: "Golden State Warriors", logo: "warriors" },
      time: "7h 00m",
      type: "H2H",
      prize: "$1 Million",
    },
    {
      tournament: "EuroLeague",
      team1: { name: "Real Madrid", logo: "real_madrid" },
      team2: { name: "FC Barcelona", logo: "barcelona" },
      time: "4h 30m",
      type: "H2H",
      prize: "€500,000",
    },
  ];
  const upcomingMatches = [
    {
      tournament: "NBA",
      team1: { name: "Los Angeles Lakers", logo: "lakers" },
      team2: { name: "Golden State Warriors", logo: "warriors" },
      time: "7h 00m",
      type: "H2H",
      prize: "$1 Million",
    },
    {
      tournament: "NBA",
      team1: { name: "Boston Celtics", logo: "celtics" },
      team2: { name: "Miami Heat", logo: "heat" },
      time: "8h 30m",
      type: "MEGA",
      prize: "$2 Million",
    },
    {
      tournament: "EuroLeague",
      team1: { name: "Real Madrid", logo: "real_madrid" },
      team2: { name: "FC Barcelona", logo: "barcelona" },
      time: "4h 30m",
      type: "H2H",
      prize: "€500,000",
    },
    {
      tournament: "EuroLeague",
      team1: { name: "Olympiacos", logo: "olympiacos" },
      team2: { name: "CSKA Moscow", logo: "cska_moscow" },
      time: "6h 15m",
      type: "MEGA",
      prize: "€750,000",
    },
  ];

  return (
    <div className="basketball-page">
      <h2>
        My Matches <span>View All</span>
      </h2>
      {basketballMatches.map((match) => (
        <MatchCard key={match.id} match={match} />
      ))}
      <div className="upcoming-matches-section-basketball">
        <h2>Upcoming Matches</h2>
        {upcomingMatches.map((match) => (
          <MatchCard key={match.id} match={match} />
        ))}
      </div>
    </div>
  );
}

export default BasketballMatches;
