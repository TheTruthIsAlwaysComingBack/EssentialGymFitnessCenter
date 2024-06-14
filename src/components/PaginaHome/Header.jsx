import React from "react";
import { useNavigate } from "react-router-dom";
import Logo from "./Logo";
import Navbar from "./Navbar";
import Button from "./Button";
import "./Header.css";

const Header = () => {
  const navigate = useNavigate();

  return (
    <header className="header">
      <div className="arriba-header">
        <Logo />
        <Navbar />
        <Button text="Ingresar" onClick={() => navigate("/login")} />
      </div>
      <div className="image-abajo">
        <img
          src="https://i.ibb.co/CVVnTG1/5469421-2.png"
          alt="Background"
          className="background-image"
        />
        <div className="overlay">
          <h1>ATRÉVETE A SOÑAR EN GRANDE</h1>
          <p>En Essential Gym Fitness Center, creemos que cada paso cuenta</p>
          <Button text="INGRESAR >>>" onClick={() => navigate("/login")} />
        </div>
      </div>
    </header>
  );
};

export default Header;
