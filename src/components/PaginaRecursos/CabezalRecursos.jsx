import React from 'react';
import FlechaVolverAtras from './FlechaVolverAtras';
import TextoSeccion from './TextoSeccion';
import './CabezalRecursos.css';

const CabezalRecursos = ({ onBack }) => (
  <div className="CabezalRecursos">
    <FlechaVolverAtras onClick={onBack} />
    <TextoSeccion text="Recursos" level={1} />
  </div>
);

export default CabezalRecursos;
