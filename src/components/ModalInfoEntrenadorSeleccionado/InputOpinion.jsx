import React from "react";
import "./InputOpinion.css";

const InputOpinion = ({ placeholder, value, onChange }) => (
  <textarea
    className="InputOpinion"
    placeholder={placeholder}
    value={value}
    onChange={onChange}
  ></textarea>
);

export default InputOpinion;
