import React from "react";
import Arrow from "./Arrow";
import DotsVertical from "./DotsVertical";
import NombreSeccion from "./NombreSeccion";
import "./Header.css";

const Header = ({ seccion }) => {
  return (
    <div className="header-container">
      <Arrow />
      <NombreSeccion nombre={seccion} />
      <DotsVertical />
    </div>
  );
};

export default Header;
