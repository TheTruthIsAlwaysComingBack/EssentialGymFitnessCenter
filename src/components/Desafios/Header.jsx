import React from 'react';
import BackButton from './BackButton';
import ProfileIcon from './ProfileIcon';

import './Header.css';

const Header = () => (
  <div className="header">
    <BackButton />
    <h1 className="titulo">Comunidad</h1>
    <ProfileIcon />
  </div>
);

export default Header;
