// CoachesSection.jsx
import React from 'react';
import CoachCard from './CoachCard';
import './CoachesSection.css';

const CoachesSection = ({ coach }) => {
  return (
    <div className="coaches-section">
      <h2>Coach</h2>
      <div className="coaches-container">
        <CoachCard
          image={coach.image}
          name={coach.nameTrainer}
          specialty={coach.TrainerSpecialty}
        />
      </div>
    </div>
  );
};

export default CoachesSection;
