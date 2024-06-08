import React, { useEffect, useState } from "react";
import ListaClaPendiantePagSubs from "./ListaClaPendiantePagSubs";
import CabezalPagSubscripciones from "./CabezalPagSubscripciones";
import "./PaginaSubscripciones.css";

const PaginaSubscripciones = () => {
  const [clases, setClases] = useState([]);

  useEffect(() => {
    fetch("https://661037cf0640280f219c98d3.mockapi.io/api/gym/Clases")
      .then((response) => response.json())
      .then((data) => {
        const suscripciones = data.map((clase) => ({
          id: clase.id,
          nombre: clase.Clase,
        }));
        setClases(suscripciones);
      });
  }, []);

  return (
    <div className="PaginaSubscripciones">
      <CabezalPagSubscripciones />
      <h2 className="SubtituloPaginaSubscripciones">🚩 Clases pendientes</h2>
      <ListaClaPendiantePagSubs clases={clases} />
    </div>
  );
};

export default PaginaSubscripciones;
