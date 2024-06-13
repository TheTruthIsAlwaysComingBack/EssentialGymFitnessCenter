import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "../login/Logueo";
import Desafios from "../Desafios/Desafios";
import Rutina from "../Rutina/Rutina";

const Navegacion = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/desafios" element={<Desafios />} />
        <Route path="/rutina" element={<Rutina />} />
      </Routes>
    </Router>
  );
};

export default Navegacion;
