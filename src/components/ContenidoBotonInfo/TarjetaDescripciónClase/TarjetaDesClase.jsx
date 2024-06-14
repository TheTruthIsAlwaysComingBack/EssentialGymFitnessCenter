import React, { useEffect, useState } from "react";
import InfoDesClase from "./InfoDesClase";

const TarjetaDesClase = () => {
  const [claseInfo, setClaseInfo] = useState(null);

  useEffect(() => {
    fetch("https://663d4e0617145c4d8c3937bf.mockapi.io/subscripcion")
      .then((response) => response.json())
      .then((data) => setClaseInfo(data[0]));
  }, []);
  return (
    <div className="TarjetaDesClase">
      {claseInfo ? (
        <InfoDesClase
          clase={claseInfo.Clase}
          descripcion={claseInfo.DescripcionClase}
        />
      ) : (
        <p>Cargando...</p>
      )}
    </div>
  );
};

export default TarjetaDesClase;
