import React from "react";
import "./CoachCard.css";

const CoachCard = ({ image, name, specialty }) => {
  return (
    <div className="coach-card" style={{ backgroundImage: `url(${image})` }}>
      <div className="coach-info">
        <h3>{name}</h3>
        <h5>{specialty}</h5>
      </div>
    </div>
  );
};

export default CoachCard;
