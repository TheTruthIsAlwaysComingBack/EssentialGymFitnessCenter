import React from 'react'
import "./BotonTarClaseASus.css";

const BotonTarClaseASus = ({text, onClick, type}) => (
    <button className={`BotonTarClaseASus ${type}`} onClick={onClick}>
        {text}
    </button>
);

export default BotonTarClaseASus