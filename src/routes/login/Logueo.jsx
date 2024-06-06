import React from "react";
import FormularioLogin from "../../components/fomularioLogin/organisms/Login";

const Logueo = () => {
  const handleLogin = (data) => {
    console.log("Login data:", data);
    // Aquí iría la lógica para manejar el login, por ejemplo, una llamada a una API
  };

  return <FormularioLogin onSubmit={handleLogin} />;
};

export default Logueo;
