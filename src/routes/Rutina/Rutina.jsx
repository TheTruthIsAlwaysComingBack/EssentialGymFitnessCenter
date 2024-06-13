import React from 'react';
import RutinaTemplate from '../../components/Rutina/organisms/RutinaTemplate';

const dias = [
  { dia: 'LUN', fecha: '20/5', activo: true },
  { dia: 'MAR', fecha: '21/5', activo: false },
  { dia: 'MIR', fecha: '22/5', activo: false },
  { dia: 'JUE', fecha: '23/5', activo: false },
  { dia: 'VIE', fecha: '24/5', activo: false },
  { dia: 'SAB', fecha: '25/5', activo: false },
  { dia: 'DOM', fecha: '26/5', activo: false },
];

const ejercicios = [
  {
    numero: 1,
    titulo: 'CALENTAMIENTO',
    items: ['5 minutos de saltar la cuerda', '2 series de 10 flexiones de brazos'],
  },
  {
    numero: 2,
    titulo: 'PRESS DE BANCA',
    items: ['4 series de 10 repeticiones'],
  },
];

const Rutina = () => <RutinaTemplate dias={dias} ejercicios={ejercicios} />;

export default Rutina;
