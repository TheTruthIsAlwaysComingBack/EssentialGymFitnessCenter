import React from "react";
import EntrenadoresTemplate from "../../components/ModalInfoEntrenadorSeleccionado/EntrenadoresTemplate";
import Header from "../../components/header/Header";
import "./Entrenadores.css";

const Entrenadores = () => {
  const handleSelectCoach = (coach) => {
    console.log("Entrenador seleccionado:", coach);
  };

  return (
    <div className="container-entrenador">
      <Header seccion="Entrenadores" />
      <EntrenadoresTemplate onSelectCoach={handleSelectCoach} />;
    </div>
  );
};

export default Entrenadores;
