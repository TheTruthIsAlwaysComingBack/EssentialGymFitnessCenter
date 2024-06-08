import React, { useEffect, useState } from "react";
import DateInfoTarClaseASus from "./DateInfoTarClaseASus";
import "./TarjetaClaseASus.css";

const TarjetaClaseASus = () => {
  const [tiempoSeleccionado, setTiempoSeleccionado] = useState('');
  const [classData, setClassData] = useState(null);

  useEffect(() => {
    fetch("https://661037cf0640280f219c98d3.mockapi.io/api/gym/Clases")
      .then((response) => response.json())
      .then((data) => {
        const randomClass = data[Math.floor(Math.random() * data.length)];
        setClassData(randomClass);
      });
  }, []);

  const ManejoTiempoSeleccionado = (classInfo, time) => {
    setTiempoSeleccionado({ ...classInfo, tiempoSeleccionado: time });
  };

  if (!classData) {
    return <p>Loading...</p>;
  }

  return (
    <div className="TarjetaClaseASus">
      <h1 className="TituloTarjetaClaseASus">Selecciona tu clase</h1>
      <DateInfoTarClaseASus
        key={classData.id}
        day={classData.Day}
        date1={classData.Date}
        date2={classData.Date2}
        slots={`${classData.id} cupos disponibles de ${classData.Cupos}`}
        onTimeSelect={(time) => ManejoTiempoSeleccionado(classData, time)}
      />
    </div>
  );
};

export default TarjetaClaseASus;
