import React, { useState } from 'react';
import MensajeCanceClas from "./MensajeCanceClas";
import InputMotivoCanceClase from './InputMotivoCanceClase';
import BotonAceptarCance from './BotonAceptarCance';
import "./CancelarClases.css";

const CancelarClases = ({ onClose, onCancel }) => {
  const [mensaje, setMensaje] = useState('');

  const handleGuardarMensaje = () => {
    fetch("https://661037cf0640280f219c98d3.mockapi.io/api/gym/Clases", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ motivoCancelacion: mensaje }),
    })
      .then(response => response.json())
      .then(() => {
        onCancel();
        onClose();
      })
      .catch(error => {
        console.error("Error al guardar el mensaje:", error);
      });
  };

  return (
    <div className='CancelarClases'>
      <div className='CancelarClasesContenido'>
        <MensajeCanceClas
          titulo='OH NO!!' 
          text='Lamentamos que nos dejes, podrías comentarnos el motivo por favor (opcional)' 
        />
        <InputMotivoCanceClase
          placeholder='Escribe el motivo'
          value={mensaje}
          onChange={(evento) => setMensaje(evento.target.value)} 
        />
        <BotonAceptarCance
          text='Aceptar' 
          onClick={handleGuardarMensaje} 
        />
      </div>
    </div>
  );
};

export default CancelarClases;
