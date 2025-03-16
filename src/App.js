import logo from './logo.svg';
import './App.css';
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; // ✅ Correct import
import Home from "./pages/Home"; // ✅ Ensure file exists
import Map from "./pages/Map"; // ✅ Ensure file exists

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/map" element={<Map />} />
      </Routes>
    </Router>
  );
}

export default App;
