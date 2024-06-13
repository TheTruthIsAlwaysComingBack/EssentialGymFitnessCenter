import React, { useState } from "react";
import Input from "./Input";
import Button from "./Button";
import "./LoginForm.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const LoginForm = ({ onSubmit }) => {
  const [message, setMessage] = useState(null);
  const [tipoAviso, setTipoAviso] = useState(null);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.get(
        "https://663d4e0617145c4d8c3937bf.mockapi.io/users"
      );
      const users = response.data;

      const user = users.find(
        (user) => user.email === email && user.contrasena === password
      );

      if (user) {
        setMessage("Inicio de sesión exitoso");
        setTipoAviso("Exitoso");
        onSubmit(user);
        localStorage.setItem("user", JSON.stringify(user));
        setTimeout(() => navigate("/principal"), 2000);
      } else {
        setMessage("Correo electrónico o contraseña incorrectos");
        setTipoAviso("Error");
      }
    } catch (error) {
      console.error("Error al iniciar sesión", error);
      setMessage("Hubo un problema al momento de iniciar sesión");
      setTipoAviso("Error");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="login-form">
      {message && (
        <div className={`message ${tipoAviso.toLowerCase()}`}>{message}</div>
      )}
      <Input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <Input
        type="password"
        placeholder="Contraseña"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <Button type="submit">Ingresar</Button>
    </form>
  );
};

export default LoginForm;
