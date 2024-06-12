import React from 'react';
import SeccionDetallesComida from './SeccionDetallesComida';
import './VentanaDetallesComida.css';

const VentanaDetallesComida = ({ comida, onClose }) => (
  <div className="VentanaDetallesComidaOverlay">
    <div className="VentanaDetallesComida">
      <button className="CerrarVentanaDetallesComida" onClick={onClose}>X</button>
      <SeccionDetallesComida comida={comida} />
    </div>
  </div>
);

export default VentanaDetallesComida;
