import React from "react";
import MensaNoHora from "./MensaNoHora";
import BotonAcepNoHora from "./BotonAcepNoHora";
import "./ModalNoSeleHora.css"

const ModalNoSeleHora = ({ isOpen, onClose, mensaje }) => {
  if (!isOpen) return null;
  return (
    <div className="ModalNoSeleHoraOverlay">
      <div className="ModalNoSeleHoraContent">
        <MensaNoHora text={mensaje} />
        <BotonAcepNoHora text="ACEPTAR" onClick={onClose} />
      </div>
    </div>
  );
};

export default ModalNoSeleHora;
