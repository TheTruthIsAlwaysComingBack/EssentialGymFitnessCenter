import { useState, useEffect } from "react";
import React from "react";
import "./DatosUsuario.css";

const DatosUsuario = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      const data = [
        {
          name: "Juan Vidal",
          state: "Activo",
          age: "23 Años",
          gender: "Hombre",
          image:
            "https://ipfs.io/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/766.jpg",
        },
      ];
      setUser(data[0]);
    };

    fetchUser();
  }, []);

  if (!user) return <div>Loading...</div>;

  return (
    <div className="info-principal">
      <div className="icono-usuario">
        <img src={user.image} alt={user.age} />
      </div>
      <div className="caracteristicas">
        <p className="name no-margin">{user.name}</p>
        <div className="descripcion-estado">
          <p className="estado no-margin">{user.state}</p>
          <p className="edad no-margin">{user.age}</p>
          <p className="sexo no-margin">{user.gender}</p>
        </div>
      </div>
    </div>
  );
};

export default DatosUsuario;
