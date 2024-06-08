import React from "react";
import ClasePendienePabSubscribciones from "./ClasePendienePabSubscribciones";
import "./ListaClaPendiantePagSubs.css";

const ListaClaPendiantePagSubs = ({ clases }) => (
  <div className="ListaClaPendiantePagSubs">
    {clases.map((clase) => (
      <ClasePendienePabSubscribciones key={clase.id} clase={clase} />
    ))}
  </div>
);

export default ListaClaPendiantePagSubs;
