import React from "react";
import "./AudioControlButton.css";

const AudioControlButton = ({ icon, onClick }) => (
  <button className="AudioControlButton" onClick={onClick}>
    <i className={`icon-${icon}`}></i>
  </button>
);

export default AudioControlButton;
