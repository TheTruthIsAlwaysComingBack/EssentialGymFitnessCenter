import React from 'react';
import './TarjetaComida.css';

const TarjetaComida = ({ image, name, description, onClick }) => (
  <div className="TarjetaComida" onClick={onClick}>
    <div className="TarjetaComidaImagen" style={{ backgroundImage: `url(${image})` }}></div>
    <div className="TarjetaComidaInfo">
      <h3>{name}</h3>
      <p>{description}</p>
    </div>
  </div>
);

export default TarjetaComida;
