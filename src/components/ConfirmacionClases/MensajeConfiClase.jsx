import React from 'react'
import Cabezal from "./Cabezal"

const MensajeConfiClase = ({titulo, text}) => {
  return (
    <div className='MensajeConfiClase'>
        <Cabezal nivel={1} text={titulo} />
        <Cabezal nivel={3} text={text} />
    </div>
  )
}

export default MensajeConfiClase