import React, { useState } from "react";
import EstrellasCalificacion from "./EstrellasCalificacion";
import BotonEntrenador from "./BotonEntrenador";
import TextoEntrenador from "./TextoEntrenador";
import "./CalificacionEntrenador.css";

const CalificacionEntrenador = ({ onRate }) => {
  const [rating, setRating] = useState(0);

  const handleRate = (newRating) => {
    setRating(newRating);
    onRate(newRating);
  };

  return (
    <div className="CalificacionEntrenador">
      <TextoEntrenador text="Calificar entrenador" className="TituloSeccion" />
      <EstrellasCalificacion rating={rating} onRate={handleRate} />
      <BotonEntrenador
        text="Añadir calificación"
        onClick={() => handleRate(rating)}
      />
    </div>
  );
};

export default CalificacionEntrenador;
