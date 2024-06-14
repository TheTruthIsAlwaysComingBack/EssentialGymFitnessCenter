import React, { useEffect, useState } from "react";
import TarjetaComida from "./TarjetaComida";
import "./SeccionAlimentos.css";

const SeccionAlimentos = ({ onSelectComida }) => {
  const [alimentos, setAlimentos] = useState([]);

  useEffect(() => {
    fetch("https://663d4e0617145c4d8c3937bf.mockapi.io/nutricion")
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
