// SemanaClases.jsx
import React, { useState, useEffect } from "react";
import DiaClases from "./DiaClases";
import "./SemanaClases.css";

const SemanaClases = () => {
  const [clases, setClases] = useState([]);

  useEffect(() => {
    fetch("https://663d4e0617145c4d8c3937bf.mockapi.io/subscripcion")
      .then((response) => response.json())
      .then((data) => {
        const diasDeLaSemana = [
          "Lunes",
          "Martes",
          "Miércoles",
          "Jueves",
          "Viernes",
          "Sábado",
        ];
        const clasesPorDia = diasDeLaSemana.map((dia) => {
          const cantidadClases = Math.floor(Math.random() * data.length) + 1;
          const clasesDia = data.slice(0, cantidadClases);
          return { dia, clases: clasesDia };
        });
        setClases(clasesPorDia);
      });
  }, []);

  return (
    <div className="semana-clases">
      {clases.map((diaClases, index) => (
        <DiaClases key={index} dia={diaClases.dia} clases={diaClases.clases} />
      ))}
    </div>
  );
};

export default SemanaClases;
