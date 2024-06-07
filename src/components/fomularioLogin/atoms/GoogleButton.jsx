import React from "react";
import "./GoogleButton.css";
import Google from "./Google";

const GoogleButton = ({ onClick }) => {
  return (
    <button onClick={onClick} className="google-button">
      <Google className="google-icon" /> Continua con Google
    </button>
  );
};

export default GoogleButton;
