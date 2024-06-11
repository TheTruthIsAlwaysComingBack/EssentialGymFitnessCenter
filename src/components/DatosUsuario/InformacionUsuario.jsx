import React from "react";
import "./InformacionUsuario.css";
import Membresia from "./Membresia";
import DatosUsuario from "./DatosUsuario";

const InformacionUsuario = () => {
  return (
    <div className="contenido-usuario">
      <DatosUsuario />
      <Membresia />
    </div>
  );
};

export default InformacionUsuario;
