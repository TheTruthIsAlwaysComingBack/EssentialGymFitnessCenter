import React from "react";
import Image from "./Image";
import "./Register.css";
import LoginForm from "./LoginForm";
import { NavLink } from "react-router-dom";

const Register = ({ onSubmit }) => {
  return (
    <div className="login-organism">
      <div className="login-initial-menssage">
        <Image />
        <h1>BIENVENIDO!</h1>
        <p>
          Usa tus credenciales y registrate para <br />
          crear una nueva cuenta
        </p>
      </div>
      <div className="login-button-register">
        <LoginForm onSubmit={onSubmit} />
      </div>
      <p>
        Ya tienes una cuenta? <NavLink to="/">Inicia Sesion</NavLink>
      </p>
    </div>
  );
};

export default Register;
