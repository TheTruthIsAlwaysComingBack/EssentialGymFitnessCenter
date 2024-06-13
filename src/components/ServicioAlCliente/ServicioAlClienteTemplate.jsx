import React from "react";
import "./ServicioAlClienteTemplate.css";
import Header from "../header/Header";
import ContactFormServAlCliente from "./ContactFormServAlCliente";

const ServicioAlClienteTemplate = () => (
  <div className="ServicioAlClienteTemplate">
    <Header seccion="Servicio al cliente" />
    <div className="container-servicio-cliente">
      <ContactFormServAlCliente />
    </div>
  </div>
);

export default ServicioAlClienteTemplate;
