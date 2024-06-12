import React, { useState, useEffect} from 'react';
import './ButtonEntrenadores.css';

const ButtonEntrenadores = () => {

  const [entrenadores, setEntrenadores] = useState([]);

  useEffect(() => {
    // Reemplaza la URL con la de tu API
    fetch('https://661038830640280f219c9b3d.mockapi.io/api/v2/users')
      .then(response => response.json())
      .then(data => setEntrenadores(data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    
    <div className='entre-container'>
      {entrenadores.map(entrenador => (
        <div key={entrenador.id} className="entre-button">
          <img src={entrenador.avatar} alt={entrenador.name} className="profile-image" />
          <p className="entre-name">{entrenador.name}</p>
        </div>
      ))}
    </div>
    
  )
}

export default ButtonEntrenadores;