import React from "react";
import "./ButtonServAlCliente.css";

const ButtonServAlCliente = ({ text, onClick }) => (
  <button className="ButtonServAlCliente" onClick={onClick}>
    {text}
  </button>
);

export default ButtonServAlCliente;
