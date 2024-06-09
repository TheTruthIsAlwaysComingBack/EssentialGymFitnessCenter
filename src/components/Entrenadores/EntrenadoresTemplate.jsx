import React from "react";
import "./EntrenadoresTemplate.css";
import HeadingEntrenadores from "./HeadingEntrenadores";
import CoachesPageEntrenadores from "./CoachesPageEntrenadores";

const EntrenadoresTemplate = ({ onSelectCoach }) => (
  <div className="EntrenadoresTemplate">
    <HeadingEntrenadores text="Entrenadores" level={1} />
    <CoachesPageEntrenadores onSelectCoach={onSelectCoach} />
  </div>
);

export default EntrenadoresTemplate;
