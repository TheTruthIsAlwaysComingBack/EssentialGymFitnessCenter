import React from "react";
import Input from "./Input";
import Button from "./Button";

const ChatForm = ({ input, setInput, handleSubmit, isTyping, config }) => {
  return (
    <form className="chat-form" onSubmit={handleSubmit}>
      <Input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder={config.inputPlaceholder}
        disabled={isTyping}
      />
      <Button type="submit" disabled={isTyping}>
        Enviar
      </Button>
    </form>
  );
};

export default ChatForm;
