import React, { useEffect, useState } from "react";
import InformacionUsuario from "../../components/DatosUsuario/InformacionUsuario";
import "./PerfilCliente.css";
import Header from "../../components/header/Header";

const PerfilCliente = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  if (!user) {
    return <p>Por favor, inicia sesión.</p>;
  }

  return (
    <div className="perfil-container-general">
      <Header seccion="Perfil" />
      <div className="perfil-container">
        <InformacionUsuario user={user} />
      </div>
    </div>
  );
};

export default PerfilCliente;
