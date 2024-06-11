import React, { useState, useEffect } from "react";
import CoachesSectionEntrenadores from "./CoachesSectionEntrenadores";
import "./CoachesPageEntrenadores.css";

const CoachesPageEntrenadores = ({ onSelectCoach }) => {
  const [coaches, setCoaches] = useState([]);

  useEffect(() => {
    fetch("https://661037cf0640280f219c98d3.mockapi.io/api/gym/Trainer")
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
