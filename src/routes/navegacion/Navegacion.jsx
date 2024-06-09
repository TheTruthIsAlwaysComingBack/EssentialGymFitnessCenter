import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "../login/Logueo";
import PaginaClases from "../../components/InicioClases/Plantilla/PaginaClases";
import PaginaSubscripciones from "../../components/PaginaSuscripciones/PaginaSubscripciones";
import ServicioAlCliente from "../ServicioAlCliente/ServicioAlCliente";
import Entrenadores from "../Entrenadores/Entrenadores";

const Navegacion = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/Clases" element={<PaginaClases/>} />
        <Route path="/Suscripciones" element={<PaginaSubscripciones/>} />
        <Route path="/ServicioAlCliente" element={<ServicioAlCliente/>} />
        <Route path="/Entrenadores" element={<Entrenadores/>} />
      </Routes>
    </Router>
  );
};

export default Navegacion;
