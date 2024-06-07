// IconoUsuario.jsx
import React from "react";
import { useNavigate } from "react-router-dom";
import "./IconoUsuario.css";

const IconoUsuario = ({ redirectTo }) => {
  const navigate = useNavigate();

  return (
    <i
      className="fa fa-user icono-usuario"
      onClick={() => navigate(redirectTo)}
    ></i>
  );
};

export default IconoUsuario;
