import React from 'react';
import Option from './Option';
import './Options.css';

const Options = () => (
  <div className="options">
    <Option active={true}>Muro</Option>
    <Option active={false}>Desafíos</Option>
  </div>
);

export default Options;
