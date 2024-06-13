import React from 'react';
import './VentanaDetallesMusica.css';
import SeccionPlaylistMusica from './SeccionPlaylistMusica';

const VentanaDetallesMusica = ({ musica, onClose }) => {
  const playlist = [
    { title: "Song 1", duration: "3:45", src: "path/to/song1.mp3" },
    { title: "Song 2", duration: "4:20", src: "path/to/song2.mp3" },
    { title: "Song 3", duration: "2:50", src: "path/to/song3.mp3" },
    { title: "Song 4", duration: "5:10", src: "path/to/song4.mp3" }
  ];

  return (
    <div className="VentanaDetallesMusica">
      <div className="VentanaDetallesMusicaContenido">
        <button onClick={onClose}>X</button>
        <div className="SeccionDetallesMusica">
          <h1>{musica.NombresDeMusica}</h1>
          <div className="iconos-musica">
            <span>Genero: {musica.GeneroMusica}</span>
            <span>Duración total: 15:00</span>
          </div>
          <div
            className="DetallesMusicaImagen"
            style={{ backgroundImage: `url(${musica.ImageMusica})` }}
          ></div>
        </div>
        <SeccionPlaylistMusica playlist={playlist} />
        <a href="https://open.spotify.com/playlist/37i9dQZF1EIXkM8I2bv7zF?si=yynYUivSQaiP2D5uxKSIig" target="_blank" rel="noopener noreferrer">Abrir en Spotify</a>
      </div>
    </div>
  );
};

export default VentanaDetallesMusica;
