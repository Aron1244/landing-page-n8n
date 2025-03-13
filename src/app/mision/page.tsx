"use client";

export default function Mision() {
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
                Misión
              </span>
            </h1>
            <p className="mt-6 max-w-3xl mx-auto text-xl text-gray-500">
              Nuestra misión es proporcionar soluciones tecnológicas innovadoras
              que mejoren la calidad de vida de nuestros usuarios, ayudándoles a
              superar desafíos con productos fáciles de usar y de alto
              rendimiento.
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

      {/* Pilares de nuestra misión */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Pilares de Nuestra Misión
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
              Estos son los principios fundamentales que guían nuestro trabajo
              diario
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {/* Pilar 1 */}
            <div className="bg-gray-50 rounded-xl p-8 shadow-md hover:shadow-lg transition-shadow relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-indigo-600 to-purple-600 opacity-10 rounded-bl-full"></div>
              <div className="h-14 w-14 rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white flex items-center justify-center mb-6">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-7 w-7"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900">
                Innovación Constante
              </h3>
              <p className="mt-4 text-gray-600">
                Nos comprometemos a estar a la vanguardia de la tecnología,
                investigando y desarrollando soluciones que anticipen las
                necesidades futuras de nuestros usuarios.
              </p>
            </div>

            {/* Pilar 2 */}
            <div className="bg-gray-50 rounded-xl p-8 shadow-md hover:shadow-lg transition-shadow relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-indigo-600 to-purple-600 opacity-10 rounded-bl-full"></div>
              <div className="h-14 w-14 rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white flex items-center justify-center mb-6">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-7 w-7"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900">Accesibilidad</h3>
              <p className="mt-4 text-gray-600">
                Creemos que la tecnología debe ser accesible para todos.
                Trabajamos para crear soluciones que sean fáciles de usar y
                asequibles para una amplia gama de usuarios.
              </p>
            </div>

            {/* Pilar 3 */}
            <div className="bg-gray-50 rounded-xl p-8 shadow-md hover:shadow-lg transition-shadow relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-indigo-600 to-purple-600 opacity-10 rounded-bl-full"></div>
              <div className="h-14 w-14 rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white flex items-center justify-center mb-6">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-7 w-7"
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
              <h3 className="text-xl font-bold text-gray-900">
                Impacto Social
              </h3>
              <p className="mt-4 text-gray-600">
                Buscamos generar un impacto positivo en la sociedad,
                desarrollando soluciones que aborden problemas reales y mejoren
                la calidad de vida de las personas.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Compromiso con la Innovación */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:flex lg:items-center lg:justify-between">
            <div className="lg:w-1/2 lg:pr-12">
              <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
                Compromiso con la Innovación
              </h2>
              <p className="mt-4 text-lg text-gray-600">
                Buscamos siempre innovar y ofrecer productos que se adapten a
                las necesidades cambiantes del mercado, garantizando así el
                éxito de nuestros clientes.
              </p>
              <div className="mt-8 space-y-4">
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-10 w-10 rounded-md bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-medium text-gray-900">
                      Investigación continua
                    </h3>
                    <p className="mt-2 text-gray-600">
                      Invertimos en investigación y desarrollo para mantenernos
                      a la vanguardia de las tendencias tecnológicas.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-10 w-10 rounded-md bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-medium text-gray-900">
                      Mejora continua
                    </h3>
                    <p className="mt-2 text-gray-600">
                      Iteramos constantemente nuestros productos basándonos en
                      la retroalimentación de los usuarios y las nuevas
                      posibilidades tecnológicas.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-10 w-10 rounded-md bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-medium text-gray-900">
                      Colaboración
                    </h3>
                    <p className="mt-2 text-gray-600">
                      Trabajamos en estrecha colaboración con nuestros clientes
                      y socios para desarrollar soluciones que realmente
                      satisfagan sus necesidades.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-10 lg:mt-0 lg:w-1/2">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl transform -rotate-6 shadow-lg"></div>
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
                          d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                        />
                      </svg>
                    </div>
                  </div>
                  <div className="mt-6 space-y-4">
                    <div className="h-2 bg-gray-200 rounded">
                      <div
                        className="h-2 bg-gradient-to-r from-indigo-600 to-purple-600 rounded"
                        style={{ width: "85%" }}
                      ></div>
                    </div>
                    <div className="h-2 bg-gray-200 rounded">
                      <div
                        className="h-2 bg-gradient-to-r from-indigo-600 to-purple-600 rounded"
                        style={{ width: "70%" }}
                      ></div>
                    </div>
                    <div className="h-2 bg-gray-200 rounded">
                      <div
                        className="h-2 bg-gradient-to-r from-indigo-600 to-purple-600 rounded"
                        style={{ width: "90%" }}
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Objetivos */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Nuestros Objetivos
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
              Metas claras que nos impulsan a seguir adelante
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            {/* Objetivo 1 */}
            <div className="bg-gray-50 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow border-l-4 border-indigo-600">
              <h3 className="text-xl font-bold text-gray-900">
                Transformar la experiencia del usuario
              </h3>
              <p className="mt-2 text-gray-600">
                Queremos redefinir la forma en que las personas interactúan con
                la tecnología, haciendo que sea más intuitiva, eficiente y
                agradable.
              </p>
            </div>

            {/* Objetivo 2 */}
            <div className="bg-gray-50 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow border-l-4 border-purple-600">
              <h3 className="text-xl font-bold text-gray-900">
                Democratizar el acceso a la tecnología
              </h3>
              <p className="mt-2 text-gray-600">
                Trabajamos para que nuestras soluciones sean accesibles para
                todos, independientemente de su ubicación, recursos o
                conocimientos técnicos.
              </p>
            </div>

            {/* Objetivo 3 */}
            <div className="bg-gray-50 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow border-l-4 border-indigo-600">
              <h3 className="text-xl font-bold text-gray-900">
                Impulsar la eficiencia empresarial
              </h3>
              <p className="mt-2 text-gray-600">
                Desarrollamos herramientas que ayudan a las empresas a optimizar
                sus procesos, reducir costos y aumentar su productividad.
              </p>
            </div>

            {/* Objetivo 4 */}
            <div className="bg-gray-50 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow border-l-4 border-purple-600">
              <h3 className="text-xl font-bold text-gray-900">
                Fomentar la sostenibilidad
              </h3>
              <p className="mt-2 text-gray-600">
                Nos comprometemos a desarrollar soluciones que no solo sean
                eficientes, sino también sostenibles y respetuosas con el medio
                ambiente.
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
                  <span className="block">
                    ¿Quieres ser parte de nuestra misión?
                  </span>
                  <span className="block text-indigo-100">
                    Descubre cómo podemos ayudarte.
                  </span>
                </h2>
                <p className="mt-4 text-lg text-indigo-100">
                  Nuestro asistente virtual está listo para responder tus
                  preguntas y mostrarte cómo nuestras soluciones pueden
                  beneficiarte.
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
