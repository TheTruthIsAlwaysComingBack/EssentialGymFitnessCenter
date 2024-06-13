import React from "react";
import "./TarjetaRecomendacionMusica.css";

const TarjetaRecomendacionMusica = ({ image, title, genre, onClick }) => (
  <div
    className="TarjetaRecomendacionMusica"
    style={{ backgroundImage: `url(${image})` }}
    onClick={onClick}
  >
    <div className="info-musica">
      <h3>{title}</h3>
      <h5>{genre}</h5>
    </div>
  </div>
);

export default TarjetaRecomendacionMusica;
