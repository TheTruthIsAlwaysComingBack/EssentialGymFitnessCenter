import React from "react";
import DatosPerfilEntrenador from "./DatosPerfilEntrenador";
import DisponibilidadEntrenador from "./DisponibilidadEntrenador";
import CalificacionEntrenador from "./CalificacionEntrenador";
import OpinionesEntrenador from "./OpinionesEntrenador";
import "./VentanaPerfilEntrenador.css";

const VentanaPerfilEntrenador = ({ entrenador, onClose }) => {
  const handleRate = (rating) => {
    // Aquí enviarías la calificación a la API
    console.log(`Calificación añadida: ${rating}`);
  };

  const handleAddOpinion = (opinion) => {
    // Aquí enviarías la nueva opinión a la API
    console.log(`Opinión añadida: ${opinion}`);
  };

  return (
    <div className="VentanaPerfilEntrenador">
      <div className="ContenidoPerfilEntrenador">
        <div className="CabezalPerfilEntrenador">
          <button className="FlechaVolverAtras" onClick={onClose}>
            ←
          </button>
          <h2>{entrenador.nameTrainer}</h2>
        </div>
        <DatosPerfilEntrenador entrenador={entrenador} />
        <DisponibilidadEntrenador entrenador={entrenador} />
        <CalificacionEntrenador onRate={handleRate} />
        <OpinionesEntrenador opiniones={[]} onAddOpinion={handleAddOpinion} />
      </div>
    </div>
  );
};

export default VentanaPerfilEntrenador;
