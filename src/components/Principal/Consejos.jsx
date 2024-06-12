import React from 'react';
import './Consejos.css';
import Imagen from '../../assets/ImgConsejo1.jpg';

const Consejos = () => {
  
  return (
    <div className='consejo-container'>
        <img src={Imagen} alt="Consejo del día" />
        <div className='adv-overlay'>
            <h2>CONSEJO DEL DÍA!</h2>
            <p>Escucha a tu cuerpo, se constante y no te compares con los demas. Cada  personas tiene su propio ritmo y progreso. Celebra tus propios logros!!</p>
        </div>
    </div>
  )
}

export default Consejos;
