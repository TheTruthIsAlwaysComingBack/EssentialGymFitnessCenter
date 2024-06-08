import React from 'react'
import "./InputMotivoCanceClase.css"

const InputMotivoCanceClase = ({placeholder, value, onchange}) => (
  <input 
    type="text"
    placeholder={placeholder}
    value={value}
    onChange={onchange}
    className='InputMotivoCanceClase'
  />
);

export default InputMotivoCanceClase
