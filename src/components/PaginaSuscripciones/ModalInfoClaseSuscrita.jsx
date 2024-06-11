import React from "react";
import CoachesPage from "../ContenidoBotonInfo/TarjetaEntrenadores/CoachesPage";
import TarjetaDesClase from "../ContenidoBotonInfo/TarjetaDescripciónClase/TarjetaDesClase";
import TarjetaClaseSeleccionada from "../TarjetaClaseSeleccionada/TarjetaClaseSeleccionada";
/* import "./ModalInfoClaseSuscrita.css"; */

const ModalInfoClaseSuscrita = ({ isOpen, onClose, classData, onCancel }) => {
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
          <TarjetaDesClase clase={classData} />
          <CoachesPage />
          <TarjetaClaseSeleccionada classData={classData} onCancel={onCancel} />
        </div>
        <div className="linea-blanca"></div>
      </div>
    </div>
  );
};

export default ModalInfoClaseSuscrita;
