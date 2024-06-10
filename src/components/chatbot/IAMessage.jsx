import React from "react";
import Message from "./Message";
import ReactMarkdown from "react-markdown";

const IAMessage = ({ message }) => {
  return (
    <Message
      text={<ReactMarkdown>{message.text}</ReactMarkdown>}
      role="model"
      image={message.image}
    />
  );
};

export default IAMessage;
