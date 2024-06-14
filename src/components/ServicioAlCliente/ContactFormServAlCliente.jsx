import React, { useState } from "react";
import axios from "axios";
import "./ContactFormServAlCliente.css";
import FormGroupServAlCliente from "./FormGroupServAlCliente";
import ButtonServAlCliente from "./ButtonServAlCliente";

const ContactFormServAlCliente = () => {
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    asunto: "",
    mensaje: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async () => {
    try {
      await axios.post("https://663d4e0617145c4d8c3937bf.mockapi.io/contacto", {
        ...formData,
        tipo: "queja",
      });
      alert("Mensaje enviado correctamente");
      setFormData({
        nombre: "",
        email: "",
        asunto: "",
        mensaje: "",
      });
    } catch (error) {
      console.error("Error:", error);
      alert("Error al enviar el mensaje");
    }
  };

  return (
    <div className="ContactFormServAlCliente">
      <FormGroupServAlCliente
        label="Nombre"
        type="text"
        value={formData.nombre}
        onChange={handleChange}
        name="nombre"
      />
      <FormGroupServAlCliente
        label="Email"
        type="email"
        value={formData.email}
        onChange={handleChange}
        name="email"
      />
      <FormGroupServAlCliente
        label="Asunto"
        type="text"
        value={formData.asunto}
        onChange={handleChange}
        name="asunto"
      />
      <FormGroupServAlCliente
        label="Mensaje"
        isTextArea
        value={formData.mensaje}
        onChange={handleChange}
        name="mensaje"
      />
      <ButtonServAlCliente text="Enviar" onClick={handleSubmit} />
    </div>
  );
};

export default ContactFormServAlCliente;
