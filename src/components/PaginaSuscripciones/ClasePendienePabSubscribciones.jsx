import React from 'react'
import { useNavigate } from 'react-router-dom'
import "./ClasePendienePabSubscribciones.css";

const ClasePendienePabSubscribciones = ({ clase }) => {
    const navigate = useNavigate();
  return (
    <div className="ClasePendienePabSubscribciones" onClick={() => navigate(`/clase/${clase.id}`)}>
      <span className='ClasePenPagSubscripcioens'>{clase.nombre}</span>
      <i className="FlechaDerechaClasePend"><h4>--→</h4></i>
    </div>
  );
};

export default ClasePendienePabSubscribciones