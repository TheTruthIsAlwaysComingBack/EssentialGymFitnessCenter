import React from "react";
import "./NombreSeccion.css";

const NombreSeccion = ({ nombre }) => {
  return <h1 className="header-title no-margin">{nombre}</h1>;
};

export default NombreSeccion;
