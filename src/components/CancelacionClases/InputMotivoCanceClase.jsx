import React from 'react'
import "./InputMotivoCanceClase.css"

const InputMotivoCanceClase = ({placeholder, value, onChange}) => (
  <input 
    type="text"
    placeholder={placeholder}
    value={value}
    onChange={onChange}
    className='InputMotivoCanceClase'
  />
);

export default InputMotivoCanceClase
