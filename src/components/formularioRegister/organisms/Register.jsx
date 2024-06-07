import React from "react";
import LoginForm from "../../fomularioLogin/molecules/LoginForm";
import Image from "../../fomularioLogin/atoms/Image";

const Register = () => {
  return (
    <div className="login-organism">
      <div className="login-initial-menssage">
        <Image />
        <h1>BIENVENIDO!</h1>
        <p>Usa tus credenciales e inicia sesión en tu cuenta</p>
      </div>
      <div className="login-button-register">
        <LoginForm onSubmit={onSubmit} />
      </div>
      <p>
        Aún no tienes una cuenta? <a href="/register">Regístrate</a>
      </p>
    </div>
  );
};

export default Register;
