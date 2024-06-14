import React from 'react';
import Challenge from './Challenge';
import './Challenges.css';

const Challenges = () => (
  <div className="challenges">
    <Challenge title="Desafío de Cardio de Mayo" />
    <Challenge title="Desafío de Fuerza de Junio" />
    <Challenge title="Desafío de Flexibilidad de Julio" />
  </div>
);

export default Challenges;
