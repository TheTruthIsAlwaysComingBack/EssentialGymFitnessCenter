// BotonEnviar.jsx
import React from "react";
import "./BotonEnviar.css";

const BotonEnviar = ({ onClick }) => (
  <button className="boton-enviar" onClick={onClick}>
    Enviar
    <i className="fa fa-paper-plane"></i>
  </button>
);

export default BotonEnviar;
