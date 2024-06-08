// CoachesPage.jsx
import React, { useState, useEffect } from 'react';
import CoachesSection from './CoachesSection';
import './CoachesPage.css';

const CoachesPage = () => {
  const [coach, setCoach] = useState(null);

  useEffect(() => {
    fetch('https://661037cf0640280f219c98d3.mockapi.io/api/gym/Trainer')
      .then((response) => response.json())
      .then((data) => {
        const randomCoach = data[Math.floor(Math.random() * data.length)];
        setCoach(randomCoach);
      });
  }, []);

  return (
    <div className="coaches-page">
      {coach ? (
        <CoachesSection coach={coach} />
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default CoachesPage;
