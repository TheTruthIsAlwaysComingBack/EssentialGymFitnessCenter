import React from 'react'
import BotonAceptar from './BotonAceptar'
import MensajeConfiClase from './MensajeConfiClase'
import "./ConfirmarClases.css"

const ConfirmarClases = () => {
  const AccionBoton = () => {
    //Aquí vuelve a la pestaña ya que esta es una emergente
  }
  return (
    <div className='confirmar-clases'>
      <MensajeConfiClase titulo='GENIAL!!' text='No te olvides de llevar tus suplementos necesarios' />
      <BotonAceptar text='Aceptar'/>
    </div>
  )
}

export default ConfirmarClases