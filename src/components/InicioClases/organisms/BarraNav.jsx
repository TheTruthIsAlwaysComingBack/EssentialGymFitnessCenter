// BarraNav.jsx
import React from "react";
import ItemNav from "../molecules/ItemNav";
import "./BarraNav.css";

const BarraNav = () => (
  <div className="barra-nav">
    <ItemNav iconClass="fa fa-home" linkTo="/home" />
    <ItemNav iconClass="fa fa-book" linkTo="/recursos" />
    <ItemNav iconClass="fa fa-star" linkTo="/favoritos" />
    <ItemNav iconClass="fa fa-headphones" linkTo="/ayuda" />
  </div>
);

export default BarraNav;
