import React from "react";
import CoachCardEntrenador from "./CoachCardEntrenador";
import "./CoachesSectionEntrenadores.css";

const CoachesSectionEntrenadores = ({ coaches, onSelectCoach }) => {
  return (
    <div className="CoachesSectionEntrenadores">
      <div className="CoachesContainerEntrenadores">
        {coaches.map((coach) => (
          <CoachCardEntrenador
            key={coach.id}
            image={coach.image}
            name={coach.nameTrainer}
            specialty={coach.TrainerSpecialty}
            onClick={() => onSelectCoach(coach)}
          />
        ))}
      </div>
    </div>
  );
};

export default CoachesSectionEntrenadores;
