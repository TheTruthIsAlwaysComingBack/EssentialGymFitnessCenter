import React from "react";
import "./HeadingServAlCliente.css";

const HeadingServAlCliente = ({ text, level }) => {
  const Tag = `h${level}`;
  return <Tag className="HeadingServAlCliente">{text}</Tag>;
};

export default HeadingServAlCliente;
