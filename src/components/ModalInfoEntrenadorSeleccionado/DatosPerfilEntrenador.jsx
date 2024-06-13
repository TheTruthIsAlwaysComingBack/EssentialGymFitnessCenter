import React from "react";
import ImagenPerfilEntrenador from "./ImagenPerfilEntrenador";
import TextoEntrenador from "./TextoEntrenador";
import "./DatosPerfilEntrenador.css";

const DatosPerfilEntrenador = ({ entrenador }) => (
  <div className="DatosPerfilEntrenador">
    <div className="DatosPerfilEntrenador-gui">
      <ImagenPerfilEntrenador
        src={entrenador.image}
        alt={entrenador.nameTrainer}
      />
      <div className="info">
        <TextoEntrenador
          text={entrenador.nameTrainer}
          className="NombreEntrenador"
        />
        <TextoEntrenador
          text={entrenador.CorreoEntrenador}
          className="CorreoEntrenador"
        />
      </div>
    </div>
    <div className="stats">
      <TextoEntrenador
        text={`${entrenador.Peso} Kg`}
        className="PesoEntrenador"
      />
      <TextoEntrenador
        text={`${entrenador.Altura} m`}
        className="AlturaEntrenador"
      />
      <TextoEntrenador
        text={`${entrenador.Edad} años`}
        className="EdadEntrenador"
      />
    </div>
  </div>
);

export default DatosPerfilEntrenador;
