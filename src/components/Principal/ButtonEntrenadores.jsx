import React, { useState, useEffect } from 'react';
import './ButtonEntrenadores.css';

const ButtonEntrenadores = () => {
  const [entrenadores, setEntrenadores] = useState([]);

  useEffect(() => {
    fetch('https://661038830640280f219c9b3d.mockapi.io/api/v2/users')
      .then(response => response.json())
      .then(data => setEntrenadores(data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <div className='entre-container'>
      {entrenadores.map(entrenador => (
        <div key={entrenador.id} className="historia-instagram">
          <div className="historia-content">
            <img src={entrenador.avatar} alt={entrenador.name} className="profile-image" />
          </div>
          <p className="entre-name">{entrenador.name}</p>
        </div>
      ))}
    </div>
  );
}

export default ButtonEntrenadores;
