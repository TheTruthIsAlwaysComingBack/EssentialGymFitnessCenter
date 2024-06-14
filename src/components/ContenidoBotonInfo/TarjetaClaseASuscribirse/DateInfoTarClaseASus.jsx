import React from "react";
import "./DateInfoTarClaseASus.css";
import RaBotonTarClaseASus from "./RaBotonTarClaseASus";

const DateInfoTarClaseASus = ({ day, date1, date2, slots, onTimeSelect }) => {
  const daysMap = {
    Monday: "Lunes",
    Tuesday: "Martes",
    Wednesday: "Miércoles",
    Thursday: "Jueves",
    Friday: "Viernes",
    Saturday: "Sábado",
    Sunday: "Domingo",
  };

  const formattedDate1 = new Date(date1).toLocaleString("es-ES", {
    dateStyle: "long",
    timeStyle: "short",
  });

  const formattedDate2 = new Date(date2).toLocaleString("es-ES", {
    dateStyle: "long",
    timeStyle: "short",
  });

  return (
    <div className="DateInfoTarClaseASus">
      <h2 className="TituloDateInfoTarClaseASus">Día</h2>
      <p>{daysMap[day]}</p>
      <h2 className="TituloDateInfoTarClaseASus">Hora</h2>
      <RaBotonTarClaseASus
        etiqueta={formattedDate1}
        nombre={`time-${day}`}
        onChange={() => onTimeSelect(date1)}
      />
      <RaBotonTarClaseASus
        etiqueta={formattedDate2}
        nombre={`time-${day}`}
        onChange={() => onTimeSelect(date2)}
      />
      <h2 className="TituloDateInfoTarClaseASus">Cupos</h2>
      <p>{slots}</p>
    </div>
  );
};

export default DateInfoTarClaseASus;
