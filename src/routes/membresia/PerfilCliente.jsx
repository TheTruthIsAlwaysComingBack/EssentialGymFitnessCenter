import React, { useEffect, useState } from "react";
import InformacionUsuario from "../../components/DatosUsuario/InformacionUsuario";
import EditarPerfil from "../../components/editarPerfil/EditarPerfil";
import "./PerfilCliente.css";
import Header from "../../components/header/Header";

const PerfilCliente = () => {
  const [user, setUser] = useState(null);
  const [membership, setMembership] = useState(null);
  const [editing, setEditing] = useState(false);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      const parsedUser = JSON.parse(storedUser);
      setUser(parsedUser);
      fetchMembership(parsedUser.id);
    }
  }, []);

  const fetchMembership = async (userId) => {
    try {
      const response = await fetch(
        `https://663d4e0617145c4d8c3937bf.mockapi.io/membresia/${userId}`
      );
      const data = await response.json();
      setMembership(data.membresia);
    } catch (error) {
      console.error("Error fetching membership:", error);
    }
  };

  const handleUpdate = (updatedUser) => {
    setUser(updatedUser);
    localStorage.setItem("user", JSON.stringify(updatedUser));
    setEditing(false);
  };

  if (!user) {
    return <p>Por favor, inicia sesión.</p>;
  }

  return (
    <div className="perfil-container-general">
      <Header seccion="Perfil" />
      <div className="perfil-container">
        {editing ? (
          <EditarPerfil user={user} onUpdate={handleUpdate} />
        ) : (
          <>
            <InformacionUsuario user={{ ...user, membresia: membership }} />
            <button className="boton-route" onClick={() => setEditing(true)}>
              Editar Perfil
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default PerfilCliente;
