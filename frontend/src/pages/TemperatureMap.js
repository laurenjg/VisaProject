import React, { useEffect, useState, useRef } from "react";
import { MapContainer, TileLayer, Polygon, GeoJSON } from "react-leaflet";
import "leaflet/dist/leaflet.css";
// . is up one folder, .. is up two folders
import { statesData } from "../data/statesData.js";
import countryData from "../data/countryData.json";
import "./TemperatureMap.css";

// import worldGeoJSON from "../data/countries.geojson"; // Download GeoJSON file

function TempMapPage() {
  const [selectedCountry, setSelectedCountry] = useState(null);

  function getColour(name) {
    return name === "France" ? "orange" : "pink";
  }

  const countryStyle = (feature) => {
    return {
      fillColor: getColour(feature.properties.name),
      weight: 2,
      opacity: 1,
      color: "white",
      fillOpacity: 0.2,
    };
  };

  const onEachCountry = (feature, layer) => {
    layer.on({
      mouseover: (e) => {
        const layer = e.target;
        layer.setStyle({
          fillColor: getColour(feature.properties.name),
          weight: 2,
          opacity: 1,
          color: "white",
          fillOpacity: 0.7,
        });
      },
      mouseout: (e) => {
        const layer = e.target;
        layer.setStyle({
          fillColor: getColour(feature.properties.name),
          weight: 2,
          opacity: 1,
          color: "white",
          fillOpacity: 0.2,
        });
      },
      click: (e) => {
        setSelectedCountry(feature.properties.name);
        const layer = e.target;
        layer.setStyle({
          fillColor: getColour(feature.properties.name),
          weight: 2,
          opacity: 1,
          color: "white",
          fillOpacity: 0.7,
        });
      },
    });
  };

  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <h1>World Map</h1>
      {selectedCountry && <h2>Selected Country: {selectedCountry}</h2>}
      <MapContainer
        center={[20, 0]}
        zoom={2}
        style={{ height: "500px", width: "90%" }}
      >
        <TileLayer // OpenStreetMap tiles - cloud.maptiller
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        />
        <GeoJSON
          data={countryData.features}
          style={countryStyle}
          onEachFeature={onEachCountry}
        />
      </MapContainer>
    </div>
  );
}

export default TempMapPage;
