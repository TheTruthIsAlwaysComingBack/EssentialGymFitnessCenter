import React, { useEffect, useState } from "react";
import DateInfoTarClaseASus from "./DateInfoTarClaseASus";
import BotonTarClaseASus from "./BotonTarClaseASus";
import "./TarjetaClaseASus.css";

const TarjetaClaseASus = () => {
  const [ tiempoSeleccionado, setTiempoSeleccionado] = useState('');
  const [ classData, setClassData] = useState([]);

  useEffect(() => {
    fetch("https://661037cf0640280f219c98d3.mockapi.io/api/gym/Clases")
      .then((response) => response.json())
      .then((data) => setClassData(data));
  }, []);

  const ManejoSuscripcion = () => {
    if (tiempoSeleccionado) {
      localStorage.setItem('ClaseSeleccionada', JSON.stringify(tiempoSeleccionado))
      alert("Clase Seleccionada!");
    } else {
      alert("Por favor seleccionar un horario.");
    }
  };

  const ManejoTiempoSeleccionado = (classInfo, time) => {
    setTiempoSeleccionado({ ...classInfo, tiempoSeleccionado: time});
  };

  return (
    <div className="TarjetaClaseASus">
      <h1 className="TituloTarjetaClaseASus">Selecciona tu clase</h1>
      {classData.map(classInfo => (
        <DateInfoTarClaseASus
        key={classInfo.id}
        day={classInfo.Day}
        date1={classInfo.Date}
        date2={classInfo.Date2}
        slots={`${classInfo.id} cupos disponibles de ${classInfo.Cupos}`}
        onTimeSelect={(time) => ManejoTiempoSeleccionado(classInfo, time)}
        />
      ))}
    </div>
  );
};

export default TarjetaClaseASus;
