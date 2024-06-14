import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./RutinaDetalles.css";
import Header from "./Header";

const RutinaDetalles = () => {
  const { id } = useParams();
  const [rutina, setRutina] = useState(null);

  useEffect(() => {
    const fetchRutina = async () => {
      try {
        const response = await fetch(
          `https://663d4e0617145c4d8c3937bf.mockapi.io/rutina/${id}`
        );
        if (!response.ok) {
          throw new Error("Error al cargar los detalles de la rutina");
        }
        const data = await response.json();
        setRutina(data);
      } catch (error) {
        console.error("Error fetching rutina:", error);
      }
    };

    fetchRutina();
  }, [id]);

  if (!rutina || !rutina.rutina) {
    return <div>Cargando...</div>;
  }

  return (
    <div className="rutina-detalles">
      <Header seccion="Rutinas Comerciales" />
      <div className="rutina-container-detalles">
        <h2>{rutina.NombreRutina}</h2>
        {Object.entries(rutina.rutina).map(([dia, ejercicios]) => (
          <div key={dia}>
            <h3>{dia.toUpperCase()}</h3>
            {Object.entries(ejercicios).map(([grupo, ejerciciosGrupo]) => (
              <div key={grupo}>
                <h4>{grupo}</h4>
                <ul>
                  {ejerciciosGrupo?.ejercicios?.map((ejercicio, index) => (
                    <li key={index}>
                      <p>
                        <strong>{ejercicio.tipo}</strong>: {ejercicio.series}{" "}
                        series de {ejercicio.repeticiones} repeticiones
                      </p>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default RutinaDetalles;
