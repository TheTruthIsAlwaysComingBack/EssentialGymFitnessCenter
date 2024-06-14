import React, { useEffect, useState } from "react";
import DateInfoTarClaseASus from "./DateInfoTarClaseASus";
import ModalNoSeleHora from "../../VentanaNoSeleccionoHora/ModalNoSeleHora";
import VentanaGracias from "../../VentanaGraciasSus/VentanaGracias";
import { useNavigate } from "react-router-dom";
import "./TarjetaClaseASus.css";

const TarjetaClaseASus = () => {
  const [tiempoSeleccionado, setTiempoSeleccionado] = useState("");
  const [classData, setClassData] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [ventanaGraciasOpen, setVentanaGraciasOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("https://663d4e0617145c4d8c3937bf.mockapi.io/subscripcion")
      .then((response) => response.json())
      .then((data) => {
        const randomClass = data[Math.floor(Math.random() * data.length)];
        setClassData(randomClass);
      });
  }, []);

  const ManejoTiempoSeleccionado = (classInfo, time) => {
    setTiempoSeleccionado({ ...classInfo, tiempoSeleccionado: time });
  };

  const handleSuscribirse = () => {
    if (!tiempoSeleccionado) {
      setModalOpen(true);
      return;
    }

    fetch("https://663d4e0617145c4d8c3937bf.mockapi.io/subscripcion", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(tiempoSeleccionado),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Clase seleccionada:", data);
        setVentanaGraciasOpen(true);
      })
      .catch((error) => {
        console.error("Error:", error);
        alert("Error al seleccionar la clase.");
      });
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const closeVentanaGracias = () => {
    setVentanaGraciasOpen(false);
  };

  const verSuscripciones = () => {
    navigate("/Suscripciones");
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
      <button className="BotonSuscribirse" onClick={handleSuscribirse}>
        SUSCRIBIRSE
      </button>
      <ModalNoSeleHora
        isOpen={modalOpen}
        onClose={closeModal}
        mensaje="Upps.. Te olvidaste seleccionar un horario"
      />
      {ventanaGraciasOpen && (
        <VentanaGracias
          onClose={closeVentanaGracias}
          verSuscripciones={verSuscripciones}
        />
      )}
    </div>
  );
};

export default TarjetaClaseASus;
