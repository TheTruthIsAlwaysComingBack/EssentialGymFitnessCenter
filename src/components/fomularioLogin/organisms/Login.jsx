import React from "react";
import LoginForm from "../molecules/LoginForm";
import GoogleButton from "../atoms/GoogleButton";
import Image from "../atoms/Image";
import "./Login.css";

const Login = ({ onSubmit }) => {
  return (
    <div className="login-organism">
      <Image />
      <h1>BIENVENIDO!</h1>
      <p>Usa tus credenciales e inicia sesión en tu cuenta</p>
      <LoginForm onSubmit={onSubmit} />
      <div className="login-google-button">
        <p>O Ingresa con</p>
        <GoogleButton
          onClick={() =>
            (window.location = "https://accounts.google.com/o/oauth2/auth")
          }
        />
      </div>
      <p>
        Aún no tienes una cuenta? <a href="/register">Regístrate</a>
      </p>
    </div>
  );
};

export default Login;
