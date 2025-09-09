// scripts/generateCentroids.js

const fs = require("fs");
const path = require("path");
const centroid = require("@turf/centroid").default;

// Load your country GeoJSON
const inputPath = path.join(__dirname, "../frontend/src/data/countryData.json");
const outputPath = path.join(
  __dirname,
  "../frontend/src/data/countryCentroids.json"
);

const countryData = JSON.parse(fs.readFileSync(inputPath, "utf8"));

const centroids = countryData.features.map((feature) => {
  const center = centroid(feature);
  return {
    name: feature.properties.name,
    iso_a3: feature.properties["ISO3166-1-Alpha-3"],
    iso_a2: feature.properties["ISO3166-1-Alpha-2"],
    coordinates: center.geometry.coordinates, // [lon, lat]
  };
});

fs.writeFileSync(outputPath, JSON.stringify(centroids, null, 2));

console.log(`✅ Generated ${centroids.length} centroids -> ${outputPath}`);
