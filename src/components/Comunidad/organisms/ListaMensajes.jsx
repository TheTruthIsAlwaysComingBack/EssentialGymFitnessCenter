// ListaMensajes.jsx
import React from "react";
import Mensaje from "../molecules/Mensaje";
import "./ListaMensajes.css";

const ListaMensajes = ({ mensajes }) => (
  <div className="lista-mensajes">
    {mensajes.map((msg, index) => (
      <Mensaje key={index} texto={msg.texto} hora={msg.hora} />
    ))}
  </div>
);

export default ListaMensajes;
