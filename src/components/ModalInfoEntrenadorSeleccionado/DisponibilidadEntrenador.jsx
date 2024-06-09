import React from "react";
import TextoEntrenador from "./TextoEntrenador";
import "./DisponibilidadEntrenador.css";

const DisponibilidadEntrenador = ({ entrenador }) => {
  const clases = [
    entrenador.Clase1,
    entrenador.Clase2,
    entrenador.Clase3,
    entrenador.Clase4,
  ].filter(Boolean);
  const dias = [
    entrenador.DiaDisponible1,
    entrenador.DiaDisponible2,
    entrenador.DiaDisponible3,
  ].filter(Boolean);
  const horarios = "09:00 a 12:00"; // Horario inventado

  return (
    <div className="DisponibilidadEntrenador">
      <TextoEntrenador text="Clases:" className="TituloSeccion" />
      {clases.map((clase, index) => (
        <TextoEntrenador key={index} text={clase} className="ClaseEntrenador" />
      ))}
      <TextoEntrenador text="Horarios:" className="TituloSeccion" />
      <TextoEntrenador text={horarios} className="HorarioEntrenador" />
      <TextoEntrenador text="Días:" className="TituloSeccion" />
      {dias.map((dia, index) => (
        <TextoEntrenador key={index} text={dia} className="DiaEntrenador" />
      ))}
    </div>
  );
};

export default DisponibilidadEntrenador;
