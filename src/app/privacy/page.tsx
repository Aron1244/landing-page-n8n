"use client";

export default function Privacy() {
  return (
    <div className="bg-gray-50">
      {/* Header Section */}
      <section className="relative overflow-hidden">
        {/* Background with gradient and pattern */}
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 to-purple-50">
          <div
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage:
                "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%236366F1' fillOpacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
              backgroundSize: "60px 60px",
            }}
          />
        </div>

        <div className="max-w-4xl mx-auto px-4 py-16 sm:px-6 lg:px-8 relative">
          <div className="text-center">
            <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl">
              Política de Privacidad
            </h1>
            <p className="mt-4 text-xl text-gray-500">
              Su privacidad es importante para nosotros. Esta política explica
              cómo recopilamos, usamos y protegemos su información.
            </p>
          </div>
        </div>

        {/* Wave decoration */}
        <div className="absolute -bottom-1 left-0 right-0">
          <svg
            viewBox="0 0 1440 120"
            className="w-full h-[120px] min-w-[1200px]"
            preserveAspectRatio="none"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1440 120V69.6998C1392 66.0998 1296 58.9498 1200 54.5998C1104 49.5498 1008 46.2498 912 49.5998C816 52.9498 720 62.9498 624 67.9498C528 72.9498 432 72.9498 336 66.0998C240 58.6498 144 40.9498 96 32.0998L48 23.2498L0 14.3998V120H1440Z"
              fill="white"
            />
          </svg>
        </div>
      </section>

      {/* Content Section */}
      <section className="bg-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-indigo max-w-none">
            {/* Information Collection */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Recopilación de Información
              </h2>
              <div className="bg-gray-50 rounded-xl p-6 shadow-sm">
                <p className="text-gray-600 mb-4">
                  Recopilamos información cuando usted:
                </p>
                <ul className="list-disc list-inside text-gray-600 space-y-2">
                  <li>Utiliza nuestro asistente virtual</li>
                  <li>Se registra en nuestro sitio</li>
                  <li>Se suscribe a nuestro boletín</li>
                  <li>Responde a una encuesta</li>
                  <li>Completa un formulario</li>
                </ul>
              </div>
            </div>

            {/* Use of Information */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Uso de la Información
              </h2>
              <div className="bg-gray-50 rounded-xl p-6 shadow-sm">
                <p className="text-gray-600 mb-4">
                  La información que recopilamos se utiliza para:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="p-4 bg-white rounded-lg shadow-sm">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      Personalización
                    </h3>
                    <p className="text-gray-600">
                      Mejorar y personalizar su experiencia con nuestro
                      asistente virtual
                    </p>
                  </div>
                  <div className="p-4 bg-white rounded-lg shadow-sm">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      Mejora del Servicio
                    </h3>
                    <p className="text-gray-600">
                      Mejorar nuestros productos y servicios
                    </p>
                  </div>
                  <div className="p-4 bg-white rounded-lg shadow-sm">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      Comunicación
                    </h3>
                    <p className="text-gray-600">
                      Enviar correos electrónicos periódicos
                    </p>
                  </div>
                  <div className="p-4 bg-white rounded-lg shadow-sm">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      Soporte
                    </h3>
                    <p className="text-gray-600">
                      Responder a sus solicitudes y consultas
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Protection of Information */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Protección de la Información
              </h2>
              <div className="bg-gray-50 rounded-xl p-6 shadow-sm">
                <div className="flex items-center mb-6">
                  <div className="h-12 w-12 rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 flex items-center justify-center text-white">
                    <svg
                      className="h-6 w-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8V7a4 4 0 00-8 0v4h8z"
                      />
                    </svg>
                  </div>
                  <h3 className="ml-4 text-xl font-semibold text-gray-900">
                    Medidas de Seguridad
                  </h3>
                </div>
                <p className="text-gray-600 mb-4">
                  Implementamos una variedad de medidas de seguridad para
                  mantener la seguridad de su información personal cuando
                  ingresa, envía o accede a su información personal.
                </p>
                <ul className="list-disc list-inside text-gray-600 space-y-2">
                  <li>Cifrado SSL</li>
                  <li>Protección contra accesos no autorizados</li>
                  <li>Actualizaciones regulares de seguridad</li>
                  <li>Monitoreo continuo</li>
                </ul>
              </div>
            </div>

            {/* Contact Information */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Información de Contacto
              </h2>
              <div className="bg-gray-50 rounded-xl p-6 shadow-sm">
                <p className="text-gray-600 mb-4">
                  Si tiene alguna pregunta sobre esta política de privacidad,
                  puede contactarnos a través de:
                </p>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <div className="h-10 w-10 rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 flex items-center justify-center text-white">
                      <svg
                        className="h-5 w-5"
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
                        />
                      </svg>
                    </div>
                    <span className="ml-3 text-gray-600">
                      privacy@example.com
                    </span>
                  </div>
                  <div className="flex items-center">
                    <div className="h-10 w-10 rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 flex items-center justify-center text-white">
                      <svg
                        className="h-5 w-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                        />
                      </svg>
                    </div>
                    <span className="ml-3 text-gray-600">
                      +1 (555) 123-4567
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
