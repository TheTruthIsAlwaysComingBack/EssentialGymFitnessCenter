import React, { useState } from 'react';
import './BarraTotal.css';

const BarraTotal = () => {
  const [current, setCurrent] = useState(45);
  const total = 100;

  const percentage = (current / total) * 100;

  return (
    <div className="bar-container">
      <h2>Barra de Progreso de Ocupación</h2>
      <div className="progress-bar-container">
        <div
          className="progress-bar-fill"
          style={{ width: `${percentage}%` }}
        >
          {current} / {total} ({percentage.toFixed(2)}%)
        </div>
      </div>
      {/*<button onClick={() => setCurrent(current + 5)}>Añadir 5 Personas</button>
      <button onClick={() => setCurrent(current - 5)}>Remover 5 Personas</button>*/}
    </div>
  );
};

export default BarraTotal;
