import React from "react";
import "./ClasePendienePabSubscribciones.css";

const ClasePendienePabSubscribciones = ({ clase, onClick }) => {
  return (
    <div className="ClasePendienePabSubscribciones" onClick={onClick}>
      <span className="ClasePenPagSubscripcioens">{clase.Clase}</span>
      <i className="FlechaDerechaClasePend"> <h4>--→</h4> </i>
    </div>
  );
};

export default ClasePendienePabSubscribciones;
