import React, { useEffect, useState } from "react";
import DateInfoTarClaseSeleccionada from "./DateInfoTarClaseSeleccionada";
import ConfirmacionClases from "../../components/ConfirmacionClases/ConfirmacionClases";
import CancelarClases from "../CancelacionClases/CancelarClases";
import { useNavigate } from "react-router-dom";
import "./TarjetaClaseSeleccionada.css";

const TarjetaClaseSeleccionada = () => {
  const [tiempoSeleccionado, setTiempoSeleccionado] = useState("");
  const [classData, setClassData] = useState(null);
  const [confirmacionOpen, setConfirmacionOpen] = useState(false);
  const [cancelacionOpen, setCancelacionOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    // Realizamos un GET para obtener el tiempo seleccionado
    fetch("https://661037cf0640280f219c98d3.mockapi.io/api/gym/Clases/9")
      .then((response) => response.json())
      .then((data) => {
        setTiempoSeleccionado(data.tiempoSeleccionado);
        setClassData(data);
      });
  }, []);

  const closeConfirmacion = () => {
    setConfirmacionOpen(false);
  };

  const closeCancelacion = () => {
    setCancelacionOpen(false);
  };

  const openConfirmacion = () => {
    setConfirmacionOpen(true);
  };

  const openCancelacion = () => {
    setCancelacionOpen(true);
  };

  const handleCancel = () => {
    fetch(
      `https://661037cf0640280f219c98d3.mockapi.io/api/gym/Clases/${classData.id}`,
      {
        method: "DELETE",
      }
    )
      .then(() => {
        onCancel(classData.id);
        closeCancelacion();
      })
      .catch((error) => {
        console.error("Error al cancelar la clase:", error);
      });
  };

  if (!classData) {
    return <p>Loading...</p>;
  }

  return (
    <div className="TarjetaClaseSeleccionada">
      <h1 className="TituloTarjetaClaseSeleccionada">Clase Seleccionada</h1>
      <DateInfoTarClaseSeleccionada
        key={classData.id}
        day={classData.Day}
        date={tiempoSeleccionado}
        slots={`${classData.id} cupos disponibles de ${classData.Cupos}`}
      />
      <div className="linea-blanca"></div>
      <div className="botones-asistencia">
        <button className="BotonConfirmarAsistencia" onClick={openConfirmacion}>
          Confirmar Asistencia
        </button>
        <button className="BotonCancelarAsistencia" onClick={openCancelacion}>
          Cancelar Asistencia
        </button>
      </div>
      {confirmacionOpen && <ConfirmacionClases onClose={closeConfirmacion} />}
      {cancelacionOpen && (
        <CancelarClases onClose={closeCancelacion} onCancel={handleCancel} />
      )}
    </div>
  );
};

export default TarjetaClaseSeleccionada;
