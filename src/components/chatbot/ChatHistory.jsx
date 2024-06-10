import React, { useRef, useEffect } from "react";
import UserMessage from "./UserMessage";
import IAMessage from "./IAMessage";
import "./ChatHistory.css";

const ChatHistory = ({ messages, isTyping }) => {
  const messagesEndRef = useRef(null);

  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages, isTyping]);

  return (
    <div className="chat-messages">
      {messages.map((msg, index) => (
        <div key={index} className={`message-container ${msg.role}`}>
          {msg.role === "model" ? (
            <IAMessage message={msg} />
          ) : (
            <UserMessage message={msg} />
          )}
        </div>
      ))}
      {isTyping && (
        <div className="message message-bot typing">
          <span>Escribiendo...</span>
        </div>
      )}
      <div ref={messagesEndRef} />
    </div>
  );
};

export default ChatHistory;
