import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "../login/Logueo";
import PaginaClases from "../../components/InicioClases/Plantilla/PaginaClases";

const Navegacion = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/clases" element={<PaginaClases />} />
      </Routes>
    </Router>
  );
};

export default Navegacion;
