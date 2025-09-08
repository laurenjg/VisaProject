import logo from './logo.svg';
import './App.css';
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; // ✅ Correct import
import Home from "./pages/Home";
import Map from "./pages/Map";
import Visa from "./pages/Visa"; 
import UserProfile from "./pages/UserProfile"; 
import TempMap from "./pages/TemperatureMap";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/user" element={<UserProfile />} />
        <Route path="/map" element={<Map />} />
        <Route path="/tempmap" element={<TempMap />} />
        <Route path="/visa" element={<Visa />} />
      </Routes>
    </Router>
  );
}

export default App;
