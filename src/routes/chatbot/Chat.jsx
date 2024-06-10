import React, { useState, useEffect } from "react";
import { enviarMensaje, iniciarChat } from "../../IA/ConexionApi";
import config from "../../data/Configuracion.json";
import ChatForm from "../../components/chatbot/ChatForm";
import ChatHistory from "../../components/chatbot/ChatHistory";
import "./Chat.css";
import Arrow from "../../components/chatbot/Arrow";
import DotsVertical from "../../components/chatbot/DotsVertical";

function Chat() {
  const [messages, setMessages] = useState(config.initialMessages);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [chat, setChat] = useState(null);
  const [isTyping, setIsTyping] = useState(false);
  const [randomImage, setRandomImage] = useState("");
  const [isMenuVisible, setIsMenuVisible] = useState(false);

  useEffect(() => {
    const fetchRandomImage = async () => {
      try {
        const response = await fetch("https://picsum.photos/200");
        setRandomImage(response.url);
      } catch (error) {
        console.error("Error fetching random image", error);
      }
    };

    fetchRandomImage();
  }, []);

  useEffect(() => {
    const startConversation = async () => {
      try {
        const newChat = await iniciarChat([]);
        setChat(newChat);
      } catch (error) {
        setError(config.errors.startConversation);
        console.error("Error starting conversation", error);
      }
    };
    startConversation();
  }, []);

  const handleMessageSend = async (e) => {
    e.preventDefault();
    if (!input.trim()) return;
    console.clear();

    const newMessage = {
      role: "user",
      text: input,
      image: randomImage,
    };

    setMessages((prevMessages) => {
      const newMessages = [...prevMessages, newMessage];
      if (newMessages.length > 10) {
        newMessages.shift();
      }
      return newMessages;
    });

    setInput("");
    setIsLoading(true);
    setIsTyping(true);

    const instruction = `
          ${config.baseInstruction}
          Usuario: ${input}
          Respuesta:
        `;

    console.log(instruction);

    let attempts = 0;
    let messageSent = false;
    setError("");

    while (attempts < 4 && !messageSent) {
      try {
        const responseText = await enviarMensaje(
          chat,
          instruction,
          config.generationConfig
        );

        const iaMessage = {
          role: "model",
          text: responseText,
          image: "https://i.ibb.co/BP7p8s7/robot-2.png",
        };
        setMessages((prevMessages) => {
          const newMessages = [...prevMessages, iaMessage];
          if (newMessages.length > 30) {
            newMessages.shift();
          }
          return newMessages;
        });
        messageSent = true;
      } catch (error) {
        attempts++;
        if (attempts === 4) {
          setMessages((prevMessages) =>
            prevMessages.filter((msg) => msg !== newMessage)
          );
          const botMessage = {
            role: "model",
            text: "Parece que hay un problema con ese tema. ¿Podemos hablar de otra cosa?",
            image: "https://i.ibb.co/Gd0d7Dh/robot.png",
          };
          setMessages((prevMessages) => {
            const newMessages = [...prevMessages, botMessage];
            if (newMessages.length > 30) {
              newMessages.shift();
            }
            return newMessages;
          });

          setError(config.errors.sendMessage);
          console.error("Error sending message", error);
        }
      }
    }

    setIsLoading(false);
    setIsTyping(false);
  };

  const handleToggleMenu = () => {
    setIsMenuVisible(!isMenuVisible);
  };

  const handleDeleteHistory = () => {
    setMessages([]);
    setIsMenuVisible(false);
  };

  return (
    <div className="container">
      <div className="chat-header">
        <Arrow />
        <p>
          Essential<span className="chat-header__span">Gym</span>
        </p>
        <div className="menu-container">
          <DotsVertical onClick={handleToggleMenu} />
          {isMenuVisible && (
            <div className="menu">
              <button onClick={handleDeleteHistory}>
                Eliminar Historial de Chat
              </button>
            </div>
          )}
        </div>
      </div>
      <ChatHistory messages={messages} isTyping={isTyping} />
      <ChatForm
        input={input}
        setInput={setInput}
        handleSubmit={handleMessageSend}
        isTyping={isTyping}
        config={config}
      />
      {error && <div className="error">{error}</div>}
    </div>
  );
}

export default Chat;
