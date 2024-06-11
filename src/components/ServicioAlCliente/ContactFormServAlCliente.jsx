import React, { useState } from "react";
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

  const handleSubmit = () => {
    fetch("https://661037cf0640280f219c98d3.mockapi.io/api/gym/Contacto", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => {
        alert("Mensaje enviado correctamente");
        setFormData({
          nombre: "",
          email: "",
          asunto: "",
          mensaje: "",
        });
      })
      .catch((error) => {
        console.error("Error:", error);
        alert("Error al enviar el mensaje");
      });
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
