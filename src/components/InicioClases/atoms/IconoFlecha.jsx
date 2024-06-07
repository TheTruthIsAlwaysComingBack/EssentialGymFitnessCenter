// IconoFlecha.jsx
import React from "react";
import { useNavigate } from "react-router-dom";
import "./IconoFlecha.css";

const IconoFlecha = ({ redirectTo }) => {
  const navigate = useNavigate();

  return (
    <i
      className="fa fa-arrow-left icono-flecha"
      onClick={() => navigate(redirectTo)}
    ></i>
  );
};

export default IconoFlecha;
