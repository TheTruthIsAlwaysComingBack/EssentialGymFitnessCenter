import React, { useState } from "react";
import EyeIcon from "./EyeIcon";
import EyeIconOff from "./EyeIconOff";
import CircleCheck from "./CircleCheck";
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
        <span className="input-icon">
          <CircleCheck />
        </span>
      )}
      {type === "password" && (
        <span className="input-icon" onClick={handleToggleVisibility}>
          {isPasswordVisible ? <EyeIcon /> : <EyeIconOff />}
        </span>
      )}
    </div>
  );
};

export default Input;
