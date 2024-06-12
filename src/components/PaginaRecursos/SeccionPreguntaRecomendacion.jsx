import React from "react";
import PreguntaRecomendacion from "./PreguntaRecomendacion";
import "./SeccionPreguntaRecomendacion.css";

const SeccionPreguntaRecomendacion = ({ pregunta, respuesta }) => (
  <div className="SeccionPreguntaRecomendacion">
    <PreguntaRecomendacion pregunta={pregunta} respuesta={respuesta} />
  </div>
);

export default SeccionPreguntaRecomendacion;
