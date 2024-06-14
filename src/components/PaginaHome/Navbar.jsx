import React from "react";
import NavItem from "./NavItem";

const Navbar = () => {
  return (
    <nav className="navbar">
      <NavItem text="Sobre Nosotros" href="#product" />
      <NavItem text="Contacto" href="#features" />
    </nav>
  );
};

export default Navbar;
