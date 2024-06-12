import React, { useEffect, useState } from 'react';
import CabezalRecursos from './CabezalRecursos';
import SeccionPreguntaRecomendacion from './SeccionPreguntaRecomendacion';
import SeccionAlimentos from './SeccionAlimentos';
import VentanaDetallesComida from '../ModalRecursosInfoComida/VentanaDetallesComida';
import './RecursosTemplate.css';

const RecursosTemplate = ({ onBack }) => {
  const [pregunta, setPregunta] = useState('');
  const [respuesta, setRespuesta] = useState('');
  const [selectedComida, setSelectedComida] = useState(null);

  useEffect(() => {
    fetch('https://661037cf0640280f219c98d3.mockapi.io/api/gym/Clases')
      .then((response) => response.json())
      .then((data) => {
        const randomData = data[Math.floor(Math.random() * data.length)];
        setPregunta(randomData.PreguntaRecomendacion);
        setRespuesta(randomData.RespuestaRecomenadacion);
      });
  }, []);

  const handleSelectComida = (comida) => {
    setSelectedComida(comida);
  };

  const handleCloseComida = () => {
    setSelectedComida(null);
  };

  return (
    <div className="RecursosTemplate">
      <CabezalRecursos onBack={onBack} />
      <SeccionPreguntaRecomendacion pregunta={pregunta} respuesta={respuesta} />
      <SeccionAlimentos onSelectComida={handleSelectComida} />
      {selectedComida && (
        <VentanaDetallesComida comida={selectedComida} onClose={handleCloseComida} />
      )}
    </div>
  );
};

export default RecursosTemplate;

/* import React, { useEffect, useState } from "react";
import CabezalRecursos from "./CabezalRecursos";
import SeccionPreguntaRecomendacion from "./SeccionPreguntaRecomendacion";
import SeccionAlimentos from "./SeccionAlimentos";
import "./RecursosTemplate.css";

const RecursosTemplate = ({ onBack }) => {
  const [pregunta, setPregunta] = useState("");
  const [respuesta, setRespuesta] = useState("");

  useEffect(() => {
    fetch("https://661037cf0640280f219c98d3.mockapi.io/api/gym/Clases")
      .then((response) => response.json())
      .then((data) => {
        const randomData = data[Math.floor(Math.random() * data.length)];
        setPregunta(randomData.PreguntaRecomendacion);
        setRespuesta(randomData.RespuestaRecomenadacion);
      });
  }, []);

  const handleSelectComida = (comida) => {
    // Aquí puedes manejar la selección de la comida
    console.log("Comida seleccionada:", comida);
  };

  return (
    <div className="RecursosTemplate">
      <CabezalRecursos onBack={onBack} />
      <SeccionPreguntaRecomendacion pregunta={pregunta} respuesta={respuesta} />
      <SeccionAlimentos onSelectComida={handleSelectComida} />
    </div>
  );
};

export default RecursosTemplate;
 */