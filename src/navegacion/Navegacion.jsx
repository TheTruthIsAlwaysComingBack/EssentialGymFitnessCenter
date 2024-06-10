import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import PaginaClases from "../components/InicioClases/Plantilla/PaginaClases";
import Registrarse from "../routes/register/Registrarse";
import Logueo from "../routes/login/Logueo";
import Chat from "../routes/chatbot/Chat";

const Navegacion = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Logueo />} />
        <Route path="/clases" element={<PaginaClases />} />
        <Route path="/register" element={<Registrarse />} />
        <Route path="/chat" element={<Chat />} />
      </Routes>
    </Router>
  );
};

export default Navegacion;
