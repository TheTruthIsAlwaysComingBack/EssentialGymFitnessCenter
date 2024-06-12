import React from "react";
import "./Membresia.css";

const Membresia = ({ membership }) => {
  if (!membership) return <div>Loading...</div>;

  return (
    <div className="info-membresia">
      <div className="bg-mem">
        <p className="tipo-mem no-margin">{membership.tipo}</p>
        <p className="info-exp no-margin">
          Expira en : <span>{membership.expira}</span>
        </p>
      </div>

      <div className="fecha-mem">
        <div className="adquirido">
          <p className="no-margin">Adquirido en</p>
          <p className="no-margin">{membership.adquirido}</p>
        </div>
        <div className="activado">
          <p className="no-margin">Activado en</p>
          <p className="no-margin">{membership.activado}</p>
        </div>
      </div>
    </div>
  );
};

export default Membresia;
