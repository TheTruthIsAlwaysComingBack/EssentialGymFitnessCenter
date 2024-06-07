import React, { useState, useEffect } from 'react'
import CoachesSection from "./CoachesSection";
import "./CoachesPage.css";

const CoachesPage = () => {
  const [coaches, setCoaches] = useState([]);
  useEffect(() => {
    fetch("https://661037cf0640280f219c98d3.mockapi.io/api/gym/Trainer")
      .then((response) => response.json())
      .then((data) => setCoaches(data));
  }, []);
  return (
    <div className="coaches-page">
      {coaches.length > 0 ? (
        <CoachesSection coaches={coaches} />
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default CoachesPage;
