import React from "react";
import "./ServicioAlClienteTemplate.css";
import HeadingServAlCliente from "./HeadingServAlCliente";
import ContactFormServAlCliente from "./ContactFormServAlCliente";

const ServicioAlClienteTemplate = () => (
  <div className="ServicioAlClienteTemplate">
    <HeadingServAlCliente text="Servicio Al Cliente" level={1} />
    <ContactFormServAlCliente />
  </div>
);

export default ServicioAlClienteTemplate;
