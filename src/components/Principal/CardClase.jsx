import React, { useState, useEffect } from "react";
import "./CardClase.css";

const CardClase = () => {
  const [clases, setClases] = useState([]);

  useEffect(() => {
    fetch("https://6611d8dc95fdb62f24edc940.mockapi.io/api/v2/ejercicios")
      .then((response) => response.json())
      .then((data) => setClases(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <div className="clase-container">
      {clases.map((clase) => (
        <button key={clase.id} className="clase-button">
          <img src={clase.imagen} alt={clase.nombre} className="clase-image" />
          <p className="clase-text">{clase.nombre}</p>
        </button>
      ))}
    </div>
  );
};

export default CardClase;
