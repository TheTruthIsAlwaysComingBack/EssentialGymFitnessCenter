// PaginaClases.jsx
import React from "react";
import SemanaClases from "../organisms/SemanaClases";
import BarraNav from "../organisms/BarraNav";
import Cabezal from "../molecules/Cabezal";
import "./PaginaClases.css";

const PaginaClases = () => (
  <div className="pagina-clases">
    <Cabezal />
    <SemanaClases />
    <BarraNav />
  </div>
);

export default PaginaClases;