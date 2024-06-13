import React from 'react';
import DetallesComida from './DetallesComida';
import IngredienteComida from './IngredienteComida';
import PreparacionComida from './PreparacionComida';
import './SeccionDetallesComida.css';

const SeccionDetallesComida = ({ comida }) => (
  <div className="SeccionDetallesComida">
    <DetallesComida
      titulo={comida.NombreComida}
      tiempo={comida.TiempoComida}
      calorias={comida.CaloriasComida}
      imagen={comida.ImagenComida}
    />
    <IngredienteComida
      ingredientes={[
        comida.IngredienteComida1,
        comida.IngredienteComida2,
        comida.IngredienteComida3,
        comida.IngredienteComida4,
      ].filter(Boolean)} // Filtrar ingredientes no definidos
    />
    <PreparacionComida preparacion={comida.PreparacionComida} />
  </div>
);

export default SeccionDetallesComida;
