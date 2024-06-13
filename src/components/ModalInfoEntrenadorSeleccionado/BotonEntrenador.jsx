import React from "react";
import "./BotonEntrenador.css";

const BotonEntrenador = ({ text, onClick }) => (
  <button className="BotonEntrenador" onClick={onClick}>
    {text}
  </button>
);

export default BotonEntrenador;
