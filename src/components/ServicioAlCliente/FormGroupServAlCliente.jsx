import React from "react";
import "./FormGroupServAlCliente.css";
import InputFieldServAlCliente from "./InputFieldServAlCliente";
import TextAreaServAlCliente from "./TextAreaServAlCliente";

const FormGroupServAlCliente = ({
  label,
  type,
  value,
  onChange,
  name,
  isTextArea,
}) => (
  <div className="FormGroupServAlCliente">
    {isTextArea ? (
      <TextAreaServAlCliente
        label={label}
        value={value}
        onChange={onChange}
        name={name}
      />
    ) : (
      <InputFieldServAlCliente
        label={label}
        type={type}
        value={value}
        onChange={onChange}
        name={name}
      />
    )}
  </div>
);

export default FormGroupServAlCliente;
