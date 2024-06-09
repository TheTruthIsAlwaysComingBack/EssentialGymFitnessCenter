import React from "react";
import "./CoachCardEntrenador.css";

const CoachCardEntrenador = ({ image, name, specialty, onClick }) => {
  return (
    <div
      className="CoachCardEntrenador"
      style={{ backgroundImage: `url(${image})` }}
      onClick={onClick}
    >
      <div className="CoachInfoEntrenador">
        <h3>{name}</h3>
        <h5>{specialty}</h5>
      </div>
    </div>
  );
};

export default CoachCardEntrenador;
