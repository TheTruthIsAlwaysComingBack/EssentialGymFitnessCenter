import React from "react";
import Arrow from "./Arrow";
import NombreSeccion from "./NombreSeccion";
import "./Header.css";

const Header = ({ seccion }) => {
  return (
    <div className="header-container-coachinfo">
      <Arrow />
      <div className="nombre-coach">
        <NombreSeccion nombre={seccion} />
      </div>
    </div>
  );
};

export default Header;
