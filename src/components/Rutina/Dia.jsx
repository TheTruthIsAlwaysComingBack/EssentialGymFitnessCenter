import React from 'react';
import './Dia.css';

const Dia = ({ dia, fecha, activo }) => (
  <div className={`dia ${activo ? 'activo' : ''}`}>
    <p>{dia}</p>
    <p>{fecha}</p>
  </div>
);

export default Dia;
