"use client";

export default function Terms() {
  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-indigo-600 to-purple-600 py-16 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-extrabold text-center sm:text-5xl">
            Términos y Condiciones
          </h1>
          <p className="mt-4 text-lg text-center max-w-2xl mx-auto">
            Lee cuidadosamente nuestros términos y condiciones antes de usar
            nuestros servicios.
          </p>
        </div>
      </section>

      {/* Contenido de los Términos */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-extrabold text-gray-900">
                1. Introducción
              </h2>
              <p className="mt-4 text-base text-gray-500">
                Al utilizar nuestros servicios, aceptas cumplir con estos
                términos y condiciones. Si no estás de acuerdo con alguno de los
                términos, te pedimos que no utilices nuestros servicios.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-extrabold text-gray-900">
                2. Uso del Servicio
              </h2>
              <p className="mt-4 text-base text-gray-500">
                Nuestro servicio se proporciona bajo licencia limitada, no
                exclusiva e intransferible. Estás autorizado a usar nuestros
                servicios solo para fines legales y según lo permitido por estos
                términos.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-extrabold text-gray-900">
                3. Privacidad y Seguridad
              </h2>
              <p className="mt-4 text-base text-gray-500">
                Nos comprometemos a proteger tu privacidad y seguridad. Por
                favor, revisa nuestra{" "}
                <a href="/privacy-policy" className="text-indigo-600">
                  Política de Privacidad
                </a>{" "}
                para más detalles sobre cómo recopilamos, usamos y protegemos
                tus datos.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-extrabold text-gray-900">
                4. Responsabilidad del Usuario
              </h2>
              <p className="mt-4 text-base text-gray-500">
                Eres responsable de garantizar que la información proporcionada
                sea precisa, completa y esté actualizada. También eres
                responsable de la seguridad de tu cuenta.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-extrabold text-gray-900">
                5. Propiedad Intelectual
              </h2>
              <p className="mt-4 text-base text-gray-500">
                Todo el contenido y los materiales proporcionados a través de
                nuestro servicio son propiedad de la empresa o sus
                licenciatarios y están protegidos por derechos de autor y otras
                leyes de propiedad intelectual.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-extrabold text-gray-900">
                6. Terminación de Servicio
              </h2>
              <p className="mt-4 text-base text-gray-500">
                Podemos suspender o terminar tu acceso a los servicios en
                cualquier momento si incumples estos términos o por otras
                razones justificadas.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-extrabold text-gray-900">
                7. Limitación de Responsabilidad
              </h2>
              <p className="mt-4 text-base text-gray-500">
                En ningún caso seremos responsables por daños indirectos,
                incidentales, especiales o consecuentes derivados del uso de
                nuestros servicios.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-extrabold text-gray-900">
                8. Modificaciones
              </h2>
              <p className="mt-4 text-base text-gray-500">
                Nos reservamos el derecho de modificar estos términos en
                cualquier momento. Te notificaremos sobre cualquier cambio a
                través del servicio o mediante otros medios apropiados.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-extrabold text-gray-900">
                9. Ley Aplicable
              </h2>
              <p className="mt-4 text-base text-gray-500">
                Estos términos se regirán e interpretarán de acuerdo con las
                leyes del país en el que operamos. Cualquier disputa será
                resuelta en los tribunales competentes de dicha jurisdicción.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
