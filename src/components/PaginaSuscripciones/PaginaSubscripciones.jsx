import React, { useEffect, useState } from "react";
import ListaClaPendiantePagSubs from "./ListaClaPendiantePagSubs";
import CabezalPagSubscripciones from "./CabezalPagSubscripciones";
import ModalInfoClaseSuscrita from "./ModalInfoClaseSuscrita";
import "./PaginaSubscripciones.css";

const PaginaSubscripciones = () => {
  const [selectedClase, setSelectedClase] = useState(null);
  const [clases, setClases] = useState([]);

  useEffect(() => {
    fetch("https://661037cf0640280f219c98d3.mockapi.io/api/gym/Clases")
      .then((response) => response.json())
      .then((data) => {
        const suscripciones = data.filter((clase) => clase.tiempoSeleccionado); // Filtramos solo las clases suscritas
        setClases(suscripciones);
      });
  }, []);

  const handleClaseClick = (clase) => {
    setSelectedClase(clase);
  };

  const closeModal = () => {
    setSelectedClase(null);
  };

  const handleCancel = (claseId) => {
    setClases(prevClases => prevClases.filter(clase => clase.id !== claseId));
  };

  return (
    <div className="PaginaSubscripciones">
      <CabezalPagSubscripciones />
      <h2 className="SubtituloPaginaSubscripciones">🚩 Clases pendientes</h2>
      <ListaClaPendiantePagSubs clases={clases} onClaseClick={handleClaseClick} />
      {selectedClase && (
        <ModalInfoClaseSuscrita isOpen={Boolean(selectedClase)} onClose={closeModal} classData={selectedClase} />
      )}
    </div>
  );
};

export default PaginaSubscripciones;
