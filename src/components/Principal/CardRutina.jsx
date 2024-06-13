import React, { useState, useEffect } from 'react';
import './CardRutina.css';

const CardRutina = () => {
  const [rutinas, setRutinas] = useState([]);

  useEffect(() => {
    fetch("https://6611d8dc95fdb62f24edc940.mockapi.io/api/v2/ejercicios")
      .then((response) => response.json())
      .then((data) => setRutinas(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <div className='rutina-container'>
      {rutinas.map((rutina) => (
        <button key={rutina.id} className='rutina-button'>
          <img src={rutina.imagen} alt={rutina.nombre} className='rutina-image' />
          <p className='rutina-text'>{rutina.nombre}</p>
        </button>
      ))}
    </div>
  );
};

export default CardRutina;
