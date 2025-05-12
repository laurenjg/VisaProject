import React, { useState } from "react";
import { MapContainer, TileLayer, GeoJSON } from "react-leaflet";
import "leaflet/dist/leaflet.css";
// import worldGeoJSON from "../data/countries.geojson"; // Download GeoJSON file

function MapPage() {
  const [selectedCountry, setSelectedCountry] = useState(null);

  const onEachCountry = (feature, layer) => {
    layer.on("click", () => {
      setSelectedCountry(feature.properties.name);
    });
    layer.bindPopup(feature.properties.name);
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
      <h1>World Map</h1>
      {selectedCountry && <h2>Selected Country: {selectedCountry}</h2>}
      <MapContainer center={[20, 0]} zoom={2} style={{ height: "500px", width: "80%" }}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        />
      </MapContainer>
    </div>
  );
}

export default MapPage;