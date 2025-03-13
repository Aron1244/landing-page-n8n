"use client"

export default function About() {
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
              <span className="block">Conoce Nuestra</span>
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600 mt-2">
                Historia y Visión
              </span>
            </h1>
            <p className="mt-6 max-w-3xl mx-auto text-xl text-gray-500">
              Somos una empresa comprometida con la innovación y el desarrollo de soluciones inteligentes. Nuestro
              objetivo es mejorar la experiencia de los usuarios mediante tecnología avanzada.
            </p>
          </div>
        </div>
      </section>

      {/* Nuestra Historia con Línea de Tiempo */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">Nuestra Historia</h2>
            <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
              Un viaje de innovación y crecimiento constante
            </p>
          </div>

          <div className="relative">
            {/* Línea vertical para la línea de tiempo */}
            <div className="hidden md:block absolute left-1/2 h-full w-0.5 bg-gradient-to-b from-indigo-600 to-purple-600 transform -translate-x-1/2"></div>

            {/* Eventos de la línea de tiempo */}
            <div className="space-y-16">
              {/* Evento 1 */}
              <div className="relative">
                <div className="md:flex items-center">
                  <div className="md:w-1/2 mb-8 md:mb-0 md:pr-12 text-right">
                    <div className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white inline-block px-3 py-1 rounded-full text-sm font-semibold mb-2">
                      2018
                    </div>
                    <h3 className="text-xl font-bold text-gray-900">Nuestros inicios</h3>
                    <p className="mt-2 text-gray-600">
                      Comenzamos como un pequeño equipo con grandes ideas y la visión de transformar la forma en que las
                      personas interactúan con la tecnología.
                    </p>
                  </div>
                  <div className="hidden md:block absolute top-0 left-1/2 w-8 h-8 bg-indigo-600 rounded-full transform -translate-x-1/2 border-4 border-white shadow-lg"></div>
                  <div className="md:w-1/2 md:pl-12">
                    <div className="bg-gray-100 rounded-lg overflow-hidden shadow-md">
                      <div className="h-48 bg-gradient-to-r from-indigo-100 to-purple-100 flex items-center justify-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-20 w-20 text-indigo-600"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={1}
                            d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Evento 2 */}
              <div className="relative">
                <div className="md:flex items-center">
                  <div className="md:w-1/2 mb-8 md:mb-0 md:pr-12 text-right md:order-last">
                    <div className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white inline-block px-3 py-1 rounded-full text-sm font-semibold mb-2">
                      2020
                    </div>
                    <h3 className="text-xl font-bold text-gray-900">Expansión y crecimiento</h3>
                    <p className="mt-2 text-gray-600">
                      Ampliamos nuestro equipo y comenzamos a desarrollar soluciones más avanzadas, incorporando
                      inteligencia artificial y aprendizaje automático.
                    </p>
                  </div>
                  <div className="hidden md:block absolute top-0 left-1/2 w-8 h-8 bg-indigo-600 rounded-full transform -translate-x-1/2 border-4 border-white shadow-lg"></div>
                  <div className="md:w-1/2 md:pl-12 md:order-first">
                    <div className="bg-gray-100 rounded-lg overflow-hidden shadow-md">
                      <div className="h-48 bg-gradient-to-r from-indigo-100 to-purple-100 flex items-center justify-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-20 w-20 text-indigo-600"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={1}
                            d="M13 10V3L4 14h7v7l9-11h-7z"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Evento 3 */}
              <div className="relative">
                <div className="md:flex items-center">
                  <div className="md:w-1/2 mb-8 md:mb-0 md:pr-12 text-right">
                    <div className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white inline-block px-3 py-1 rounded-full text-sm font-semibold mb-2">
                      2022
                    </div>
                    <h3 className="text-xl font-bold text-gray-900">Lanzamiento de nuestro asistente virtual</h3>
                    <p className="mt-2 text-gray-600">
                      Desarrollamos y lanzamos nuestro asistente virtual, una solución innovadora que ha transformado la
                      forma en que nuestros clientes interactúan con la tecnología.
                    </p>
                  </div>
                  <div className="hidden md:block absolute top-0 left-1/2 w-8 h-8 bg-indigo-600 rounded-full transform -translate-x-1/2 border-4 border-white shadow-lg"></div>
                  <div className="md:w-1/2 md:pl-12">
                    <div className="bg-gray-100 rounded-lg overflow-hidden shadow-md">
                      <div className="h-48 bg-gradient-to-r from-indigo-100 to-purple-100 flex items-center justify-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-20 w-20 text-indigo-600"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={1}
                            d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Evento 4 - Presente */}
              <div className="relative">
                <div className="md:flex items-center">
                  <div className="md:w-1/2 mb-8 md:mb-0 md:pr-12 text-right md:order-last">
                    <div className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white inline-block px-3 py-1 rounded-full text-sm font-semibold mb-2">
                      Hoy
                    </div>
                    <h3 className="text-xl font-bold text-gray-900">Innovación continua</h3>
                    <p className="mt-2 text-gray-600">
                      Seguimos innovando y mejorando nuestras soluciones, con un enfoque en la personalización y la
                      experiencia del usuario.
                    </p>
                  </div>
                  <div className="hidden md:block absolute top-0 left-1/2 w-8 h-8 bg-indigo-600 rounded-full transform -translate-x-1/2 border-4 border-white shadow-lg"></div>
                  <div className="md:w-1/2 md:pl-12 md:order-first">
                    <div className="bg-gray-100 rounded-lg overflow-hidden shadow-md">
                      <div className="h-48 bg-gradient-to-r from-indigo-100 to-purple-100 flex items-center justify-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-20 w-20 text-indigo-600"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={1}
                            d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Nuestro Equipo */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">Nuestro Equipo</h2>
            <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
              Personas apasionadas por la innovación y la tecnología
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {/* Miembro 1 */}
            <div className="bg-white rounded-xl overflow-hidden shadow-md transform transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
              <div className="h-48 bg-gradient-to-r from-indigo-500 to-purple-500 flex items-center justify-center">
                <div className="h-24 w-24 rounded-full bg-white flex items-center justify-center text-indigo-600 text-3xl font-bold">
                  AR
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900">Ana Rodríguez</h3>
                <p className="text-indigo-600 font-medium">CEO & Fundadora</p>
                <p className="mt-3 text-gray-600">
                  Con más de 15 años de experiencia en el sector tecnológico, Ana lidera nuestra empresa con visión y
                  pasión.
                </p>
                <div className="mt-4 flex space-x-3">
                  <a href="#" className="text-gray-400 hover:text-indigo-600">
                    <span className="sr-only">LinkedIn</span>
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                      <path
                        fillRule="evenodd"
                        d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </a>
                  <a href="#" className="text-gray-400 hover:text-indigo-600">
                    <span className="sr-only">Twitter</span>
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            {/* Miembro 2 */}
            <div className="bg-white rounded-xl overflow-hidden shadow-md transform transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
              <div className="h-48 bg-gradient-to-r from-indigo-500 to-purple-500 flex items-center justify-center">
                <div className="h-24 w-24 rounded-full bg-white flex items-center justify-center text-indigo-600 text-3xl font-bold">
                  JL
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900">Javier López</h3>
                <p className="text-indigo-600 font-medium">CTO</p>
                <p className="mt-3 text-gray-600">
                  Experto en inteligencia artificial y aprendizaje automático, Javier lidera nuestro equipo de
                  desarrollo tecnológico.
                </p>
                <div className="mt-4 flex space-x-3">
                  <a href="#" className="text-gray-400 hover:text-indigo-600">
                    <span className="sr-only">LinkedIn</span>
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                      <path
                        fillRule="evenodd"
                        d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </a>
                  <a href="#" className="text-gray-400 hover:text-indigo-600">
                    <span className="sr-only">GitHub</span>
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                      <path
                        fillRule="evenodd"
                        d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            {/* Miembro 3 */}
            <div className="bg-white rounded-xl overflow-hidden shadow-md transform transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
              <div className="h-48 bg-gradient-to-r from-indigo-500 to-purple-500 flex items-center justify-center">
                <div className="h-24 w-24 rounded-full bg-white flex items-center justify-center text-indigo-600 text-3xl font-bold">
                  MG
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900">María González</h3>
                <p className="text-indigo-600 font-medium">Directora de Producto</p>
                <p className="mt-3 text-gray-600">
                  Con un enfoque centrado en el usuario, María asegura que nuestros productos sean intuitivos y
                  resuelvan problemas reales.
                </p>
                <div className="mt-4 flex space-x-3">
                  <a href="#" className="text-gray-400 hover:text-indigo-600">
                    <span className="sr-only">LinkedIn</span>
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                      <path
                        fillRule="evenodd"
                        d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </a>
                  <a href="#" className="text-gray-400 hover:text-indigo-600">
                    <span className="sr-only">Twitter</span>
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Nuestros Valores */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">Nuestros Valores</h2>
            <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">Principios que guían nuestro trabajo diario</p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            {/* Valor 1 */}
            <div className="bg-gray-50 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
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
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-medium text-gray-900">Integridad</h3>
              <p className="mt-2 text-gray-600">
                Actuamos con honestidad y transparencia en todo lo que hacemos, construyendo relaciones de confianza con
                nuestros clientes y colaboradores.
              </p>
            </div>

            {/* Valor 2 */}
            <div className="bg-gray-50 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="h-12 w-12 rounded-md bg-gradient-to-r from-indigo-600 to-purple-600 text-white flex items-center justify-center mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-lg font-medium text-gray-900">Innovación</h3>
              <p className="mt-2 text-gray-600">
                Buscamos constantemente nuevas formas de mejorar y crear soluciones que marquen la diferencia en la vida
                de las personas.
              </p>
            </div>

            {/* Valor 3 */}
            <div className="bg-gray-50 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
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
                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-medium text-gray-900">Colaboración</h3>
              <p className="mt-2 text-gray-600">
                Creemos en el poder del trabajo en equipo y la diversidad de perspectivas para crear soluciones más
                completas y efectivas.
              </p>
            </div>

            {/* Valor 4 */}
            <div className="bg-gray-50 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
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
                    d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-medium text-gray-900">Excelencia</h3>
              <p className="mt-2 text-gray-600">
                Nos esforzamos por alcanzar los más altos estándares en todo lo que hacemos, desde el desarrollo de
                productos hasta el servicio al cliente.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Estadísticas */}
      <section className="py-16 bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold sm:text-4xl">Nuestro impacto en números</h2>
          </div>

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {/* Estadística 1 */}
            <div className="text-center">
              <div className="text-5xl font-extrabold mb-2">+500</div>
              <div className="text-xl font-medium">Clientes satisfechos</div>
            </div>

            {/* Estadística 2 */}
            <div className="text-center">
              <div className="text-5xl font-extrabold mb-2">+50k</div>
              <div className="text-xl font-medium">Conversaciones</div>
            </div>

            {/* Estadística 3 */}
            <div className="text-center">
              <div className="text-5xl font-extrabold mb-2">98%</div>
              <div className="text-xl font-medium">Tasa de satisfacción</div>
            </div>

            {/* Estadística 4 */}
            <div className="text-center">
              <div className="text-5xl font-extrabold mb-2">24/7</div>
              <div className="text-xl font-medium">Soporte disponible</div>
            </div>
          </div>
        </div>
      </section>

      {/* Por qué elegirnos */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">¿Por qué elegirnos?</h2>
            <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">Razones para confiar en nuestras soluciones</p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            {/* Razón 1 */}
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
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
              </div>
              <div className="ml-4">
                <h3 className="text-lg font-medium text-gray-900">Tecnología de vanguardia</h3>
                <p className="mt-2 text-gray-600">
                  Utilizamos las últimas tecnologías y metodologías para desarrollar soluciones innovadoras y
                  eficientes.
                </p>
              </div>
            </div>

            {/* Razón 2 */}
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
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
              </div>
              <div className="ml-4">
                <h3 className="text-lg font-medium text-gray-900">Respuesta rápida</h3>
                <p className="mt-2 text-gray-600">
                  Nuestro asistente virtual proporciona respuestas inmediatas, ahorrando tiempo y mejorando la
                  eficiencia.
                </p>
              </div>
            </div>

            {/* Razón 3 */}
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
                      d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
                    />
                  </svg>
                </div>
              </div>
              <div className="ml-4">
                <h3 className="text-lg font-medium text-gray-900">Personalización</h3>
                <p className="mt-2 text-gray-600">
                  Adaptamos nuestras soluciones a las necesidades específicas de cada cliente, garantizando resultados
                  óptimos.
                </p>
              </div>
            </div>

            {/* Razón 4 */}
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
                      d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                    />
                  </svg>
                </div>
              </div>
              <div className="ml-4">
                <h3 className="text-lg font-medium text-gray-900">Seguridad garantizada</h3>
                <p className="mt-2 text-gray-600">
                  La seguridad de los datos es nuestra prioridad. Implementamos las mejores prácticas para proteger la
                  información de nuestros clientes.
                </p>
              </div>
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
                  <span className="block">¿Listo para comenzar?</span>
                  <span className="block text-indigo-100">Prueba nuestro asistente virtual hoy.</span>
                </h2>
                <p className="mt-4 text-lg text-indigo-100">
                  Descubre cómo nuestras soluciones pueden ayudarte a mejorar la eficiencia y la experiencia de tus
                  usuarios.
                </p>
              </div>
              <div className="mt-8 lg:mt-0 lg:ml-8">
                <div className="rounded-md shadow">
                  <button
                    onClick={() => document.getElementById("chat-button")?.click()}
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
  )
}

