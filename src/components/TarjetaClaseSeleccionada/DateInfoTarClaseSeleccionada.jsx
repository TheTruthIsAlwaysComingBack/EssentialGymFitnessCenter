import React from "react";
import "./DateInfoTarClaseSeleccionada.css";

const DateInfoTarClaseSeleccionada = ({ day, date, slots }) => {
  const daysMap = {
    Monday: "Lunes",
    Tuesday: "Martes",
    Wednesday: "Miércoles",
    Thursday: "Jueves",
    Friday: "Viernes",
    Saturday: "Sábado",
    Sunday: "Domingo",
  };

  const formattedDate = new Date(date).toLocaleString("es-ES", {
    dateStyle: "long",
    timeStyle: "short",
  });

  return (
    <div className="DateInfoTarClaseSeleccionada">
      <h2 className="TituloDateInfoTarClaseSeleccionada">Día</h2>
      <p>{daysMap[day]}</p>
      <h2 className="TituloDateInfoTarClaseSeleccionada">Hora</h2>
      <p>{formattedDate}</p>
      <h2 className="TituloDateInfoTarClaseASus">Cupos</h2>
      <p>{slots}</p>
    </div>
  );
};

export default DateInfoTarClaseSeleccionada;
