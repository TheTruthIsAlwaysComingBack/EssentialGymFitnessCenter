// ModalInfoClase.jsx
import React from "react";
import CoachesPage from "../../ContenidoBotonInfo/TarjetaEntrenadores/CoachesPage";
import TarjetaClaseASus from "../../ContenidoBotonInfo/TarjetaClaseASuscribirse/TarjetaClaseASus";
import VentanaGracias from "../../VentanaGraciasSus/VentanaGracias";
import "./ModalInfoClase.css";

const ModalInfoClase = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <div className="CabezalModalInfoClase">
          <h4 className="TituloModalInfoClase">INFORMACIÓN DE LA CLASE</h4>
          <button className="close-button" onClick={onClose}>
            X
          </button>
        </div>
        <div className="info-contenedor">
          <CoachesPage />
          <TarjetaClaseASus />
        </div>
      </div>
    </div>
  );
};

export default ModalInfoClase;
