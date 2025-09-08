import React, { useEffect, useState } from 'react';

const UserProfile = () => {
  const [emoji, setEmoji] = useState("");
  const [country, setCountry] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchFlag = async () => {
      try {
        const res = await fetch("http://localhost:3000/api/location");
        const data = await res.json();
        setEmoji(data.emoji);
        setCountry(data.country);
      } catch (err) {
        setError("Failed to load location.");
        console.error(err);
      }
    };

    fetchFlag();
  }, []);

  return (
    <div style={{ fontSize: "2rem" }}>
      {error ? error : emoji ? `${emoji} (${country})` : "Loading..."}
    </div>
  );
};

export default UserProfile;