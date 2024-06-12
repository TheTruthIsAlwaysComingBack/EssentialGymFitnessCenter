import React from 'react';
import RecursosTemplate from '../../components/PaginaRecursos/RecursosTemplate';

const Recursos = () => {
  const handleBack = () => {
    // Aquí puedes manejar la navegación hacia atrás
    console.log('Volver al home');
  };

  return <RecursosTemplate onBack={handleBack} />;
};

export default Recursos;
