import { GoogleGenerativeAI } from "@google/generative-ai";
const CLAVE_API_GEMINI = import.meta.env.VITE_GEMINI_API_KEY;

export const getApiKey = () => CLAVE_API_GEMINI;

export const iniciarChat = async (params) => {
  try {
    const genAI = new GoogleGenerativeAI(CLAVE_API_GEMINI);
    const modelo = genAI.getGenerativeModel({ model: "gemini-1.5-pro-latest" });
    return { modelo, params };
  } catch (error) {
    console.error("Error al iniciar el chat:", error);
    throw error;
  }
};

export const enviarMensaje = async (chat, instruccion, config) => {
  try {
    const resultado = await chat.modelo.generateContent(instruccion, config);
    const textoRespuesta = await resultado.response.text();
    return textoRespuesta;
  } catch (error) {
    console.error("Error al enviar mensaje:", error);
    throw error;
  }
};
