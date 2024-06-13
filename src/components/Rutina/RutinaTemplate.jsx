import React from 'react';
import BackButton from './BackButton';
import Dias from './Dias';
import Ejercicio from './Ejercicio';
import './RutinaTemplate.css';

const RutinaTemplate = ({ dias, ejercicios }) => (
  <div className="rutina">
    <div className="header">
      <BackButton />
      <h2 className="titulo">RUTINA</h2>
    </div>
    <Dias dias={dias} />
    <p className="descripcion"> - Pecho y Triceps</p>
    <div className="ejercicios">
      {ejercicios.map((ejercicio, index) => (
        <Ejercicio
          key={index}
          numero={ejercicio.numero}
          titulo={ejercicio.titulo}
          items={ejercicio.items}
        />
      ))}
    </div>
  </div>
);

export default RutinaTemplate;
