import React from "react";
import CancionMusica from "./CancionMusica";
import "./SeccionPlaylistMusica.css";

const SeccionPlaylistMusica = ({ playlist }) => (
  <div className="SeccionPlaylistMusica">
    <h3>Playlist</h3>
    {playlist.map((cancion, index) => (
      <CancionMusica
        key={index}
        title={cancion.title}
        duration={cancion.duration}
      />
    ))}
  </div>
);

export default SeccionPlaylistMusica;
