import React from "react";
import "./TextoSeccion.css";

const TextoSeccion = ({ text, level }) => {
  const Tag = `h${level}`;
  return <Tag className="TextoSeccion">{text}</Tag>;
};

export default TextoSeccion;
