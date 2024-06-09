import React from "react";
import "./HeadingEntrenadores.css";

const HeadingEntrenadores = ({ text, level }) => {
  const Tag = `h${level}`;
  return <Tag className="HeadingEntrenadores">{text}</Tag>;
};

export default HeadingEntrenadores;
