import React from "react";
import Image from "./Image";
import "./Register.css";
import RegisterForm from "./RegisterForm";
import { NavLink } from "react-router-dom";

const Register = ({ onSubmit }) => {
  return (
    <div className="register-organism">
      <div className="login-initial-menssage">
        <Image />
        <h1>BIENVENIDO!</h1>
        <p>
          Usa tus credenciales y regístrate para <br />
          crear una nueva cuenta
        </p>
      </div>
      <div className="login-button-register">
        <RegisterForm onSubmit={onSubmit} />
      </div>
      <p>
        ¿Ya tienes una cuenta? <NavLink to="/">Inicia Sesión</NavLink>
      </p>
    </div>
  );
};

export default Register;
