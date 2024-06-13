import React from "react";
import MensajeVentanaGracias from "./MensajeVentanaGracias";
import BotonAceptarGracias from "./BotonAceptarGracias";
import "./VentanaGracias.css"

const VentanaGracias = ({ onClose, verSuscripciones }) => (
  <div className="VentanaGracias">
    <div className="VentanaGraciasContenido">
      <MensajeVentanaGracias
        titulo="GRACIAS!!"
        mensaje="Tu suscripción se guardo en tu perfil."
      />
      <BotonAceptarGracias
        text="VER SUSCRIPCIÓN"
        onClick={verSuscripciones}
        type="primary"
      />
      <BotonAceptarGracias
        text="ACEPTAR"
        onClick={onClose}
        type="secondary"
      />
    </div>
  </div>
);

export default VentanaGracias;
