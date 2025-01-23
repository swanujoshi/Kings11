import React from "react";
import Header from "./components/Header";
import Tabs from "./components/Tabs";
import MyMatches from "./components/MyMatches";
import FootballMatches from "./components/Footballmatches";
import BasketballMatches from "./components/BasketballMatches";
import BaseballMatches from "./components/BaseballMatches";
import HockeyMatches from "./components/HockeyMatches";
import Footer from "./components/Footer";
import "./App.css";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="app">
      <Header />
      <Tabs />
      <Routes>
        <Route path="/" element={<MyMatches />} />
        <Route path="/football" element={<FootballMatches />} />
        <Route path="/basketball" element={<BasketballMatches />} />
        <Route path="/baseball" element={<BaseballMatches />} />
        <Route path="/hockey" element={<HockeyMatches />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
