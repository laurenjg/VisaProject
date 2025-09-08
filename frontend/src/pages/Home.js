import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div style={{ textAlign: "center", padding: "50px" }}>
      <h1>Welcome to the World Map App</h1>
      <p>Click to explore visa options.</p>
      <Link to="/visa">
        <button style={{ padding: "10px 20px", fontSize: "16px" }}>Go to Visa</button>
      </Link>
      <p>Click the button below to explore the map.</p>
      <Link to="/map">
        <button style={{ padding: "10px 20px", fontSize: "16px" }}>Go to Map</button>
      </Link>
      <p>Or click here to find your perf destination based on temperature.</p>
      <Link to="/tempmap">
        <button style={{ padding: "10px 20px", fontSize: "16px" }}>Go to Temperature Map</button>
      </Link>
    </div>
  );
}

export default Home;