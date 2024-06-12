// PaginaClases.jsx
import React from "react";
import SemanaClases from "../organisms/SemanaClases";
import Header from "../../header/Header";
import "./PaginaClases.css";

const PaginaClases = () => (
  <div className="pagina-clases">
    <Header seccion="Clases" />
    <SemanaClases />
  </div>
);

export default PaginaClases;
