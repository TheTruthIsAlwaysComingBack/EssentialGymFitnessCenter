import React from 'react'
import './CardClase.css'
import Clase1 from '../../assets/Clase1.png'

const CardClase = () => {

  const clase = "Yoga"

  return (
    <button className='clase-container'>
        <img src={Clase1} alt="" className='clase-image'/>
        <p className='clase-text'>{clase}</p>
    </button>
  )
}

export default CardClase;