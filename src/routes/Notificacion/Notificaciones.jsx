import React from "react";
import NotificacionesComponente from "../../components/NotificacionesComponente/ContenedorNotificacion";
import Header from "../../components/header/Header";

const Notificaciones = () => {
  return (
    <div className="notificaciones-container">
      <Header seccion="Notificaciones" />
      <NotificacionesComponente />
    </div>
  );
};

export default Notificaciones;
