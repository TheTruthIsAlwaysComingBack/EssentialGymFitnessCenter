import React from "react";
import Login from "../../components/fomularioLogin/Login";
import "./Logueo.css";

const Logueo = () => {
  const handleLogin = (data) => {
    console.log("Login data:", data);
    // Aquí iría la lógica para manejar el login, por ejemplo, una llamada a una API
  };

  return (
    <div className="container-logueo">
      <Login onSubmit={handleLogin} />
    </div>
  );
};

export default Logueo;
