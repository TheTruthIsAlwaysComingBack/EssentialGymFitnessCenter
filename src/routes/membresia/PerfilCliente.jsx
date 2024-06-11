import React from "react";
import InformacionUsuario from "../../components/DatosUsuario/InformacionUsuario";
import "./PerfilCliente.css";
import Header from "../../components/header/Header";

const PerfilCliente = () => {
  return (
    <div className="perfil-container">
      <Header seccion="Perfil" />
      <InformacionUsuario />
    </div>
  );
};

export default PerfilCliente;
