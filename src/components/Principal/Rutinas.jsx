import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Rutinas.css";

const Rutinas = () => {
  const [rutinas, setRutinas] = useState([]);

  useEffect(() => {
    const fetchRutinas = async () => {
      try {
        const response = await fetch(
          "https://663d4e0617145c4d8c3937bf.mockapi.io/rutina"
        );
        if (!response.ok) {
          throw new Error("Error al cargar los datos de las rutinas");
        }
        const data = await response.json();
        setRutinas(data);
      } catch (error) {
        console.error("Error fetching rutinas:", error);
      }
    };

    fetchRutinas();
  }, []);

  return (
    <div className="rutinas">
      <h2>Rutinas Comerciales</h2>
      <div className="rutinas-list">
        {rutinas.map((rutina) => (
          <Link
            to={`/rutina/${rutina.id}`}
            key={rutina.id}
            className="rutina-item"
          >
            <div className="imagen-rutina">
              <img src={rutina.Imagen} alt={rutina.NombreRutina} />
            </div>
            <p>{rutina.NombreRutina}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Rutinas;
