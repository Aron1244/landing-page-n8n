"use client";

export default function Home() {
  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        {/* Fondo con gradiente y patrón */}
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 to-purple-50">
          <div
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage:
                "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%236366F1' fillOpacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
              backgroundSize: "60px 60px",
            }}
          ></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 py-24 sm:px-6 lg:px-8 relative">
          <div className="text-center">
            <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
              <span className="block">Asistente Virtual Inteligente</span>
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600 mt-2">
                Respuestas al instante
              </span>
            </h1>
            <p className="mt-6 max-w-2xl mx-auto text-xl text-gray-500">
              Obtén respuestas precisas a tus preguntas con nuestro asistente
              impulsado por inteligencia artificial.
            </p>
            <div className="mb-50"></div>
          </div>
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

      {/* Características */}
      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Características principales
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
              Nuestro asistente virtual está diseñado para hacer tu vida más
              fácil.
            </p>
          </div>

          <div className="mt-16">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
              {/* Característica 1 */}
              <div className="relative p-6 bg-white rounded-lg border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                <div className="absolute -top-4 -left-4 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-lg p-3 text-white shadow-md">
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
                <h3 className="mt-8 text-lg font-medium text-gray-900">
                  Respuestas instantáneas
                </h3>
                <p className="mt-2 text-base text-gray-500">
                  Obtén respuestas a tus preguntas en segundos, sin esperas ni
                  búsquedas complicadas.
                </p>
              </div>

              {/* Característica 2 */}
              <div className="relative p-6 bg-white rounded-lg border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                <div className="absolute -top-4 -left-4 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-lg p-3 text-white shadow-md">
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
                      d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                    />
                  </svg>
                </div>
                <h3 className="mt-8 text-lg font-medium text-gray-900">
                  Historial de conversaciones
                </h3>
                <p className="mt-2 text-base text-gray-500">
                  Guarda y descarga tus conversaciones para consultarlas cuando
                  lo necesites.
                </p>
              </div>

              {/* Característica 3 */}
              <div className="relative p-6 bg-white rounded-lg border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                <div className="absolute -top-4 -left-4 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-lg p-3 text-white shadow-md">
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
                      d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                </div>
                <h3 className="mt-8 text-lg font-medium text-gray-900">
                  Personalizable
                </h3>
                <p className="mt-2 text-base text-gray-500">
                  Conecta con n8n para personalizar las respuestas según tus
                  necesidades específicas.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonios */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Lo que dicen nuestros usuarios
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
              Miles de personas ya confían en nuestro asistente virtual.
            </p>
          </div>

          <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {/* Testimonio 1 */}
            <div className="bg-gray-50 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center mb-4">
                <div className="h-12 w-12 rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 flex items-center justify-center text-white">
                  <span className="text-lg font-bold">M</span>
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-medium text-gray-900">
                    María G.
                  </h4>
                  <p className="text-gray-500">Empresaria</p>
                </div>
              </div>
              <p className="text-gray-600 italic">
                "Este asistente virtual ha revolucionado la forma en que
                atendemos a nuestros clientes. Las respuestas son rápidas y
                precisas."
              </p>
              <div className="mt-4 flex text-yellow-400">
                <span>★</span>
                <span>★</span>
                <span>★</span>
                <span>★</span>
                <span>★</span>
              </div>
            </div>

            {/* Testimonio 2 */}
            <div className="bg-gray-50 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center mb-4">
                <div className="h-12 w-12 rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 flex items-center justify-center text-white">
                  <span className="text-lg font-bold">J</span>
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-medium text-gray-900">Juan P.</h4>
                  <p className="text-gray-500">Desarrollador</p>
                </div>
              </div>
              <p className="text-gray-600 italic">
                "La integración con n8n fue muy sencilla. Ahora tenemos un
                asistente personalizado que responde exactamente lo que
                necesitamos."
              </p>
              <div className="mt-4 flex text-yellow-400">
                <span>★</span>
                <span>★</span>
                <span>★</span>
                <span>★</span>
                <span>★</span>
              </div>
            </div>

            {/* Testimonio 3 */}
            <div className="bg-gray-50 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center mb-4">
                <div className="h-12 w-12 rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 flex items-center justify-center text-white">
                  <span className="text-lg font-bold">L</span>
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-medium text-gray-900">
                    Laura S.
                  </h4>
                  <p className="text-gray-500">Estudiante</p>
                </div>
              </div>
              <p className="text-gray-600 italic">
                "Me ayuda a resolver dudas rápidamente. Es como tener un tutor
                disponible 24/7 que siempre tiene la respuesta correcta."
              </p>
              <div className="mt-4 flex text-yellow-400">
                <span>★</span>
                <span>★</span>
                <span>★</span>
                <span>★</span>
                <span>★</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-indigo-600 to-purple-600 relative overflow-hidden">
        {/* Patrón de fondo */}
        <div className="absolute inset-0 opacity-10">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern
                id="grid"
                width="40"
                height="40"
                patternUnits="userSpaceOnUse"
              >
                <path
                  d="M 0 10 L 40 10 M 10 0 L 10 40"
                  stroke="white"
                  strokeWidth="1"
                  fill="none"
                />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
              ¿Listo para comenzar?
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-xl text-indigo-100">
              Prueba nuestro asistente virtual ahora y descubre cómo puede
              ayudarte.
            </p>
            <div className="mt-8">
              <button
                onClick={() => document.getElementById("chat-button")?.click()}
                className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-indigo-600 bg-white hover:bg-gray-50 md:py-4 md:text-lg md:px-10 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              >
                Iniciar chat ahora
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Elemento oculto para identificar el botón del chat */}
      <div id="chat-button" className="hidden"></div>
    </div>
  );
}
