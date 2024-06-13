import React from "react";
import "./IngredienteComida.css";

const IngredienteComida = ({ ingredientes }) => (
  <div className="IngredienteComida">
    <h3>Ingredientes</h3>
    <ul>
      {ingredientes.map((ingrediente, index) => (
        <li key={index}>{ingrediente}</li>
      ))}
    </ul>
  </div>
);

export default IngredienteComida;
