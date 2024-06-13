import React from 'react'
import "./Cabezal.css"

const Cabezal = ({nivel, text}) => {
    const Tag = 'nivel';
    return <Tag className={`cabezal nivel-${nivel}`}>{text}</Tag>;
}

export default Cabezal