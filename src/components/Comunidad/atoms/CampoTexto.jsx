// CampoTexto.jsx
import React from "react";
import "./CampoTexto.css";

const CampoTexto = ({ value, onChange }) => (
  <input
    type="text"
    className="campo-texto"
    value={value}
    onChange={onChange}
    placeholder="Escribe aquí..."
  />
);

export default CampoTexto;
