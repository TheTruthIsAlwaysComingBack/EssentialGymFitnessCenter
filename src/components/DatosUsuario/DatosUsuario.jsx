import React from "react";
import "./DatosUsuario.css";

const DatosUsuario = ({ user }) => {
  if (!user) return <div>Loading...</div>;

  return (
    <div className="info-principal">
      <div className="icono-usuario">
        <img src={user.foto} alt={user.nombre} />
      </div>
      <div className="caracteristicas">
        <p className="name no-margin">{user.nombre}</p>
        <div className="descripcion-estado">
          <p className="estado no-margin">{user.estado}</p>
          <p className="edad no-margin">{user.edad}</p>
          <p className="sexo no-margin">{user.sexo}</p>
        </div>
      </div>
    </div>
  );
};

export default DatosUsuario;
