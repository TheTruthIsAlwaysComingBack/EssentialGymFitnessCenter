import React, { useState } from "react";
import TextoEntrenador from "./TextoEntrenador";
import InputOpinion from "./InputOpinion";
import BotonEntrenador from "./BotonEntrenador";
import "./OpinionesEntrenador.css";

const OpinionesEntrenador = ({ opiniones, onAddOpinion }) => {
  const [newOpinion, setNewOpinion] = useState("");

  const handleAddOpinion = () => {
    onAddOpinion(newOpinion);
    setNewOpinion("");
  };

  return (
    <div className="OpinionesEntrenador">
      <TextoEntrenador
        text="Opiniones del entrenador"
        className="TituloSeccion"
      />
      {opiniones.map((opinion, index) => (
        <TextoEntrenador key={index} text={opinion} className="Opinion" />
      ))}
      <InputOpinion
        placeholder="Escribir opinión sobre el entrenador"
        value={newOpinion}
        onChange={(e) => setNewOpinion(e.target.value)}
      />
      <BotonEntrenador text="Enviar opinión" onClick={handleAddOpinion} />
    </div>
  );
};

export default OpinionesEntrenador;
