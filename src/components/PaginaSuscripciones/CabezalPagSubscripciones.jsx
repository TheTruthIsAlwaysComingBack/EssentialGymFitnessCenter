import React from "react";
import FlechaAtrasPagSubscripciones from "./FlechaAtrasPagSubscripciones";
import TituloPagSubscripciones from "./TituloPagSubscripciones";
import "./CabezalPagSubscripciones.css"

const CabezalPagSubscripciones = () => (
  <div className="CabezalPagSubscripcionesPagSubs">
    <FlechaAtrasPagSubscripciones />
    <TituloPagSubscripciones text="Suscripciones" />
  </div>
);

export default CabezalPagSubscripciones;
