// EncabezadoPagina.jsx
import React from "react";
import "./EncabezadoPagina.css";

const EncabezadoPagina = ({ titulo, miembros }) => (
  <div className="encabezado-pagina">
    <h3>{titulo}</h3>
    <h5>{miembros} Miembros</h5>
  </div>
);

export default EncabezadoPagina;
