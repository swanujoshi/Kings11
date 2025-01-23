import React from "react";
import MatchCard from "./MatchCard";
import "./BaseballMatches.css";
function BaseballMatches() {
  const baseballMatches = [
    {
      tournament: "MLB",
      team1: { name: "New York Yankees", logo: "yankees" },
      team2: { name: "Boston Red Sox", logo: "red_sox" },
      time: "2h 30m",
      type: "H2H",
      prize: "$1 Million",
    },
    {
      tournament: "NL West",
      team1: { name: "Los Angeles Dodgers", logo: "dodgers" },
      team2: { name: "San Francisco Giants", logo: "giants" },
      time: "5h 15m",
      type: "H2H",
      prize: "$500,000",
    },
  ];

  const upcomingMatches = [
    {
      tournament: "AL East",
      team1: { name: "Tampa Bay Rays", logo: "rays" },
      team2: { name: "Toronto Blue Jays", logo: "blue_jays" },
      time: "7h 00m",
      type: "H2H",
      prize: "$1 Million",
    },
    {
      tournament: "NL Central",
      team1: { name: "St. Louis Cardinals", logo: "cardinals" },
      team2: { name: "Chicago Cubs", logo: "cubs" },
      time: "8h 30m",
      type: "MEGA",
      prize: "$2 Million",
    },
    {
      tournament: "AL West",
      team1: { name: "Houston Astros", logo: "astros" },
      team2: { name: "Texas Rangers", logo: "rangers" },
      time: "4h 30m",
      type: "H2H",
      prize: "$500,000",
    },
    {
      tournament: "NL East",
      team1: { name: "Atlanta Braves", logo: "braves" },
      team2: { name: "Miami Marlins", logo: "marlins" },
      time: "6h 15m",
      type: "MEGA",
      prize: "$750,000",
    },
  ];

  return (
    <div className="baseball-page">
      <h2>
        My Matches <span>View All</span>
      </h2>
      {baseballMatches.map((match) => (
        <MatchCard key={match.id} match={match} />
      ))}
      <div className="upcoming-matches-section-baseball">
        <h2>Upcoming Matches</h2>
        {upcomingMatches.map((match) => (
          <MatchCard key={match.id} match={match} />
        ))}
      </div>
    </div>
  );
}

export default BaseballMatches;
