import React from 'react';
import './CardRutina.css';
import Rutina1 from '../../assets/Rutina1.png';

const CardRutina = () => {
  const rutina = "Cycling Challenge";

  return (
    <button className='rutina-container'>
      <img src={Rutina1} alt="Cycling Challenge" className='rutina-image' />
      <p className='rutina-text'>{rutina}</p>
    </button>
  );
};

export default CardRutina;
