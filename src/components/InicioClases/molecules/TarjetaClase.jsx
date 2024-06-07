// TarjetaClase.jsx
import React, { useState } from 'react';
import TituloClase from '../atoms/TituloClase';
import DescripcionClase from '../atoms/DescripcionClase';
import BotonInfo from '../atoms/BotonInfo';
import ModalInfoClase from '../organisms/ModalInfoClase';
import './TarjetaClase.css';

const TarjetaClase = ({ clase, descripcion }) => {
  const [modalOpen, setModalOpen] = useState(false);

  const toggleModal = () => setModalOpen(!modalOpen);

  return (
    <div className='tarjeta-clase'>
      <TituloClase titulo={clase} />
      <DescripcionClase descripcion={descripcion} />
      <div className='linea-blanca'></div>
      <BotonInfo onClick={toggleModal} />
      <ModalInfoClase isOpen={modalOpen} onClose={toggleModal} />
    </div>
  );
};

export default TarjetaClase;
