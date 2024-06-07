// Cabezal.jsx
import React from "react";
import IconoFlecha from "../atoms/IconoFlecha";
import IconoUsuario from "../atoms/IconoUsuario";
import "./Cabezal.css";

const Cabezal = () => (
  <div className="cabezal">
    <IconoFlecha redirectTo="/" />
    <div className="titulo">
      <h1>Clases</h1>
      <p>Clases de la semana</p>
    </div>
    <IconoUsuario redirectTo="/perfil" />
  </div>
);

export default Cabezal;
