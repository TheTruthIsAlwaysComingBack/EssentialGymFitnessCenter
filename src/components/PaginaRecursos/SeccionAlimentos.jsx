import React, { useEffect, useState } from "react";
import TarjetaComida from "./TarjetaComida";
import "./SeccionAlimentos.css";

const SeccionAlimentos = ({ onSelectComida }) => {
  const [alimentos, setAlimentos] = useState([]);

  useEffect(() => {
    fetch("https://661037cf0640280f219c98d3.mockapi.io/api/gym/Clases")
      .then((response) => response.json())
      .then((data) => {
        setAlimentos(data);
      });
  }, []);

  return (
    <div className="SeccionAlimentos">
      {alimentos.map((alimento) => (
        <TarjetaComida
          key={alimento.id}
          image={alimento.ImagenComida}
          name={alimento.NombreComida}
          description={alimento.DescripcionComida}
          onClick={() => onSelectComida(alimento)}
        />
      ))}
    </div>
  );
};

export default SeccionAlimentos;
