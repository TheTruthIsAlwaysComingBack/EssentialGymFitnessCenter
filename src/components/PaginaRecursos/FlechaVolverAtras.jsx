import React from "react";
import "./FlechaVolverAtras.css";

const FlechaVolverAtras = ({ onClick }) => (
  <button className="FlechaVolverAtras" onClick={onClick}>
    ←
  </button>
);

export default FlechaVolverAtras;
