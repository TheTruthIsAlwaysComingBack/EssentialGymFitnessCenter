import React from "react";
import "./Message.css";

const Message = ({ text, role, image }) => {
  return (
    <div className={`message-container ${role}`}>
      {image && (
        <div className="avatar-container">
          <img src={image} alt={`Avatar ${role}`} className="avatar" />
        </div>
      )}
      <div className={`message ${role}`}>
        <div className="message-text">{text}</div>
      </div>
    </div>
  );
};

export default Message;
