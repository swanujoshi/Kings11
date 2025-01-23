import React from "react";
import { useNavigate } from "react-router-dom";
import "./matchdetails.css";

const Content = () => {
  const navigate = useNavigate();

  // Function to handle back button click
  const handleBackClick = () => {
    navigate(-1); // Navigates to the previous page
  };

  const matchData = [
    {
      prizePool: 32,
      spotsLeft: "58,25,789",
      totalSpots: "87,07,482",
      entryFee: 35,
      progress: 66, // 66% filled
      guaranteed: true,
    },
    {
      prizePool: 10,
      spotsLeft: "25,75,454",
      totalSpots: "25,000",
      entryFee: 55,
      progress: 40, // 40% filled
      guaranteed: true,
    },
  ];

  return (
    <div className="app">
      <div className="header bg-black text-white py-2 px-4 d-flex justify-content-between align-items-center">
        <div className="d-flex align-items-center">
          {/* Back Button */}
          <button
            className="back-button bg-black text-white border-0 me-3"
            onClick={handleBackClick}
          >
            ←
          </button>
          <div className="match-info">
            <h6 className="mb-0">MI vs SRH</h6>
            <span className="text-white">2h 10m left</span>
          </div>
        </div>
        <div className="d-flex align-items-center">
          <i className="icon-star me-3"></i>
          <i className="icon-plus me-3"></i>
          <i className="icon-file"></i>
        </div>
      </div>
      {/* Assuming Navbar is a separate component */}
      <Navbar />
      {/* Matches Section */}
      <div className="matches-header d-flex justify-content-between px-4 py-3">
        <h5>Matches</h5>
        <button className="view-all-btn">View All</button>
      </div>

      <div className="matches-container px-4">
        {matchData.map((data, index) => (
          <div key={index} className="card shadow-sm mb-3">
            <div className="card-body">
              <h6 className="prize-pool text-muted">Prize Pool</h6>
              <div className="prize-entry-fee-container d-flex justify-content-between align-items-center">
                <h5>₹ {data.prizePool} Crores</h5>
                <span className="entry-fee bg-green">₹ {data.entryFee}</span>
              </div>
              <div className="progress-bar-container my-2">
                <div
                  className="progress-bar"
                  style={{
                    width: `${data.progress}%`,
                    backgroundColor: "blue",
                  }}
                />
              </div>
              <div className="spots-info d-flex justify-content-between">
                <span className="text-danger">
                  {data.spotsLeft
                    .split(",")
                    .reduce((a, b) => parseInt(a) + parseInt(b))}{" "}
                  spots left
                </span>
                <span>
                  {data.totalSpots
                    .split(",")
                    .reduce((a, b) => parseInt(a) + parseInt(b))}{" "}
                  spots
                </span>
              </div>
              <div className="guaranteed-container d-flex justify-content-between align-items-center mt-3">
                <span className="additional-info">
                  <span>₹ 5 Crores 30%</span>
                  <span className="gap">Upto ₹ 20</span>
                </span>
                <div className="guaranteed-text">
                  {data.guaranteed && <i className="icon-check"></i>} Guaranteed
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default matchdetails;
