import React from 'react'
import "./MensajeCanceClas.css"
import Cabezal from '../ConfirmacionClases/Cabezal'

const MensajeCanceClas = ({titulo , text}) => {
  return (
    <div className='MensajeCanceClas'>
        <Cabezal nivel={1} text={titulo} />
        <Cabezal nivel={3} text={text} />
    </div>
  )
}

export default MensajeCanceClas