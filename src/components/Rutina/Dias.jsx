import React from 'react';
import Dia from './Dia';
import './Dias.css';

const Dias = ({ dias }) => (
  <div className="dias">
    {dias.map((dia, index) => (
      <Dia key={index} dia={dia.dia} fecha={dia.fecha} activo={dia.activo} />
    ))}
  </div>
);

export default Dias;
