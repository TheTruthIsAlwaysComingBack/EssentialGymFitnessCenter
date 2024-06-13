import React, { useState } from "react";
import HeadingEntrenadores from "../Entrenadores/HeadingEntrenadores";
import CoachesPageEntrenadores from "../Entrenadores/CoachesPageEntrenadores";
import VentanaPerfilEntrenador from "./VentanaPerfilEntrenador";
import "./EntrenadoresTemplate.css";

const EntrenadoresTemplate = ({ onSelectCoach }) => {
  const [selectedCoach, setSelectedCoach] = useState(null);

  const handleSelectCoach = (coach) => {
    setSelectedCoach(coach);
    if (onSelectCoach) {
      onSelectCoach(coach);
    }
  };

  const handleCloseProfile = () => {
    setSelectedCoach(null);
  };

  return (
    <div className="EntrenadoresTemplate">
      <HeadingEntrenadores text="" level={1} />
      <CoachesPageEntrenadores onSelectCoach={handleSelectCoach} />
      {selectedCoach && (
        <VentanaPerfilEntrenador
          entrenador={selectedCoach}
          onClose={handleCloseProfile}
        />
      )}
    </div>
  );
};

export default EntrenadoresTemplate;
