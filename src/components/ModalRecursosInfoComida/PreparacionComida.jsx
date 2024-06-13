import React from "react";
import Parrafo from "../PaginaRecursos/Parrafo";
import "./PreparacionComida.css";

const PreparacionComida = ({ preparacion }) => (
  <div className="PreparacionComida">
    <h3>Preparación</h3>
    {preparacion.split("\n").map((parrafo, index) => (
      <Parrafo key={index} text={parrafo} />
    ))}
  </div>
);

export default PreparacionComida;
