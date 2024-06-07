// ItemNav.jsx
import React from "react";
import { Link } from "react-router-dom";
import "./ItemNav.css";

const ItemNav = ({ iconClass, linkTo }) => (
  <Link to={linkTo} className="item-nav">
    <i className={`icono-nav ${iconClass}`}></i>
  </Link>
);

export default ItemNav;
