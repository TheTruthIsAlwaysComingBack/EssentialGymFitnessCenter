// ModalInfoClase.jsx
import React from "react";
import CoachesPage from "../../ContenidoBotonInfo/TarjetaEntrenadores/CoachesPage";
import TarjetaDesClase from "../../ContenidoBotonInfo/TarjetaDescripciónClase/TarjetaDesClase";
import TarjetaClaseASus from "../../ContenidoBotonInfo/TarjetaClaseASuscribirse/TarjetaClaseASus";
import VentanaGracias from "../../VentanaGraciasSus/VentanaGracias";
import "./ModalInfoClase.css";

const ModalInfoClase = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="close-button" onClick={onClose}>
          X
        </button>
        <div className="info-contenedor">
          <TarjetaDesClase />
          <CoachesPage />
          <TarjetaClaseASus />
        </div>
        <div className="linea-blanca"></div>
        <button className="boton-suscribir" onClick={() => alert("Suscrito!")}>
          SUSCRIBIRSE
        </button>
      </div>
    </div>
  );
};

export default ModalInfoClase;
