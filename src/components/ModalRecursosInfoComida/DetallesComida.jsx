import React from "react";
import IconoCronometro from "./IconoCronometro";
import IconoFuego from "./IconoFuego";
import "./DetallesComida.css";

const DetallesComida = ({ titulo, tiempo, calorias, imagen }) => (
  <div className="DetallesComida">
    <h2>{titulo}</h2>
    <div className="DetallesComidaInfo">
      <span>
        <IconoCronometro />
        {tiempo}
      </span>
      <span>
        <IconoFuego />
        {calorias}
      </span>
    </div>
    <div
      className="DetallesComidaImagen"
      style={{ backgroundImage: `url(${imagen})` }}
    ></div>
  </div>
);

export default DetallesComida;
