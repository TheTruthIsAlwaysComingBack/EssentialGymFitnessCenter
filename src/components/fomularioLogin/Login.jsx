import React from "react";
import LoginForm from "./LoginForm";
import GoogleButton from "./GoogleButton";
import Image from "./Image";
import "./Login.css";
import { NavLink } from "react-router-dom";

const Login = ({ onSubmit }) => {
  return (
    <div className="login-organism">
      <div className="login-initial-menssage">
        <Image />
        <h1>BIENVENIDO!</h1>
        <p>
          Usa tus credenciales e inicia sesión
          <br />
          en tu cuenta
        </p>
      </div>
      <div className="login-google-button">
        <LoginForm onSubmit={onSubmit} />
        <p>O Ingresa con</p>
        <GoogleButton
          onClick={() =>
            (window.location = "https://accounts.google.com/o/oauth2/auth")
          }
        />
      </div>
      <p>
        Aún no tienes una cuenta? <NavLink to="/register">Regístrate</NavLink>
      </p>
    </div>
  );
};

export default Login;
