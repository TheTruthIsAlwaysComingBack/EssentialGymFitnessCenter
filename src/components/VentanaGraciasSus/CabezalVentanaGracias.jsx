import React from 'react'
import "./CabezalVentanaGracias.css"

const CabezalVentanaGracias = ({nivel, text}) => {
    const Tag = `h${nivel}`;
  return <Tag className={`CabezalVentanaGracias nivel-${nivel}`}>{text}</Tag>;
};

export default CabezalVentanaGracias