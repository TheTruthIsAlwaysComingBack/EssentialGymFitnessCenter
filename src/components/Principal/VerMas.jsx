import React from 'react';
import './VerMas.css';

const VerMas = () => {
  
  return (
    <div className="ver-mas-container">
      <span className="ver-mas-button">
        Ver más
        <span className='ver-mas-button-icon'>
          <ion-icon name="caret-forward-outline"></ion-icon>
        </span>
      </span>
    </div>
  );
};

export default VerMas;
