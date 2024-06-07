import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "../login/Logueo";
import Registrarse from "../register/Registrarse";

const Navegacion = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/registrarse" element={<Registrarse />} />
      </Routes>
    </Router>
  );
};

export default Navegacion;
