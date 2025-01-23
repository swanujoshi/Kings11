import React from "react";
import MatchCard from "./MatchCard";
import "./Hockeymatches.css";

function HockeyMatches() {
  const hockeyMatches = [
    {
      tournament: "NHL",
      team1: { name: "Toronto Maple Leafs", logo: "juventus" },
      team2: { name: "Montreal Canadiens", logo: "giants" },
      time: "3h 45m",
      type: "Divisional",
      prize: "$2 Million",
    },
    {
      tournament: "NHL",
      team1: { name: "Tampa Bay Lightning", logo: "liverpool" },
      team2: { name: "Florida Panthers", logo: "rays" },
      time: "6h 15m",
      type: "Conference",
      prize: "$3 Million",
    },
  ];
  const upcomingMatches = [
    {
      tournament: "NHL",
      team1: { name: "Colorado Avalanche", logo: "warriors" },
      team2: { name: "Edmonton Oilers", logo: "yankees" },
      time: "1h 20m",
      type: "Divisional",
      prize: "$1.5 Million",
    },
    {
      tournament: "NHL",
      team1: { name: "New York Rangers", logo: "rangers" },
      team2: { name: "New Jersey Devils", logo: "heat" },
      time: "4h 45m",
      type: "Metropolitan",
      prize: "$1.8 Million",
    },
    {
      tournament: "NHL",
      team1: { name: "Boston Bruins", logo: "marlins" },
      team2: { name: "Pittsburgh Penguins", logo: "olympiacos" },
      time: "7h 00m",
      type: "Conference",
      prize: "$2.5 Million",
    },
    {
      tournament: "NHL",
      team1: { name: "Toronto Maple Leafs", logo: "juventus" },
      team2: { name: "Montreal Canadiens", logo: "giants" },
      time: "3h 45m",
      type: "Divisional",
      prize: "$2 Million",
    },
    {
      tournament: "NHL",
      team1: { name: "Tampa Bay Lightning", logo: "liverpool" },
      team2: { name: "Florida Panthers", logo: "rays" },
      time: "6h 15m",
      type: "Conference",
      prize: "$3 Million",
    },
  ];
  return (
    <div className="hockey-page">
      <h2>
        My Matches <span>View All</span>
      </h2>
      {hockeyMatches.map((match) => (
        <MatchCard key={match.id} match={match} />
      ))}
      <div className="upcoming-matches-section-hockey">
        <h2>Upcoming Matches</h2>
        {upcomingMatches.map((match) => (
          <MatchCard key={match.id} match={match} />
        ))}
      </div>
    </div>
  );
}

export default HockeyMatches;
