import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "../login/Logueo";

const Navegacion = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
      </Routes>
    </Router>
  );
};

export default Navegacion;
