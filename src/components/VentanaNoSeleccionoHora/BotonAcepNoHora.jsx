import React from "react";
import "./BotonAcepNoHora.css"

const BotonAcepNoHora = ({ text, onClick }) => (
  <button className="BotonAcepNoHora" onClick={onClick}>
    {text}
  </button>
);

export default BotonAcepNoHora;
