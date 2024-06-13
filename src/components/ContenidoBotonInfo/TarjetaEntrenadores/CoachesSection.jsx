import React from "react";
import CoachCard from "./CoachCard";
import "./CoachesSection.css";

const CoachesSection = ({ coaches }) => {
  return (
    <div className="coaches-section">
      <h2>Coach</h2>
      <div className="coaches-container">
        {coaches.map((coach) => (
          <CoachCard
            key={coach.id}
            image={coach.image}
            name={coach.nameTrainer}
            specialty={coach.TrainerSpecialty}
          />
        ))}
      </div>
    </div>
  );
};

export default CoachesSection;
