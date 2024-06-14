import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./CoachesInfo.css";

const CoachesInfo = () => {
  const [entrenadores, setEntrenadores] = useState([]);
  const [visibleCoaches, setVisibleCoaches] = useState([]);

  useEffect(() => {
    const fetchEntrenadores = async () => {
      try {
        const response = await fetch(
          "https://663d4e0617145c4d8c3937bf.mockapi.io/entrenadores"
        );
        if (!response.ok) {
          throw new Error("Error al cargar los datos de los entrenadores");
        }
        const data = await response.json();
        setEntrenadores(data);
        setVisibleCoaches(data.slice(0, 4)); // Muestra solo los primeros 4
      } catch (error) {
        console.error("Error fetching entrenadores:", error);
      }
    };

    fetchEntrenadores();
  }, []);

  return (
    <div className="entrenadores">
      <div className="nav-entrenadores">
        <h2>Entrenadores</h2>
        <Link to="/entrenadores" className="ver-mas">
          Ver más
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="12"
            height="12"
            viewBox="0 0 24 24"
            fill="#fafafa"
            className="icon icon-tabler icons-tabler-filled icon-tabler-arrow-badge-right"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M7 6l-.112 .006a1 1 0 0 0 -.669 1.619l3.501 4.375l-3.5 4.375a1 1 0 0 0 .78 1.625h6a1 1 0 0 0 .78 -.375l4 -5a1 1 0 0 0 0 -1.25l-4 -5a1 1 0 0 0 -.78 -.375h-6z" />
          </svg>
        </Link>
      </div>
      <div className="entrenadores-list">
        {visibleCoaches.map((entrenador) => (
          <Link
            to={`/entrenador/${entrenador.id}`}
            key={entrenador.id}
            className="entrenador-item"
          >
            <div className="imagen-coaches">
              <img src={entrenador.image} alt={entrenador.name} />
            </div>
            <p>{entrenador.nickname}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CoachesInfo;
