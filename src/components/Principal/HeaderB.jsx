import React from 'react'
import ButtonNotificaciones from './ButtonNotificaciones'
import ButtonPerfil from './ButtonPerfil';
import ButtonBurger from './ButtonBurger';
import "./HeaderB.css"


const HeaderB = () => {

  const nombre = "JOaquin Phoenix"

  return (
    <div className='cabeza-container'>
        <div className='texto-container'>
            <h2>Hola, {nombre}</h2>
            <p>Es hora de poner a prueba tus limites</p>
        </div>
        <div className='botones-container'>
            <ButtonNotificaciones/>
            <ButtonPerfil/>
            <ButtonBurger/>
        </div>
    </div>
  )
}

export default HeaderB;
