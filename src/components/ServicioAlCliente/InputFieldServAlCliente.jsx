import React from "react";
import "./InputFieldServAlCliente.css";

const InputFieldServAlCliente = ({ label, type, value, onChange, name }) => (
  <div className="ContenedorInputFieldServAlCliente">
    <label className="LabelInputFieldServAlCliente">{label}</label>
    <input
      className="InputFieldServAlCliente"
      type={type}
      value={value}
      onChange={onChange}
      name={name}
    />
  </div>
);

export default InputFieldServAlCliente;
