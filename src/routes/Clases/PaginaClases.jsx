// PaginaClases.jsx
import React from "react";
import SemanaClases from "../../components/InicioClases/organisms/SemanaClases";
import BarraNav from "../../components/InicioClases/organisms/BarraNav";
import Cabezal from "../../components/InicioClases/molecules/Cabezal";
import "./PaginaClases.css";

const PaginaClases = () => (
  <div className="pagina-clases">
    <Cabezal />
    <SemanaClases />
    <BarraNav />
  </div>
);

export default PaginaClases;