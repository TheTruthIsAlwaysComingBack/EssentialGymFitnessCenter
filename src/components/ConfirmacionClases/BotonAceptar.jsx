import React from 'react'
import "./BotonAceptar.css"

const BotonAceptar = ({text, oncClick}) => {
  return (
    <button className='BotonAcep' onClick={oncClick}>
        {text}
    </button>
  )
}

export default BotonAceptar