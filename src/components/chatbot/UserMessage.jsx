import React from "react";
import Message from "./Message";

const UserMessage = ({ message }) => {
  return <Message text={message.text} role="user" image={message.image} />;
};

export default UserMessage;
