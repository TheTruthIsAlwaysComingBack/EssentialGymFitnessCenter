import React from 'react';
import Numero from './Numero';
import './Ejercicio.css';

const Ejercicio = ({ numero, titulo, items }) => (
  <div className="ejercicio">
    <Numero numero={numero} />
    <div className="contenido-ejercicio">
      <h3 className="titulo-ejercicio">{titulo}</h3>
      <ul className="lista">
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  </div>
);

export default Ejercicio;
