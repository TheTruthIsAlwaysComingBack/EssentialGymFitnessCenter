import React from 'react';
import ButtonBurger from "./ButtonBurger";
import ButtonNotificaciones from "./ButtonNotificaciones";
import ButtonPerfil from './ButtonPerfil';
import ButtonEntrenadores from './ButtonEntrenadores';
import BarraTotal from './BarraTotal';
import CardClase from './CardClase';
import CardRutina from './CardRutina';
import Consejos from './Consejos';
import VerMas from "./VerMas"
import "./PrincipalTemplate.css"

const PrincipalTemplate = () => {

  const nombre = "Jefro"

  return (
    <div>
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
        <Consejos/>
        <BarraTotal/>
        <div className='trainer-container'>
            <h2>Entrenadores</h2><VerMas/>
        </div>
        <ButtonEntrenadores/>
        <div className='trainer-container'>
            <h2>Rutinas</h2><VerMas/>
        </div>
        <CardRutina/>
        <div className='trainer-container'>
            <h2>Clases</h2><VerMas/>
        </div>
        <CardClase/>
    </div>
  )
}

export default PrincipalTemplate;