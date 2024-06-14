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
import Recursos from "../routes/Recursos/Recursos";
import PerfilCliente from "../routes/membresia/PerfilCliente";
import Principal from "../routes/principal/Principal";
import CoachDetail from "../components/Principal/CoachDetail";
import RutinaDetalles from "../components/Principal/RutinaDetalles";
import Rutina from "../routes/Rutina/Rutina";
import Notificaciones from "../routes/Notificacion/Notificaciones";

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
        <Route path="/entrenador/:id" element={<CoachDetail />} />
        <Route path="/comunidad" element={<Comunidad />} />
        <Route path="/recursos" element={<Recursos />} />
        <Route path="/perfil" element={<PerfilCliente />} />
        <Route path="/principal" element={<Principal />} />
        <Route path="/rutina/:id" element={<RutinaDetalles />} />
        <Route path="/rutinaA" element={<Rutina />} />
        <Route path="/notificaciones" element={<Notificaciones />} />
      </Routes>
    </Router>
  );
};

export default Navegacion;
