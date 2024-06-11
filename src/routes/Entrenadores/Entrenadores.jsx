import React from "react";
/* import EntrenadoresTemplate from "../../components/Entrenadores/EntrenadoresTemplate"; */
import EntrenadoresTemplate from "../../components/ModalInfoEntrenadorSeleccionado/EntrenadoresTemplate";

const Entrenadores = () => {
  const handleSelectCoach = (coach) => {
    // Aquí puedes definir qué hacer cuando se selecciona un entrenador
    console.log("Entrenador seleccionado:", coach);
  };

  return <EntrenadoresTemplate onSelectCoach={handleSelectCoach} />;
};

export default Entrenadores;
