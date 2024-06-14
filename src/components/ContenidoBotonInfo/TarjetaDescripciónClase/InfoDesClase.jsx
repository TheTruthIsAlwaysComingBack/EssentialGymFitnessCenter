import React from "react";
import TituloInfoDesClase from "./TituloInfoDesClase";
import DescripInfoDesClase from "./DescripInfoDesClase";
import "./InfoDesClase.css";

const InfoDesClase = ({ clase, descripcion }) => (
  <div className="InfoDesClase">
    <TituloInfoDesClase texto={clase} />
    <DescripInfoDesClase texto={descripcion} />
  </div>
);

export default InfoDesClase;
