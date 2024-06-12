import React, { useState } from "react";
import Input from "./Input";
import Button from "./Button";
import "./RegisterForm.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const RegisterForm = ({ onSubmit }) => {
  const [nombre, setNombre] = useState("");
  const [fechaNacimiento, setFechaNacimiento] = useState("");
  const [direccion, setDireccion] = useState("");
  const [numeroCelular, setNumeroCelular] = useState("");
  const [email, setEmail] = useState("");
  const [ci, setCi] = useState("");
  const [sexo, setSexo] = useState("");
  const [foto, setFoto] = useState("");
  const [contrasena, setContrasena] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const newUser = {
        nombre,
        fechaNacimiento,
        direccion,
        numeroCelular,
        email,
        ci,
        sexo,
        foto,
        contrasena,
      };

      const response = await axios.post(
        "https://663d4e0617145c4d8c3937bf.mockapi.io/users",
        newUser
      );

      if (response.status === 201) {
        onSubmit(newUser);
        navigate("/");
      } else {
        console.error("Error al registrar usuario", response);
      }
    } catch (error) {
      console.error("Error al registrar usuario", error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="register-form">
      <Input
        type="text"
        placeholder="Nombres y apellidos"
        value={nombre}
        onChange={(e) => setNombre(e.target.value)}
      />
      <Input
        type="date"
        placeholder="Fecha de nacimiento"
        value={fechaNacimiento}
        onChange={(e) => setFechaNacimiento(e.target.value)}
      />
      <Input
        type="text"
        placeholder="Dirección"
        value={direccion}
        onChange={(e) => setDireccion(e.target.value)}
      />
      <Input
        type="text"
        placeholder="Número de celular"
        value={numeroCelular}
        onChange={(e) => setNumeroCelular(e.target.value)}
      />
      <Input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <Input
        type="text"
        placeholder="CI"
        value={ci}
        onChange={(e) => setCi(e.target.value)}
      />
      <Input
        type="text"
        placeholder="Sexo"
        value={sexo}
        onChange={(e) => setSexo(e.target.value)}
      />
      <Input
        type="text"
        placeholder="URL de la foto"
        value={foto}
        onChange={(e) => setFoto(e.target.value)}
      />
      <Input
        type="password"
        placeholder="Contraseña"
        value={contrasena}
        onChange={(e) => setContrasena(e.target.value)}
      />
      <Button type="submit">Registrarse</Button>
    </form>
  );
};

export default RegisterForm;
