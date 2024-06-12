import React from "react";
import Membresia from "./Membresia";
import DatosUsuario from "./DatosUsuario";
import "./InformacionUsuario.css";

const InformacionUsuario = ({ user }) => {
  return (
    <div className="contenido-usuario">
      <DatosUsuario user={user} />
      <Membresia membership={user.membresia} />
    </div>
  );
};

export default InformacionUsuario;
