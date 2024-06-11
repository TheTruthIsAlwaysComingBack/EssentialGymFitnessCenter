// PaginaComunidad.jsx
import React, { useState, useEffect } from "react";
import EncabezadoPagina from "../organisms/EncabezadoPagina";
import ListaMensajes from "../organisms/ListaMensajes";
import CampoEntrada from "../molecules/CampoEntrada";
import "./PaginaComunidad.css";

const PaginaComunidad = () => {
  const [mensajes, setMensajes] = useState([]);
  const [mensaje, setMensaje] = useState("");

  useEffect(() => {
    fetch("https://661037cf0640280f219c98d3.mockapi.io/api/gym/Clases")
      .then((response) => response.json())
      .then((data) => {
        const randomIndex = Math.floor(Math.random() * data.length);
        const selectedMessages = data.slice(0, randomIndex + 1).map((msg) => ({
          texto: msg.Mensaje1,
          hora: new Date().toLocaleTimeString("es-ES", {
            hour: "2-digit",
            minute: "2-digit",
          }),
        }));
        setMensajes(selectedMessages);
      });
  }, []);

  const handleEnviarMensaje = () => {
    if (mensaje.trim()) {
      const nuevoMensaje = {
        texto: mensaje,
        hora: new Date().toLocaleTimeString("es-ES", {
          hour: "2-digit",
          minute: "2-digit",
        }),
      };
      setMensajes([...mensajes, nuevoMensaje]);
      setMensaje("");
    }
  };

  return (
    <div className="pagina-comunidad">
      <EncabezadoPagina titulo="COMUNIDAD" miembros={87} />
      <ListaMensajes mensajes={mensajes} />
      <CampoEntrada
        value={mensaje}
        onChange={(e) => setMensaje(e.target.value)}
        onClick={handleEnviarMensaje}
      />
    </div>
  );
};

export default PaginaComunidad;
