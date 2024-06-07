import React from 'react'
import "./BotonAceptarGracias.css"

const BotonAceptarGracias = ({text, onClick, type}) => (
  <button className={`BotonAceptarGracias ${type}`} onClick={onClick}>
    {text}
  </button>
);

export default BotonAceptarGracias