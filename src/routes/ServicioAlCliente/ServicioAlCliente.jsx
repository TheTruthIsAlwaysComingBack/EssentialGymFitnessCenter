import React from "react";
import ServicioAlClienteTemplate from "../../components/ServicioAlCliente/ServicioAlClienteTemplate";
import Header from "../../components/header/Header";
import "./ServicioAlCliente.css";

const ServicioAlCliente = () => {
  return (
    <div className="container-servicio-al-cliente">
      <Header seccion="Servicio al cliente" />
      <ServicioAlClienteTemplate />
    </div>
  );
};

export default ServicioAlCliente;
