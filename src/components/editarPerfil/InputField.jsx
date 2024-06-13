import React from "react";
import "./InputField.css";

const InputField = ({ label, type, name, value, onChange }) => (
  <label>
    {label}:
    <input type={type} name={name} value={value} onChange={onChange} />
  </label>
);

export default InputField;
