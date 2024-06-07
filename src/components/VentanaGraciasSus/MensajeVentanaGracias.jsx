import React from 'react'
import CabezalVentanaGracias from './CabezalVentanaGracias'
import ParraVentanaGracias from './ParraVentanaGracias'
import "./MensajeVentanaGracias.css"

const MensajeVentanaGracias = ({titulo, mensaje}) => (
  <div className='MensajeVentanaGracias'>
    <CabezalVentanaGracias nivel={1} text={titulo} />
    <ParraVentanaGracias text={mensaje} />
  </div>
);

export default MensajeVentanaGracias