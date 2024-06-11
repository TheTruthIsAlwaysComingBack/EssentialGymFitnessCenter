// Mensaje.jsx
import React from "react";
import IconoUsuario from "../atoms/IconoUsuario";
import MensajeTexto from "../atoms/MensajeTexto";
import HoraMensaje from "../atoms/HoraMensaje";
import "./Mensaje.css";

const Mensaje = ({ texto, hora }) => (
  <div className="mensaje">
    <IconoUsuario />
    <div>
      <MensajeTexto texto={texto} />
      <HoraMensaje hora={hora} />
    </div>
  </div>
);

export default Mensaje;
