import React, { useEffect, useState } from 'react'
import InfoDesClase from './InfoDesClase'

const TarjetaDesClase = () => {
    const [claseInfo, setClaseInfo] = useState(null);

    useEffect(() => {
        fetch('https://661037cf0640280f219c98d3.mockapi.io/api/gym/Clases')
        .then(response => response.json())
        .then(data => setClaseInfo(data[0]));
    }, []);
  return (
    <div className='TarjetaDesClase'>
        {claseInfo ? (
            <InfoDesClase
            clase={claseInfo.Clase}
            descripcion={claseInfo.DescripcionClase}
            />
        ) : ( 
            <p>Cargando...</p>
        )}
    </div>
  );
};

export default TarjetaDesClase