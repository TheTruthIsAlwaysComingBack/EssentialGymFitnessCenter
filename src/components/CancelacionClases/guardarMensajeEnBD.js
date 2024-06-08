/* import axios from "axios"; */

export function guardarMensajeEnBD(mensaje) {
  return axios
    .post("/api/mensajes", { mensaje })
    .then((respuesta) => {
      console.log("Mensaje guardado correctamente");
    })
    .catch((error) => {
      console.error("Error al guardar el mensaje:", error);
    });
}
