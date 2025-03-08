"use client"

import type React from "react"
import { useState } from "react"

export default function Home() {
  const [messages, setMessages] = useState<{ role: "user" | "bot"; content: string }[]>([
  ])
  const [input, setInput] = useState("")
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!input.trim()) return

    // Add user message to chat
    const userMessage = { role: "user" as const, content: input }
    setMessages((prev) => [...prev, userMessage])
    setInput("")
    setIsLoading(true)

    try {
      // Hacer la solicitud POST a la API de Next.js
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ chatInput: input }),
      })

      const data = await res.json()

      // Aquí agregamos la respuesta del chatbot
      setMessages((prev) => [
        ...prev,
        { role: "bot", content: data.message ?? "Lo siento, no pude obtener una respuesta válida." },
      ])
    } catch (error) {
      console.error("Error:", error)
      setMessages((prev) => [
        ...prev,
        {
          role: "bot",
          content: "Lo siento, hubo un error al procesar tu solicitud.",
        },
      ])
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <main className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-gray-900">ChatBot</h1>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Hero Section */}
          <section className="text-center mb-16">
            <h2 className="text-4xl font-extrabold text-gray-900 tracking-tight sm:text-5xl">
              Bienvenido a nuestro Asistente Virtual
            </h2>
            <p className="mt-4 text-xl text-gray-500 max-w-2xl mx-auto">
              Obtén respuestas instantáneas a tus preguntas con nuestro asistente inteligente.
            </p>
            <div className="mt-10">
              <a
                href="#chat"
                className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Comenzar a chatear
              </a>
            </div>
          </section>

          {/* Features */}
          <section className="mb-16">
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              <div className="bg-white overflow-hidden shadow rounded-lg">
                <div className="px-4 py-5 sm:p-6">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white mb-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13 10V3L4 14h7v7l9-11h-7z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-lg font-medium text-gray-900">Respuestas Rápidas</h3>
                  <p className="mt-2 text-sm text-gray-500">
                    Obtén respuestas instantáneas a tus preguntas sin esperas.
                  </p>
                </div>
              </div>

              <div className="bg-white overflow-hidden shadow rounded-lg">
                <div className="px-4 py-5 sm:p-6">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white mb-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
                      />
                    </svg>
                  </div>
                  <h3 className="text-lg font-medium text-gray-900">Personalizable</h3>
                  <p className="mt-2 text-sm text-gray-500">
                    Conecta con n8n para personalizar las respuestas según tus necesidades.
                  </p>
                </div>
              </div>

              <div className="bg-white overflow-hidden shadow rounded-lg">
                <div className="px-4 py-5 sm:p-6">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white mb-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-lg font-medium text-gray-900">Seguro</h3>
                  <p className="mt-2 text-sm text-gray-500">Tus conversaciones están seguras y protegidas.</p>
                </div>
              </div>
            </div>
          </section>

          {/* Chat Interface */}
          <section id="chat" className="bg-white shadow-lg rounded-lg overflow-hidden">
            <div className="border-b border-gray-200 px-4 py-4 sm:px-6">
              <h2 className="text-lg font-medium text-gray-900">Chat con nuestro Asistente</h2>
            </div>
            <div className="h-96 overflow-y-auto p-4 space-y-4 bg-gray-50">
              {messages.map((message, index) => (
                <div key={index} className={`flex ${message.role === "user" ? "justify-end" : "justify-start"}`}>
                  <div
                    className={`max-w-[80%] rounded-lg px-4 py-2 ${
                      message.role === "user" ? "bg-indigo-600 text-white" : "bg-gray-200 text-gray-800 shadow-sm"
                    }`}
                  >
                    {message.content}
                  </div>
                </div>
              ))}
              {isLoading && (
                <div className="flex justify-start">
                  <div className="max-w-[80%] rounded-lg px-4 py-2 bg-gray-200 text-gray-800 shadow-sm">
                    <div className="flex space-x-2">
                      <div className="w-2 h-2 rounded-full bg-indigo-600 animate-bounce" />
                      <div className="w-2 h-2 rounded-full bg-indigo-600 animate-bounce [animation-delay:0.2s]" />
                      <div className="w-2 h-2 rounded-full bg-indigo-600 animate-bounce [animation-delay:0.4s]" />
                    </div>
                  </div>
                </div>
              )}
            </div>
            <div className="border-t border-gray-200 px-4 py-4 sm:px-6">
              <form onSubmit={handleSubmit} className="flex space-x-3">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Escribe tu mensaje..."
                  className="flex-1 min-w-0 block w-full px-3 py-2 rounded-md border border-gray-400 bg-white text-gray-900 placeholder-gray-500 shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  disabled={isLoading}
                />
                <button
                  type="submit"
                  className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:opacity-50 disabled:cursor-not-allowed"
                  disabled={isLoading}
                >
                  Enviar
                </button>
              </form>
            </div>
          </section>

          {/* Footer */}
          <footer className="mt-16 text-center">
            <p className="text-sm text-gray-500">
              © {new Date().getFullYear()} ChatBot. Todos los derechos reservados.
            </p>
          </footer>
        </div>
      </div>
    </main>
  )
}

