// BotonInfo.jsx
import React from "react";
import "./BotonInfo.css";

const BotonInfo = ({ onClick }) => (
  <button className="boton-info" onClick={onClick}>
    Más Info
  </button>
);

export default BotonInfo;
