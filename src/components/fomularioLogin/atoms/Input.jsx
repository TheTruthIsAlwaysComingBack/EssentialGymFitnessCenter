import React, { useState } from "react";
import "./Input.css";

const Input = ({ type, placeholder, value, onChange }) => {
  const [isPasswordVisible, setPasswordVisible] = useState(false);

  const handleToggleVisibility = () => {
    setPasswordVisible(!isPasswordVisible);
  };

  return (
    <div className="input-container">
      <input
        type={type === "password" && isPasswordVisible ? "text" : type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="input"
      />
      {type === "email" && value.includes("@") && (
        <span className="input-icon">✔️</span>
      )}
      {type === "password" && (
        <span className="input-icon" onClick={handleToggleVisibility}>
          {isPasswordVisible ? "🙈" : "👁️"}
        </span>
      )}
    </div>
  );
};

export default Input;
