import React from "react";
import "./TextoEntrenador.css";

const TextoEntrenador = ({ text, className }) => (
  <p className={`TextoEntrenador ${className}`}>{text}</p>
);

export default TextoEntrenador;
