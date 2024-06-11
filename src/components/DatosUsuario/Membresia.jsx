import { useState, useEffect } from "react";
import React from "react";
import "./Membresia.css";

const Membresia = () => {
  const [membresia, setMembresia] = useState(null);

  useEffect(() => {
    const fetchMembresia = async () => {
      const data = {
        tipo: "Golden Membership",
        expira: "31 - agosto 2024",
        adquirido: "31 - agosto 2024",
        activado: "31 - agosto 2024",
      };
      setMembresia(data);
    };

    fetchMembresia();
  }, []);

  if (!membresia) return <div>Loading...</div>;

  return (
    <div className="info-membresia">
      <div className="bg-mem">
        <p className="tipo-mem no-margin">{membresia.tipo}</p>
        <p className="info-exp no-margin">
          Expira en : <span>{membresia.expira}</span>
        </p>
      </div>

      <div className="fecha-mem">
        <div className="adquirido">
          <p className="gray no-margin">Adquirido en</p>
          <p className="no-margin">{membresia.adquirido}</p>
        </div>
        <div className="activado">
          <p className="gray no-margin">Activado en</p>
          <p className="no-margin">{membresia.activado}</p>
        </div>
      </div>
    </div>
  );
};

export default Membresia;
