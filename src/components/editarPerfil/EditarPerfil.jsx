import React, { useState } from "react";
import axios from "axios";
import "./EditarPerfil.css";

const EditarPerfil = ({ user, onUpdate }) => {
  const [formData, setFormData] = useState({ ...user });
  const [imageUploading, setImageUploading] = useState(false);
  const [imagePreview, setImagePreview] = useState(user.foto);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleImageUpload = async (e) => {
    const file = e.target.files[0];
    const formDataImage = new FormData();
    formDataImage.append("image", file);
    setImageUploading(true);
    setImagePreview(URL.createObjectURL(file));

    try {
      const response = await axios.post(
        "https://api.imgbb.com/1/upload?key=a5fe02da4325f3932cb68d3c3e246037",
        formDataImage
      );
      setFormData({
        ...formData,
        foto: response.data.data.url,
      });
      setImageUploading(false);
    } catch (error) {
      console.error("Error uploading image:", error);
      setImageUploading(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(
        `https://663d4e0617145c4d8c3937bf.mockapi.io/users/${user.id}`,
        formData
      );
      onUpdate(formData);
    } catch (error) {
      console.error("Error updating user:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="editar-perfil-form">
      <label>
        Nombre:
        <input
          type="text"
          name="nombre"
          value={formData.nombre}
          onChange={handleChange}
        />
      </label>
      <label>
        Fecha de Nacimiento:
        <input
          type="date"
          name="fechaNacimiento"
          value={formData.fechaNacimiento}
          onChange={handleChange}
        />
      </label>
      <label>
        Dirección:
        <input
          type="text"
          name="direccion"
          value={formData.direccion}
          onChange={handleChange}
        />
      </label>
      <label>
        Número de Celular:
        <input
          type="text"
          name="numeroCelular"
          value={formData.numeroCelular}
          onChange={handleChange}
        />
      </label>
      <label>
        Email:
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
      </label>
      <label>
        CI:
        <input
          type="text"
          name="ci"
          value={formData.ci}
          onChange={handleChange}
        />
      </label>
      <label>
        Sexo:
        <select name="sexo" value={formData.sexo} onChange={handleChange}>
          <option value="Masculino">Masculino</option>
          <option value="Femenino">Femenino</option>
        </select>
      </label>
      <div className="image-upload">
        <label>
          Foto:
          <input type="file" onChange={handleImageUpload} />
        </label>
        {imagePreview && (
          <img src={imagePreview} alt="Preview" className="image-preview" />
        )}
        {imageUploading && <p>Subiendo imagen...</p>}
      </div>
      <label>
        Contraseña:
        <input
          type="password"
          name="contrasena"
          value={formData.contrasena}
          onChange={handleChange}
        />
      </label>
      <label>
        Rol:
        <input
          type="text"
          name="rol"
          value={formData.rol}
          onChange={handleChange}
        />
      </label>
      <button type="submit">Guardar Cambios</button>
    </form>
  );
};

export default EditarPerfil;
