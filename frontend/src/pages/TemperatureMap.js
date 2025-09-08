import React, { useEffect, useState, useRef } from "react";
import { MapContainer, TileLayer, Polygon, GeoJSON } from "react-leaflet";
import "leaflet/dist/leaflet.css";
// . is up one folder, .. is up two folders
import { statesData } from "../statesData.js";

// import worldGeoJSON from "../data/countries.geojson"; // Download GeoJSON file

function TempMapPage() {
  const [selectedCountry, setSelectedCountry] = useState(null);

  //console.log(require.resolve("../statesData.js"));

  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <h1>World Map</h1>
      {selectedCountry && <h2>Selected Country: {selectedCountry}</h2>}
      <MapContainer
        center={[20, 0]}
        zoom={2}
        style={{ height: "500px", width: "80%" }}
      >
        <TileLayer // OpenStreetMap tiles - cloud.maptiller
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        />
        {statesData.features.map((state) => {
          const coordinates = state.geometry.coordinates[0].map((item) => [
            item[1],
            item[0],
          ]);

          return (
            <Polygon
              pathOptions={{
                fillColor: "blue",
                fillOpacity: 0.7,
                color: "white",
                weight: 2,
                dashArray: "3",
                opacity: 1,
              }}
              positions={coordinates}
              eventHandlers={{
                mouseover: (e) => {
                  const layer = e.target;
                  layer.setStyle({
                    fillOpacity: 5,
                    weight: 2,
                    color: "#666",
                    dashArray: "",
                  });
                },
                mouseout: (e) => {
                  const layer = e.target;
                  layer.setStyle({
                    fillColor: "blue",
                    fillOpacity: 0.7,
                    color: "white",
                    weight: 2,
                    dashArray: "3",
                    opacity: 1,
                  });
                },
                click: (e) => {
                  setSelectedCountry(state.properties.name);
                },
              }}
            />
          );
        })}
      </MapContainer>
    </div>
  );
}

export default TempMapPage;
