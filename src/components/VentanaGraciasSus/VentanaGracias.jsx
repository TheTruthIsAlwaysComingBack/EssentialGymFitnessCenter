import React from "react";
import MensajeVentanaGracias from "./MensajeVentanaGracias";
import BotonAceptarGracias from "./BotonAceptarGracias";
import "./VentanaGracias.css";

const VentanaGracias = ({ onClose }) => (
  <div className="VentanaGracias">
    <div className="VentanaGraciasContenido">
      <MensajeVentanaGracias
        titulo="GRACIAS!"
        mensaje="Te suscribiste a una clase."
      />

      <BotonAceptarGracias text="ACEPTAR" onClick={onClose} type="secondary" />
    </div>
  </div>
);

export default VentanaGracias;
