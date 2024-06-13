import React from 'react';
import Header from './Header';
import Options from './Options';
import Challenges from './Challenges';
import './DesafiosTemplate.css';

const DesafiosTemplate = () => (
  <div className="container">
    <Header />
    <Options />
    <Challenges />
  </div>
);

export default DesafiosTemplate;
