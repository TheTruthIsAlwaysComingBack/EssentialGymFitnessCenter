import React from "react";
import HeaderHome from "../../components/Principal/HeaderHome";
import CoachesInfo from "../../components/Principal/CoachesInfo";
import Rutinas from "../../components/Principal/Rutinas";
import "./Principal.css";

const Principal = () => {
  return (
    <div className="principal-container">
      <div className="header-principal">
        <HeaderHome username="Pedro" />
      </div>
      <div className="principal-scroll">
        <CoachesInfo />
        <Rutinas />
      </div>
    </div>
  );
};

export default Principal;
