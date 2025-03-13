"use client";

export default function Vision() {
  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        {/* Fondo con gradiente */}
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

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center">
            <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
              <span className="block">Nuestra</span>
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600 mt-2">
                Visión
              </span>
            </h1>
            <p className="mt-6 max-w-3xl mx-auto text-xl text-gray-500">
              Nuestra visión es ser un referente global en el desarrollo de
              tecnología avanzada, transformando industrias y mejorando la vida
              de las personas con soluciones inteligentes y accesibles.
            </p>
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

      {/* Visión ilustrada */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:flex lg:items-center lg:justify-between">
            <div className="lg:w-1/2 lg:pr-12">
              <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
                Hacia dónde nos dirigimos
              </h2>
              <p className="mt-4 text-lg text-gray-600">
                Visualizamos un futuro donde la tecnología inteligente sea una
                extensión natural de la vida cotidiana, facilitando tareas,
                potenciando capacidades y creando nuevas posibilidades para
                todos.
              </p>
              <div className="mt-8 space-y-6">
                <div className="flex">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
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
                          d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-medium text-gray-900">
                      Presencia global
                    </h3>
                    <p className="mt-2 text-gray-600">
                      Aspiramos a expandir nuestra presencia internacional,
                      llevando nuestras soluciones a todos los rincones del
                      mundo para generar un impacto positivo en diversas
                      comunidades.
                    </p>
                  </div>
                </div>
                <div className="flex">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
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
                          d="M7 11.5V14m0-2.5v-6a1.5 1.5 0 113 0m-3 6a1.5 1.5 0 00-3 0v2a7.5 7.5 0 0015 0v-5a1.5 1.5 0 00-3 0m-6-3V11m0-5.5v-1a1.5 1.5 0 013 0v1m0 0V11m0-5.5a1.5 1.5 0 013 0v3m0 0V11"
                        />
                      </svg>
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-medium text-gray-900">
                      Tecnología inclusiva
                    </h3>
                    <p className="mt-2 text-gray-600">
                      Queremos que nuestra tecnología sea accesible para
                      personas de todas las edades, habilidades y contextos
                      socioeconómicos, eliminando barreras y creando
                      oportunidades.
                    </p>
                  </div>
                </div>
                <div className="flex">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
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
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-medium text-gray-900">
                      Innovación disruptiva
                    </h3>
                    <p className="mt-2 text-gray-600">
                      Aspiramos a desarrollar tecnologías que no solo mejoren lo
                      existente, sino que transformen radicalmente la forma en
                      que vivimos, trabajamos y nos relacionamos.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-10 lg:mt-0 lg:w-1/2">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl transform rotate-3 shadow-lg"></div>
                <div className="relative bg-white p-6 rounded-2xl shadow-md">
                  <div className="aspect-w-16 aspect-h-9 bg-gray-100 rounded-lg overflow-hidden">
                    <div className="h-full w-full bg-gradient-to-br from-indigo-100 to-purple-100 flex items-center justify-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-24 w-24 text-indigo-600"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={1}
                          d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={1}
                          d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                        />
                      </svg>
                    </div>
                  </div>
                  <div className="mt-6">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium text-gray-600">
                        Progreso hacia nuestra visión
                      </span>
                      <span className="text-sm font-medium text-indigo-600">
                        65%
                      </span>
                    </div>
                    <div className="h-3 bg-gray-200 rounded-full">
                      <div
                        className="h-3 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full"
                        style={{ width: "65%" }}
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Impacto Global */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Impacto Global
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
              Aspiramos a expandir nuestra presencia internacional, llevando
              nuestras soluciones a todos los rincones del mundo para generar un
              impacto positivo en diversas comunidades.
            </p>
          </div>

          <div className="relative">
            <div
              className="absolute inset-0 flex items-center"
              aria-hidden="true"
            >
              <div className="w-full border-t border-gray-300"></div>
            </div>
            <div className="relative flex justify-center">
              <span className="px-3 bg-gray-50 text-lg font-medium text-gray-900">
                Regiones de impacto
              </span>
            </div>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {/* Región 1 */}
            <div className="bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow">
              <div className="h-12 w-12 rounded-md bg-gradient-to-r from-indigo-600 to-purple-600 text-white flex items-center justify-center mb-4">
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
                    d="M3 21v-4m0 0V5a2 2 0 012-2h6.5l1 1H21l-3 6 3 6h-8.5l-1-1H5a2 2 0 00-2 2zm9-13.5V9"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-gray-900">América</h3>
              <p className="mt-2 text-gray-600">
                Expandiendo nuestra presencia desde Norteamérica hasta
                Sudamérica, con soluciones adaptadas a las necesidades locales.
              </p>
            </div>

            {/* Región 2 */}
            <div className="bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow">
              <div className="h-12 w-12 rounded-md bg-gradient-to-r from-indigo-600 to-purple-600 text-white flex items-center justify-center mb-4">
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
                    d="M3 21v-4m0 0V5a2 2 0 012-2h6.5l1 1H21l-3 6 3 6h-8.5l-1-1H5a2 2 0 00-2 2zm9-13.5V9"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-gray-900">Europa</h3>
              <p className="mt-2 text-gray-600">
                Fortaleciendo alianzas con empresas e instituciones europeas
                para impulsar la innovación tecnológica.
              </p>
            </div>

            {/* Región 3 */}
            <div className="bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow">
              <div className="h-12 w-12 rounded-md bg-gradient-to-r from-indigo-600 to-purple-600 text-white flex items-center justify-center mb-4">
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
                    d="M3 21v-4m0 0V5a2 2 0 012-2h6.5l1 1H21l-3 6 3 6h-8.5l-1-1H5a2 2 0 00-2 2zm9-13.5V9"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-gray-900">Asia-Pacífico</h3>
              <p className="mt-2 text-gray-600">
                Desarrollando soluciones específicas para los mercados asiáticos
                en rápido crecimiento y con necesidades únicas.
              </p>
            </div>

            {/* Región 4 */}
            <div className="bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow">
              <div className="h-12 w-12 rounded-md bg-gradient-to-r from-indigo-600 to-purple-600 text-white flex items-center justify-center mb-4">
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
                    d="M3 21v-4m0 0V5a2 2 0 012-2h6.5l1 1H21l-3 6 3 6h-8.5l-1-1H5a2 2 0 00-2 2zm9-13.5V9"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-gray-900">África</h3>
              <p className="mt-2 text-gray-600">
                Creando soluciones accesibles y adaptadas a las necesidades
                específicas de las comunidades africanas.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Metas a largo plazo */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Metas a Largo Plazo
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
              Objetivos ambiciosos que guían nuestro camino hacia el futuro
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {/* Meta 1 */}
            <div className="bg-gray-50 rounded-xl p-8 shadow-md hover:shadow-lg transition-shadow relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-indigo-600 to-purple-600"></div>
              <div className="h-16 w-16 rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white flex items-center justify-center mb-6">
                <span className="text-2xl font-bold">1</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900">
                Liderazgo en IA
              </h3>
              <p className="mt-4 text-gray-600">
                Convertirnos en líderes globales en el desarrollo de soluciones
                de inteligencia artificial que sean éticas, transparentes y
                centradas en el usuario.
              </p>
            </div>

            {/* Meta 2 */}
            <div className="bg-gray-50 rounded-xl p-8 shadow-md hover:shadow-lg transition-shadow relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-indigo-600 to-purple-600"></div>
              <div className="h-16 w-16 rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white flex items-center justify-center mb-6">
                <span className="text-2xl font-bold">2</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900">
                Impacto social
              </h3>
              <p className="mt-4 text-gray-600">
                Mejorar la vida de más de 100 millones de personas a través de
                nuestras soluciones tecnológicas, con un enfoque especial en
                comunidades desatendidas.
              </p>
            </div>

            {/* Meta 3 */}
            <div className="bg-gray-50 rounded-xl p-8 shadow-md hover:shadow-lg transition-shadow relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-indigo-600 to-purple-600"></div>
              <div className="h-16 w-16 rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white flex items-center justify-center mb-6">
                <span className="text-2xl font-bold">3</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900">
                Sostenibilidad
              </h3>
              <p className="mt-4 text-gray-600">
                Desarrollar tecnologías que no solo sean eficientes, sino que
                también contribuyan activamente a la sostenibilidad ambiental y
                la reducción de la huella de carbono.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl shadow-xl overflow-hidden">
            <div className="px-6 py-12 sm:px-12 sm:py-16 lg:flex lg:items-center lg:justify-between">
              <div>
                <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
                  <span className="block">Sé parte de nuestro futuro</span>
                  <span className="block text-indigo-100">
                    Juntos podemos lograr grandes cosas
                  </span>
                </h2>
                <p className="mt-4 text-lg text-indigo-100">
                  Descubre cómo nuestras soluciones pueden ayudarte a alcanzar
                  tus objetivos y ser parte de nuestra visión compartida.
                </p>
              </div>
              <div className="mt-8 lg:mt-0 lg:ml-8">
                <div className="rounded-md shadow">
                  <button
                    onClick={() =>
                      document.getElementById("chat-button")?.click()
                    }
                    className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-indigo-600 bg-white hover:bg-gray-50 md:py-4 md:text-lg md:px-10 transition-all duration-300 transform hover:scale-105"
                  >
                    Iniciar chat ahora
                  </button>
                </div>
                <div className="mt-3">
                  <a
                    href="/"
                    className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-500 bg-opacity-60 hover:bg-opacity-70 md:py-4 md:text-lg md:px-10"
                  >
                    Volver al inicio
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Elemento oculto para identificar el botón del chat */}
      <div id="chat-button" className="hidden"></div>
    </div>
  );
}
