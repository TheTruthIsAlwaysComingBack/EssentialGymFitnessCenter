import React from "react";
import ClasePendienePabSubscribciones from "./ClasePendienePabSubscribciones";
import "./ListaClaPendiantePagSubs.css";

const ListaClaPendiantePagSubs = ({ clases, onClaseClick }) => (
  <div className="ListaClaPendiantePagSubs">
    {clases.map(clase => (
      <ClasePendienePabSubscribciones key={clase.id} clase={clase} onClick={() => onClaseClick(clase)} />
    ))}
  </div>
);

export default ListaClaPendiantePagSubs;
