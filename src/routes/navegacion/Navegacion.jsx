import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "../login/Logueo";
import PaginaClases from "../Clases/PaginaClases";
import PaginaSubscripciones from "../Suscripciones/PaginaSubscripciones";
import ServicioAlCliente from "../ServicioAlCliente/ServicioAlCliente";
import Entrenadores from "../Entrenadores/Entrenadores";
import Comunidad from "../Comunidad/Comunidad";

const Navegacion = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/Clases" element={<PaginaClases/>} />
        <Route path="/Suscripciones" element={<PaginaSubscripciones/>} />
        <Route path="/ServicioAlCliente" element={<ServicioAlCliente/>} />
        <Route path="/Entrenadores" element={<Entrenadores/>} />
        <Route path="/Comunidad" element={<Comunidad/>} />
      </Routes>
    </Router>
  );
};

export default Navegacion;
