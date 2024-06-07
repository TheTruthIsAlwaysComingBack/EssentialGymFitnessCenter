// DiaClases.jsx
import React from "react";
import TarjetaClase from "../molecules/TarjetaClase";
import "./DiaClases.css";

const DiaClases = ({ dia, clases }) => (
  <div className="dia-clases">
    <h1 className="titulo-dia">{dia}</h1>
    <div className="clases-contenedor">
      {clases.map((clase, index) => (
        <TarjetaClase
          key={index}
          clase={clase.Clase}
          descripcion={clase.DescripcionClase}
          onClick={() => alert(`Más información sobre: ${clase.Clase}`)}
        />
      ))}
    </div>
  </div>
);

export default DiaClases;
