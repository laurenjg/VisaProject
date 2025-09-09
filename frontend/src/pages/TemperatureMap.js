import React, { useEffect, useState, useRef } from "react";
import { MapContainer, TileLayer, Polygon, GeoJSON } from "react-leaflet";
import "leaflet/dist/leaflet.css";
// . is up one folder, .. is up two folders
import { statesData } from "../data/statesData.js";
import countryData from "../data/countryData.json";

// import worldGeoJSON from "../data/countries.geojson"; // Download GeoJSON file

function TempMapPage() {
  const [selectedCountry, setSelectedCountry] = useState(null);

  function getColour(name) {
    return name === "France" ? "orange" : "pink";
  }

  const countryStyle = (feature) => {
    const isSelected = feature.properties.name === selectedCountry;

    return {
      fillColor: getColour(feature.properties.name),
      weight: 2,
      opacity: 1,
      color: "white",
      fillOpacity: isSelected ? 0.7 : 0.2, // stay darker if selected
    };
  };

  const onEachCountry = (feature, layer) => {
    layer.on({
      mouseover: (e) => {
        if (feature.properties.name !== selectedCountry) {
          e.target.setStyle({
            fillColor: getColour(feature.properties.name),
            weight: 2,
            opacity: 1,
            color: "white",
            fillOpacity: 0.7,
          });
        }
      },
      mouseout: (e) => {
        if (feature.properties.name !== selectedCountry) {
          e.target.setStyle(countryStyle(feature)); // revert to base style
        }
      },
      click: () => {
        setSelectedCountry(feature.properties.name);
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
          url="https://api.maptiler.com/maps/dataviz/256/{z}/{x}/{y}.png?key=rqkl51RXYqAgmuLPTELJ"
          attribution='&copy; <a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>'
        />
        <GeoJSON
          key={selectedCountry} // Force re-render on selectedCountry change
          data={countryData.features}
          style={countryStyle}
          onEachFeature={onEachCountry}
        />
      </MapContainer>
    </div>
  );
}

export default TempMapPage;
