"use client";

import type React from "react";
import { useState, useEffect, useRef } from "react";
import ReactMarkdown from "react-markdown";
import Link from "next/link";
import Image from "next/image";

// Definir el tipo User localmente
type User = {
  id: number;
  name: string;
  email: string;
  role?: string;
  has_access?: boolean;
};

type Message = {
  role: "user" | "bot";
  content: string;
  timestamp: Date;
};

export default function ChatComponent() {
  const [isOpen, setIsOpen] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [user, setUser] = useState<User | null>(null);
  const [isCheckingAccess, setIsCheckingAccess] = useState(true);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const messageContainerRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const checkUserAccess = async () => {
      try {
        setIsCheckingAccess(true);
        const token = localStorage.getItem("auth_token");
        const userId = localStorage.getItem("user_id");

        if (!token || !userId) {
          setUser(null);
          return;
        }

        const response = await fetch(
          `http://localhost:8000/api/users/${userId}`
        );

        if (!response.ok) {
          setUser(null);
          return;
        }

        const userData: User = await response.json();
        setUser(userData);
      } catch (error) {
        console.error("Error al verificar acceso del usuario:", error);
        setUser(null);
      } finally {
        setIsCheckingAccess(false);
      }
    };

    checkUserAccess();
  }, [isOpen, messages.length]);

  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages]);

  useEffect(() => {
    const handleChatButtonClick = () => {
      setIsOpen(true);
    };

    document.addEventListener("click", (e) => {
      const target = e.target as HTMLElement;
      if (target.id === "chat-button" || target.closest("#chat-button")) {
        handleChatButtonClick();
      }
    });

    return () => {
      document.removeEventListener("click", handleChatButtonClick);
    };
  }, []);

  const toggleChat = () => {
    setIsOpen(!isOpen);
    if (isOpen) {
      setIsExpanded(false);
    }
  };

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    if (!user) {
      setMessages((prev) => [
        ...prev,
        {
          role: "bot",
          content:
            "Debes iniciar sesión para enviar mensajes. Por favor, inicia sesión o regístrate para continuar.",
          timestamp: new Date(),
        },
      ]);
      return;
    }

    if (user.has_access !== true) {
      setMessages((prev) => [
        ...prev,
        {
          role: "bot",
          content:
            "Lo sentimos, no tienes permiso para enviar mensajes. Contacta al administrador para obtener acceso.",
          timestamp: new Date(),
        },
      ]);
      return;
    }

    const userMessage: Message = {
      role: "user",
      content: input,
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsLoading(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ chatInput: input }),
      });

      const data = await res.json();

      if (!data.message) throw new Error("Respuesta inválida de n8n");

      const botResponse: Message = {
        role: "bot",
        content: data.message,
        timestamp: new Date(),
      };

      setMessages((prev) => [...prev, botResponse]);
    } catch (error) {
      console.error("Error:", error);
      setMessages((prev) => [
        ...prev,
        {
          role: "bot",
          content:
            "Hubo un error al procesar tu solicitud. Por favor, intenta de nuevo más tarde.",
          timestamp: new Date(),
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  const downloadChat = () => {
    const chatContent = messages
      .map(
        (msg) =>
          `[${msg.timestamp.toLocaleTimeString()}] ${
            msg.role === "user" ? "Tú" : "Asistente"
          }: ${msg.content}`
      )
      .join("\n\n");

    const blob = new Blob([chatContent], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `chat-${new Date().toISOString().slice(0, 10)}.txt`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
  };

  const hasAccessToChat = user && user.has_access === true;

  return (
    <>
      {/* Botón flotante para abrir el chat */}
      <button
        ref={buttonRef}
        onClick={toggleChat}
        className="fixed w-15 h-15 bottom-6 right-6 bg-gradient-to-r from-indigo-600 to-purple-600 text-white p-4 rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 z-50 flex items-center justify-center"
        aria-label="Abrir chat"
      >
        {isOpen ? (
          <span className="rounded-full w-8 h-8 flex items-center justify-center">
            X
          </span>
        ) : (
          <div className="relative">
            <span className="text-xl">
              <Image
                src="/Bit&Brain.svg" // Ruta de la imagen
                alt="Logo Bit&Brain"
                width={48} // Ancho de la imagen
                height={48} // Alto de la imagen
                layout="intrinsic"
                className="mr-2 rounded-full"
              />
            </span>
            {!isOpen && messages.length > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                {messages.filter((m) => m.role === "bot").length}
              </span>
            )}
          </div>
        )}
      </button>

      {/* Contenedor del Chat */}
      <div
        className={`fixed mb-4 z-40 transition-all duration-300 ease-in-out ${
          isOpen ? "opacity-100 visible" : "opacity-0 invisible"
        } ${
          isExpanded
            ? "bottom-28 right-0 w-full sm:w-4/5 md:w-3/4 lg:w-2/3 xl:w-1/2 h-screen pt-90"
            : "bottom-20 right-6 w-[90%] max-w-[420px] sm:w-[420px]"
        }`}
      >
        <div className="bg-white rounded-lg shadow-2xl overflow-hidden flex flex-col h-full max-h-[80vh] sm:max-h-[600px] border border-gray-200">
          {/* Encabezado del Chat */}
          <div className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white p-4 flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <div className="bg-white/20 rounded-full">
                <span className="relative rounded-full shadow-md">
                  <Image
                    src="/Bit&Brain.svg" // Ruta de la imagen
                    alt="Logo Bit&Brain"
                    width={48} // Ancho de la imagen
                    height={48} // Alto de la imagen
                    layout="intrinsic"
                    className="rounded-full"
                  />
                </span>
              </div>
              <span className="font-bold">Asistente Bit&Brain</span>
            </div>
            <div className="flex items-center space-x-2">
              {/* <button
                onClick={downloadChat}
                className="text-white hover:bg-white/20 p-1.5 rounded-full transition-colors"
                aria-label="Descargar conversación"
                disabled={messages.length === 0}
              >
                <span className="text-sm">📥</span>
              </button> */}
              <button
                onClick={toggleExpand}
                className="text-white hover:bg-white/20 p-1.5 rounded-full transition-colors"
                aria-label={isExpanded ? "Minimizar chat" : "Expandir chat"}
              >
                <span className="text-sm">{isExpanded ? "⊖" : "⊕"}</span>
              </button>
              <button
                onClick={toggleChat}
                className="text-white hover:bg-white/20 p-1.5 rounded-full transition-colors"
                aria-label="Cerrar chat"
              >
                <span className="text-sm">✕</span>
              </button>
            </div>
          </div>

          {/* Mensajes */}
          <div
            ref={messageContainerRef}
            className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50"
          >
            {messages.length === 0 ? (
              <div className="flex flex-col items-center justify-center h-full text-gray-400">
                <span className="text-4xl mb-2 opacity-20">💬</span>
                <p>No hay mensajes aún</p>
                <p className="text-sm">
                  {!user
                    ? "Inicia sesión para comenzar una conversación"
                    : hasAccessToChat
                    ? "Envía un mensaje para comenzar la conversación"
                    : "Necesitas acceso para enviar mensajes"}
                </p>
              </div>
            ) : (
              messages.map((message, index) => (
                <div
                  key={index}
                  className={`flex ${
                    message.role === "user" ? "justify-end" : "justify-start"
                  }`}
                >
                  {message.role === "bot" && (
                    <div className="h-8 w-8 rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 flex items-center justify-center text-white mr-2 flex-shrink-0">
                      <span className="text-xs">AI</span>
                    </div>
                  )}
                  <div className="flex flex-col max-w-[75%]">
                    <div
                      className={`px-4 py-2 rounded-2xl ${
                        message.role === "user"
                          ? "bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-tr-none"
                          : "bg-white border border-gray-200 text-gray-800 rounded-tl-none shadow-sm"
                      }`}
                    >
                      <ReactMarkdown>{message.content}</ReactMarkdown>
                    </div>
                    <span
                      className={`text-xs mt-1 ${
                        message.role === "user" ? "text-right" : "text-left"
                      } text-gray-500`}
                    >
                      {formatTime(message.timestamp)}
                    </span>
                  </div>
                  {message.role === "user" && (
                    <div className="h-8 w-8 rounded-full bg-gray-200 flex items-center justify-center text-gray-600 ml-2 flex-shrink-0">
                      <span className="text-xs">Tú</span>
                    </div>
                  )}
                </div>
              ))
            )}
            {isLoading && (
              <div className="flex justify-start">
                <div className="h-8 w-8 rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 flex items-center justify-center text-white mr-2 flex-shrink-0">
                  <span className="text-xs">AI</span>
                </div>
                <div className="flex flex-col max-w-[75%]">
                  <div className="px-4 py-3 rounded-2xl bg-white border border-gray-200 text-gray-800 rounded-tl-none shadow-sm">
                    <div className="flex space-x-2">
                      <div className="w-2 h-2 rounded-full bg-indigo-600 animate-bounce" />
                      <div className="w-2 h-2 rounded-full bg-indigo-600 animate-bounce [animation-delay:0.2s]" />
                      <div className="w-2 h-2 rounded-full bg-indigo-600 animate-bounce [animation-delay:0.4s]" />
                    </div>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input para escribir */}
          <form
            onSubmit={handleSubmit}
            className="p-3 border-t border-gray-200 bg-white"
          >
            <div className="flex items-center rounded-full border border-gray-300 bg-gray-50 px-3 py-1 focus-within:ring-2 focus-within:ring-indigo-500 focus-within:border-indigo-500">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder={
                  !user
                    ? "Inicia sesión para enviar mensajes"
                    : hasAccessToChat
                    ? "Escribe un mensaje..."
                    : "Necesitas acceso para enviar mensajes"
                }
                className="flex-1 bg-transparent px-2 py-2 outline-none text-gray-800 placeholder-gray-500"
                disabled={isLoading || !hasAccessToChat || isCheckingAccess}
              />
              <button
                type="submit"
                className={`ml-2 p-2 rounded-full ${
                  input.trim() &&
                  !isLoading &&
                  hasAccessToChat &&
                  !isCheckingAccess
                    ? "bg-gradient-to-r from-indigo-600 to-purple-600 text-white"
                    : "bg-gray-200 text-gray-400 cursor-not-allowed"
                } transition-colors`}
                disabled={
                  !input.trim() ||
                  isLoading ||
                  !hasAccessToChat ||
                  isCheckingAccess
                }
                aria-label="Enviar mensaje"
              >
                <span className="text-sm">➤</span>
              </button>
            </div>
            <div className="mt-2 text-xs text-center text-gray-500">
              {!user ? (
                <span className="text-indigo-600">
                  <Link href="/login" className="hover:underline">
                    Inicia sesión
                  </Link>{" "}
                  para enviar mensajes
                </span>
              ) : !hasAccessToChat && !isCheckingAccess ? (
                <span className="text-red-500">
                  No tienes acceso para enviar mensajes
                </span>
              ) : (
                "Powered by n8n • Respuestas generadas automáticamente"
              )}
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
