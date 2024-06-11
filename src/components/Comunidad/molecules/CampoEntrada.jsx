// CampoEntrada.jsx
import React from "react";
import CampoTexto from "../atoms/CampoTexto";
import BotonEnviar from "../atoms/BotonEnviar";
import "./CampoEntrada.css";

const CampoEntrada = ({ value, onChange, onClick }) => (
  <div className="campo-entrada">
    <CampoTexto value={value} onChange={onChange} />
    <BotonEnviar onClick={onClick} />
  </div>
);

export default CampoEntrada;
