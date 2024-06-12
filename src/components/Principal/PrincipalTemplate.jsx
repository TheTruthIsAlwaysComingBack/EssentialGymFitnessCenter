import React from 'react';
import HeaderB from './HeaderB';
import ButtonEntrenadores from './ButtonEntrenadores';
import BarraTotal from './BarraTotal';
import CardClase from './CardClase';
import CardRutina from './CardRutina';
import Consejos from './Consejos';
import VerMas from "./VerMas"
import "./PrincipalTemplate.css"

const PrincipalTemplate = () => {
return (
    <div className='princi-container'>
        <HeaderB/>
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