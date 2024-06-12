import React from "react";
import Register from "../../components/formularioRegister/Register";
import "./Registrarse.css";

const Registrarse = () => {
  const handleRegister = (data) => {
    console.log("Register data:", data);
    // Aquí iría la lógica para manejar el registro, por ejemplo, una llamada a una API
  };

  return (
    <div className="container-register">
      <Register onSubmit={handleRegister} />
    </div>
  );
};

export default Registrarse;
