import React from "react";
import "./TextAreaServAlCliente.css";

const TextAreaServAlCliente = ({ label, value, onChange, name }) => (
  <div className="ContenedorTextAreaServAlCliente">
    <label className="LabelTextAreaServAlCliente">{label}</label>
    <textarea
      className="TextAreaServAlCliente"
      value={value}
      onChange={onChange}
      name={name}
    />
  </div>
);

export default TextAreaServAlCliente;
