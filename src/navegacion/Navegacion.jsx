import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import PaginaClases from "../components/InicioClases/Plantilla/PaginaClases";
import Registrarse from "../routes/register/Registrarse";
import Logueo from "../routes/login/Logueo";
import Chat from "../routes/chatbot/Chat";
import PaginaSubscripciones from "../routes/Suscripciones/PaginaSubscripciones";
import ServicioAlCliente from "../routes/ServicioAlCliente/ServicioAlCliente";
import Entrenadores from "../routes/Entrenadores/Entrenadores";
import Comunidad from "../routes/Comunidad/Comunidad";
import PerfilCliente from "../routes/membresia/PerfilCliente";

const Navegacion = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Logueo />} />
        <Route path="/clases" element={<PaginaClases />} />
        <Route path="/register" element={<Registrarse />} />
        <Route path="/chat" element={<Chat />} />
        <Route path="/suscripciones" element={<PaginaSubscripciones />} />
        <Route path="/servicioalcliente" element={<ServicioAlCliente />} />
        <Route path="/entrenadores" element={<Entrenadores />} />
        <Route path="/comunidad" element={<Comunidad />} />
        <Route path="perfil" element={<PerfilCliente />} />
      </Routes>
    </Router>
  );
};

export default Navegacion;
