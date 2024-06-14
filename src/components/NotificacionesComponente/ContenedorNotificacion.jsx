import React, { useState, useEffect } from "react";
import axios from "axios";
import "./ContenidoNotificacion.css";

const Notificaciones = () => {
  const [notificaciones, setNotificaciones] = useState(null);

  useEffect(() => {
    const fetchNotificaciones = async () => {
      try {
        const response = await axios.get(
          "https://663d4e0617145c4d8c3937bf.mockapi.io/notificacion"
        );
        const data = response.data.map((notificacion) => ({
          descripcion: notificacion.descripcion,
          imagen: notificacion.imagen,
          hora: "recientemente",
        }));
        setNotificaciones(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchNotificaciones();
  }, []);

  if (!notificaciones) return <div>Loading...</div>;

  return (
    <div className="contenido-notificaciones">
      {notificaciones.map((notificacion, index) => (
        <div key={index} className="notificacion">
          <div className="imagen-notificaciones">
            <img src={notificacion.imagen} alt="imagen de la notificacion" />
          </div>
          <div className="descripcion-not">
            <p className="info-not">{notificacion.descripcion}</p>
            <p className="hora">{notificacion.hora}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Notificaciones;
