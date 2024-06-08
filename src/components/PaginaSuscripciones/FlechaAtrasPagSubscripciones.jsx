import React from 'react'
import { useNavigate } from 'react-router-dom'
import "./FlechaAtrasPagSubscripciones.css";

const FlechaAtrasPagSubscripciones = () => {
    const navigate = useNavigate();
  return (
    <i 
      className="FlechaAtrasPagSubscripciones" 
      onClick={() => navigate(-1)}
    ></i>
  );
};

export default FlechaAtrasPagSubscripciones