import React from "react";
import "./CancionMusica.css";

const CancionMusica = ({ title, duration }) => (
  <div className="CancionMusica">
    <div>
      <span className="titulo-cancion">{title}</span>
    </div>
    <span className="duracion-cancion">{duration}</span>
  </div>
);

export default CancionMusica;
