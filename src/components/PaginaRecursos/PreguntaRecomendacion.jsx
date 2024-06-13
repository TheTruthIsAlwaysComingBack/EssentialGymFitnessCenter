import React from 'react';
import TextoSeccion from './TextoSeccion';
import Parrafo from './Parrafo';
import './PreguntaRecomendacion.css';

const PreguntaRecomendacion = ({ pregunta, respuesta }) => (
  <div className="PreguntaRecomendacion">
    <TextoSeccion text={pregunta} level={2} />
    <Parrafo text={respuesta} />
  </div>
);

export default PreguntaRecomendacion;
