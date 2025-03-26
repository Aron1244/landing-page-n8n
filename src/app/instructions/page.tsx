"use client";

export default function Instructions() {
  return (
    <main className="bg-gray-50">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 to-purple-50">
          <div
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage:
                "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%236366F1' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
            }}
          />
        </div>

        <div className="max-w-7xl mx-auto px-4 py-24 sm:px-6 lg:px-8 relative">
          <div className="text-center">
            <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
              <span className="block">Guía de Implementación</span>
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600 mt-2">
                Bit&Brain AI para Ferreterías
              </span>
            </h1>
            <p className="mt-6 max-w-2xl mx-auto text-xl text-gray-500">
              Aprende cómo implementar nuestro asistente virtual para optimizar
              la atención al cliente y gestión de inventario en tu ferretería.
            </p>
          </div>
          <div className="mb-50"></div>
        </div>
        {/* Decoración de ondas */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1440 320"
            className="w-full h-auto"
          >
            <path
              fill="#ffffff"
              fillOpacity="1"
              d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,122.7C672,117,768,139,864,149.3C960,160,1056,160,1152,138.7C1248,117,1344,75,1392,53.3L1440,32L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            ></path>
          </svg>
        </div>
      </section>

      {/* Beneficios Específicos */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Beneficios para tu Ferretería
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
              Optimiza tu negocio con tecnología de punta
            </p>
          </div>

          <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {/* Beneficio 1 */}
            <div className="relative p-6 bg-white rounded-lg border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
              <div className="absolute -top-4 -left-4 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-lg p-3 text-white shadow-md">
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z"
                  ></path>
                </svg>
              </div>
              <h3 className="mt-8 text-lg font-medium text-gray-900">
                Gestión de Inventario
              </h3>
              <p className="mt-2 text-base text-gray-500">
                Información precisa sobre disponibilidad, ubicación y
                especificaciones de herramientas y materiales.
              </p>
            </div>

            {/* Beneficio 2 */}
            <div className="relative p-6 bg-white rounded-lg border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
              <div className="absolute -top-4 -left-4 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-lg p-3 text-white shadow-md">
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
                  ></path>
                </svg>
              </div>
              <h3 className="mt-8 text-lg font-medium text-gray-900">
                Atención 24/7
              </h3>
              <p className="mt-2 text-base text-gray-500">
                Respuestas instantáneas a consultas sobre productos, precios y
                disponibilidad en cualquier momento.
              </p>
            </div>

            {/* Beneficio 3 */}
            <div className="relative p-6 bg-white rounded-lg border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
              <div className="absolute -top-4 -left-4 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-lg p-3 text-white shadow-md">
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                  ></path>
                </svg>
              </div>
              <h3 className="mt-8 text-lg font-medium text-gray-900">
                Experiencia Omnicanal
              </h3>
              <p className="mt-2 text-base text-gray-500">
                Integración perfecta con WhatsApp, Telegram y tu sitio web para
                una experiencia unificada.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Proceso de Implementación */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Proceso de Implementación
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
              Configuración simple en 4 pasos
            </p>
          </div>

          <div className="mt-16">
            <div className="relative">
              <div className="hidden md:block absolute top-0 left-1/2 w-0.5 h-full bg-gradient-to-b from-indigo-600 to-indigo-600 transform -translate-x-1/2"></div>

              <div className="space-y-16">
                {/* Paso 1: Recopilación de Datos */}
                <div className="relative">
                  <div className="md:flex items-center">
                    <div className="md:w-1/2 mb-6 md:mb-0 md:pr-8">
                      <div className="md:float-right text-right">
                        <div className="inline-flex items-center justify-center h-12 w-12 rounded-full bg-gradient-to-r from-indigo-600 to-indigo-600 text-white shadow-lg mb-4">
                          <svg
                            className="w-6 h-6"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4"
                            ></path>
                          </svg>
                        </div>
                        <h3 className="text-xl font-medium text-gray-900">
                          Recopilación de Datos
                        </h3>
                        <p className="mt-2 text-base text-gray-500">
                          Organizamos tu catálogo de productos, precios y
                          especificaciones técnicas en un formato optimizado.
                        </p>
                      </div>
                    </div>
                    <div className="hidden md:block absolute top-0 left-1/2 w-8 h-8 bg-indigo-600 rounded-full transform -translate-x-1/2"></div>
                    <div className="md:w-1/2 md:pl-8">
                      <div className="bg-white p-6 rounded-lg shadow-md">
                        <div className="space-y-2">
                          <div className="flex items-center space-x-2">
                            <svg
                              className="w-5 h-5 text-indigo-600"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z"
                              ></path>
                            </svg>
                            <span>Catálogo de herramientas</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <svg
                              className="w-5 h-5 text-indigo-600"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                              ></path>
                            </svg>
                            <span>Inventario de materiales</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <svg
                              className="w-5 h-5 text-indigo-600"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                              ></path>
                            </svg>
                            <span>Especificaciones técnicas</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Paso 2: Entrenamiento del AI */}
                <div className="relative">
                  <div className="md:flex items-center">
                    <div className="md:w-1/2 mb-6 md:mb-0 md:pr-8 md:order-last ml-16">
                      <div className="md:float-left text-left">
                        <div className="inline-flex items-center justify-center h-12 w-12 rounded-full bg-gradient-to-r from-indigo-600 to-indigo-600 text-white shadow-lg mb-4">
                          <svg
                            className="w-6 h-6"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                            ></path>
                          </svg>
                        </div>
                        <h3 className="text-xl font-medium text-gray-900">
                          Entrenamiento del AI
                        </h3>
                        <p className="mt-2 text-base text-gray-500">
                          Nuestro sistema procesa la información para crear
                          respuestas precisas y contextualizadas.
                        </p>
                      </div>
                    </div>
                    <div className="hidden md:block absolute top-0 left-1/2 w-8 h-8 bg-indigo-600 rounded-full transform -translate-x-1/2"></div>
                    <div className="md:w-1/2 md:pr-8 md:order-first">
                      <div className="bg-white p-6 rounded-lg shadow-md">
                        <div className="space-y-4">
                          <div className="flex items-start space-x-3">
                            <div className="h-8 w-8 rounded-full bg-indigo-600 flex items-center justify-center text-white flex-shrink-0">
                              <span className="text-xs">AI</span>
                            </div>
                            <div className="bg-gray-100 p-3 rounded-lg">
                              <p className="text-sm">
                                ¿Tienen taladros inalámbricos?
                              </p>
                            </div>
                          </div>
                          <div className="flex items-start space-x-3 justify-end">
                            <div className="bg-indigo-50 p-3 rounded-lg">
                              <p className="text-sm">
                                Sí, contamos con taladros DeWalt 20V MAX...
                              </p>
                            </div>
                            <div className="h-8 w-8 rounded-full bg-indigo-600 flex items-center justify-center text-white flex-shrink-0">
                              <svg
                                className="w-4 h-4"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth="2"
                                  d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                                ></path>
                              </svg>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Paso 3: Integración de Canales */}
                <div className="relative">
                  <div className="md:flex items-center">
                    <div className="md:w-1/2 mb-6 md:mb-0 md:pr-8">
                      <div className="md:float-right text-right">
                        <div className="inline-flex items-center justify-center h-12 w-12 rounded-full bg-gradient-to-r from-indigo-600 to-indigo-600 text-white shadow-lg mb-4">
                          <svg
                            className="w-6 h-6"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
                            ></path>
                          </svg>
                        </div>
                        <h3 className="text-xl font-medium text-gray-900">
                          Integración de Canales
                        </h3>
                        <p className="mt-2 text-base text-gray-500">
                          Conectamos el asistente con tus canales de
                          comunicación preferidos.
                        </p>
                      </div>
                    </div>
                    <div className="hidden md:block absolute top-0 left-1/2 w-8 h-8 bg-indigo-600 rounded-full transform -translate-x-1/2"></div>
                    <div className="md:w-1/2 md:pl-8">
                      <div className="bg-white p-6 rounded-lg shadow-md">
                        <div className="grid grid-cols-3 gap-4">
                          <div className="flex flex-col items-center">
                            <div className="h-12 w-12 rounded-lg bg-green-500 flex items-center justify-center text-white">
                              <svg
                                className="w-6 h-6"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth="2"
                                  d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                                ></path>
                              </svg>
                            </div>
                            <span className="mt-2 text-sm">WhatsApp</span>
                          </div>
                          <div className="flex flex-col items-center">
                            <div className="h-12 w-12 rounded-lg bg-indigo-500 flex items-center justify-center text-white">
                              <svg
                                className="w-6 h-6"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth="2"
                                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                                ></path>
                              </svg>
                            </div>
                            <span className="mt-2 text-sm">Telegram</span>
                          </div>
                          <div className="flex flex-col items-center">
                            <div className="h-12 w-12 rounded-lg bg-purple-500 flex items-center justify-center text-white">
                              <svg
                                className="w-6 h-6"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth="2"
                                  d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
                                ></path>
                              </svg>
                            </div>
                            <span className="mt-2 text-sm">Web</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Paso 4: Monitoreo y Optimización */}
                <div className="relative">
                  <div className="md:flex items-center">
                    <div className="md:w-1/2 mb-6 md:mb-0 md:pr-8 md:order-last ml-16">
                      <div className="md:float-left text-left">
                        <div className="inline-flex items-center justify-center h-12 w-12 rounded-full bg-gradient-to-r from-indigo-600 to-indigo-600 text-white shadow-lg mb-4">
                          <svg
                            className="w-6 h-6"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                            ></path>
                          </svg>
                        </div>
                        <h3 className="text-xl font-medium text-gray-900">
                          Monitoreo y Optimización
                        </h3>
                        <p className="mt-2 text-base text-gray-500">
                          Seguimiento continuo del desempeño y mejora constante
                          de las respuestas.
                        </p>
                      </div>
                    </div>
                    <div className="hidden md:block absolute top-0 left-1/2 w-8 h-8 bg-indigo-600 rounded-full transform -translate-x-1/2"></div>
                    <div className="md:w-1/2 md:pr-8 md:order-first">
                      <div className="bg-white p-6 rounded-lg shadow-md">
                        <div className="space-y-4">
                          <div className="flex justify-between items-center">
                            <span>Precisión de Respuestas</span>
                            <div className="h-2 w-24 bg-gray-200 rounded-full">
                              <div className="h-2 w-20 bg-green-500 rounded-full"></div>
                            </div>
                            <span className="text-green-500">95%</span>
                          </div>
                          <div className="flex justify-between items-center">
                            <span>Tiempo de Respuesta</span>
                            <div className="h-2 w-24 bg-gray-200 rounded-full">
                              <div className="h-2 w-22 bg-indigo-500 rounded-full"></div>
                            </div>
                            <span className="text-indigo-500">&lt;2s</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
