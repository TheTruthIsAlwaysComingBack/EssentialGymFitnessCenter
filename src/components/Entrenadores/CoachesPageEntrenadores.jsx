import React, { useState, useEffect } from "react";
import CoachesSectionEntrenadores from "./CoachesSectionEntrenadores";
import "./CoachesPageEntrenadores.css";

const CoachesPageEntrenadores = ({ onSelectCoach }) => {
  const [coaches, setCoaches] = useState([]);

  useEffect(() => {
    fetch("https://663d4e0617145c4d8c3937bf.mockapi.io/moreentrenadores")
      .then((response) => response.json())
      .then((data) => {
        setCoaches(data);
      });
  }, []);

  return (
    <div className="CoachesPageEntrenadores">
      {coaches.length > 0 ? (
        <CoachesSectionEntrenadores
          coaches={coaches}
          onSelectCoach={onSelectCoach}
        />
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default CoachesPageEntrenadores;
