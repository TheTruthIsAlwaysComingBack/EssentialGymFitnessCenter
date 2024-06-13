import React from "react";
import MensajeConfiClase from "./MensajeConfiClase";
import "./ConfirmacionClases.css";

const ConfirmacionClases = ({ onClose }) => {
  return (
    <div className="ConfirmacionClases">
      <div className="ConfirmacionClasesContenido">
        <MensajeConfiClase
          titulo="GENIAL!!"
          text="No te olvides de llevar tus suplementos necesarios"
        />
        <button className="BotonAceptar" onClick={onClose}>
          Aceptar
        </button>
      </div>
    </div>
  );
};

export default ConfirmacionClases;
