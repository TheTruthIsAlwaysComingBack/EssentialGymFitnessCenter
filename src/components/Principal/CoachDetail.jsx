import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Header from "./Header";
import "./CoachDetail.css";

const CoachDetail = () => {
  const { id } = useParams();
  const [entrenador, setEntrenador] = useState(null);

  useEffect(() => {
    const fetchEntrenador = async () => {
      try {
        const response = await fetch(
          `https://663d4e0617145c4d8c3937bf.mockapi.io/entrenadores/${id}`
        );
        if (!response.ok) {
          throw new Error("Error al cargar los datos del entrenador");
        }
        const data = await response.json();
        setEntrenador(data);
      } catch (error) {
        console.error("Error fetching entrenador:", error);
      }
    };

    fetchEntrenador();
  }, [id]);

  if (!entrenador) {
    return <div>Cargando...</div>;
  }

  return (
    <div className="container-info-eachEntrenador-general">
      <Header seccion={entrenador.name} />
      <div className="container-info-eachEntrenador">
        <div className="info-general-coach">
          <img
            className="entrenador-image"
            src={entrenador.image}
            alt={entrenador.name}
          />
          <div className="particion">
            <h2 className="entrenador-name">{entrenador.name}</h2>
            <p className="entrenador-email">{entrenador.CorreoEntrenador}</p>
          </div>
        </div>
        <div className="entrenador-info">
          <div className="entrenador-stats">
            <div className="entrenador-stat">
              {entrenador.Peso} <span>Peso</span>
            </div>
            <div className="entrenador-stat">
              {entrenador.Altura} <span>Altura</span>
            </div>
            <div className="entrenador-stat">
              {entrenador.Edad} <span>Edad</span>
            </div>
          </div>
          <div className="info-cat-entrenador">
            <div className="entrenador-classes">
              <h3>Clases</h3>
              {entrenador.Clases &&
                Object.values(entrenador.Clases).map((clase, index) => (
                  <p key={index}>{clase}</p>
                ))}
            </div>
            <div className="entrenador-horarios">
              <h3>Horarios</h3>
              <p>{entrenador.Horario}</p>
            </div>
            <div className="entrenador-dias">
              <h3>Días</h3>
              {entrenador.DiasDisponibles &&
                Object.values(entrenador.DiasDisponibles).map((dia, index) => (
                  <p key={index}>{dia}</p>
                ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoachDetail;
