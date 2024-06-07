import React from "react";
import Register from "../../components/formularioRegister/organisms/Register";

const Registrarse = () => {
  const handleLogin = (data) => {
    console.log("Login data:", data);
    // Aquí iría la lógica para manejar el login, por ejemplo, una llamada a una API
  };

  return (
    <div className="">
      <Register onSubmit={handleLogin} />
    </div>
  );
};

export default Registrarse;
