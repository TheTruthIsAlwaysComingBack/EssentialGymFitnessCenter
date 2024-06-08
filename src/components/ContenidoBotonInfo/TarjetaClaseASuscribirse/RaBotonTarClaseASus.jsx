import React from 'react';
import "./RaBotonTarClaseASus.css";

const RaBotonTarClaseASus = ({ etiqueta, nombre, onChange }) => (
  <div className='RaBotonTarClaseASus'>
    <input type="radio" id={etiqueta} name={nombre} onChange={onChange} />
    <label htmlFor={etiqueta}>{etiqueta}</label>
  </div>
);

export default RaBotonTarClaseASus;
