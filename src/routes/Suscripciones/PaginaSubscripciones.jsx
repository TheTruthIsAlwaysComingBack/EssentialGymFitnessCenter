import React, { useEffect, useState } from "react";
import ListaClaPendiantePagSubs from "../../components/PaginaSuscripciones/ListaClaPendiantePagSubs";
import ModalInfoClaseSuscrita from "../../components/PaginaSuscripciones/ModalInfoClaseSuscrita";
import "./PaginaSubscripciones.css";
import Header from "../../components/header/Header";

const PaginaSubscripciones = () => {
  const [selectedClase, setSelectedClase] = useState(null);
  const [clases, setClases] = useState([]);

  useEffect(() => {
    fetch("https://661037cf0640280f219c98d3.mockapi.io/api/gym/Clases")
      .then((response) => response.json())
      .then((data) => {
        const suscripciones = data.filter((clase) => clase.tiempoSeleccionado);
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
    setClases((prevClases) =>
      prevClases.filter((clase) => clase.id !== claseId)
    );
    setSelectedClase(null); // Asegúrate de cerrar el modal
  };

  return (
    <div className="PaginaSubscripciones">
      <Header seccion="Suscripciones" />

      <h2 className="SubtituloPaginaSubscripciones">🚩 Clases pendientes</h2>
      <ListaClaPendiantePagSubs
        clases={clases}
        onClaseClick={handleClaseClick}
      />
      {selectedClase && (
        <ModalInfoClaseSuscrita
          isOpen={Boolean(selectedClase)}
          onClose={closeModal}
          classData={selectedClase}
          onCancel={handleCancel} // Pasar la función handleCancel aquí
        />
      )}
    </div>
  );
};

export default PaginaSubscripciones;
