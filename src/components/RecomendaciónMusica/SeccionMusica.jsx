import React, { useEffect, useState } from "react";
import TarjetaRecomendacionMusica from "./TarjetaRecomendacionMusica";
import "./SeccionMusica.css";

const SeccionMusica = ({ onSelectMusica }) => {
  const [musica, setMusica] = useState([]);

  useEffect(() => {
    fetch("https://661037cf0640280f219c98d3.mockapi.io/api/gym/Clases")
      .then((response) => response.json())
      .then((data) => {
        setMusica(data);
      });
  }, []);

  return (
    <div className="SeccionMusica">
      <h3>Recomendaciones de música</h3>
      <div className="contenedor-musica">
        {musica.map((musicaItem) => (
          <TarjetaRecomendacionMusica
            key={musicaItem.id}
            image={musicaItem.ImageMusica}
            title={musicaItem.NombresDeMusica}
            genre={musicaItem.GeneroMusica}
            onClick={() => onSelectMusica(musicaItem)}
          />
        ))}
      </div>
    </div>
  );
};

export default SeccionMusica;
