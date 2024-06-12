import React from 'react'
import './ButtonEntrenadores.css'
import Entrenador1 from '../../assets/Entrenador1.png'

const ButtonEntrenadores = () => {
  return (
    <div className='entre-container'>
        <div className="entre-button">
            <img src={Entrenador1} alt="Profile" className="profile-image" />
        </div>
        <p className="entre-name">Joaquin Pheonix</p> 
    </div>
    
    
  )
}

export default ButtonEntrenadores;