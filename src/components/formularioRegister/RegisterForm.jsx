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
  const [edad, setEdad] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const calcularEdad = (fecha) => {
    const hoy = new Date();
    const fechaNacimiento = new Date(fecha);
    let edad = hoy.getFullYear() - fechaNacimiento.getFullYear();
    const mes = hoy.getMonth() - fechaNacimiento.getMonth();
    if (mes < 0 || (mes === 0 && hoy.getDate() < fechaNacimiento.getDate())) {
      edad--;
    }
    return edad;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const edadCalculada = calcularEdad(fechaNacimiento);

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
        edad: `${edadCalculada} años`,
        estado: "Activo",
        rol: "cliente",
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

  const handleFotoChange = async (e) => {
    const file = e.target.files[0];
    if (file) {
      setLoading(true);
      const formData = new FormData();
      formData.append("image", file);

      try {
        const imgbbResponse = await axios.post(
          "https://api.imgbb.com/1/upload?key=a5fe02da4325f3932cb68d3c3e246037",
          formData
        );

        const fotoUrl = imgbbResponse.data.data.url;
        setFoto(fotoUrl);
        setLoading(false);
      } catch (error) {
        console.error("Error al subir la imagen", error);
        setLoading(false);
      }
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
        onChange={(e) => {
          setFechaNacimiento(e.target.value);
          setEdad(calcularEdad(e.target.value));
        }}
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
      <div className="select-wrapper">
        <label htmlFor="sexo">Sexo</label>
        <select
          id="sexo"
          value={sexo}
          onChange={(e) => setSexo(e.target.value)}
        >
          <option value="">Seleccione su sexo</option>
          <option value="Masculino">Masculino</option>
          <option value="Femenino">Femenino</option>
        </select>
      </div>
      <Input type="file" placeholder="Subir foto" onChange={handleFotoChange} />
      {loading && <p>Subiendo imagen...</p>}
      <Input
        type="password"
        placeholder="Contraseña"
        value={contrasena}
        onChange={(e) => setContrasena(e.target.value)}
      />
      <Button type="submit" disabled={loading}>
        Registrarse
      </Button>
    </form>
  );
};

export default RegisterForm;
