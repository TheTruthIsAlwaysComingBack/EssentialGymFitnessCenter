import React from 'react'
import "./BotonAceptarCance.css"

const BotonAceptarCance = ({text, onClick}) => (
  <button className='botonAceptarCanceClase' onClick={onClick}>
    {text}
  </button>
);

export default BotonAceptarCance