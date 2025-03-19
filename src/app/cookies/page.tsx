"use client";

export default function Cookies() {
  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-indigo-600 to-purple-600 py-16 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-extrabold text-center sm:text-5xl">
            Política de Cookies
          </h1>
          <p className="mt-4 text-lg text-center max-w-2xl mx-auto">
            Conoce cómo utilizamos las cookies en nuestro sitio web y cómo
            puedes gestionarlas.
          </p>
        </div>
      </section>

      {/* Contenido de la Política de Cookies */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-extrabold text-gray-900">
                1. ¿Qué son las cookies?
              </h2>
              <p className="mt-4 text-base text-gray-500">
                Las cookies son pequeños archivos de texto que se almacenan en
                tu dispositivo cuando visitas un sitio web. Se utilizan para
                recordar tus preferencias y mejorar la experiencia de
                navegación.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-extrabold text-gray-900">
                2. ¿Cómo utilizamos las cookies?
              </h2>
              <p className="mt-4 text-base text-gray-500">
                Usamos cookies para mejorar la funcionalidad de nuestro sitio
                web, analizar el tráfico y personalizar el contenido según tus
                preferencias. Las cookies nos permiten recordar tus visitas y
                ofrecerte una experiencia más fluida.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-extrabold text-gray-900">
                3. Tipos de cookies que utilizamos
              </h2>
              <p className="mt-4 text-base text-gray-500">
                Utilizamos diferentes tipos de cookies en nuestro sitio web,
                entre ellas:
              </p>
              <ul className="mt-4 list-inside list-disc text-base text-gray-500">
                <li>
                  <strong>Cookies necesarias:</strong> Son esenciales para el
                  funcionamiento del sitio web.
                </li>
                <li>
                  <strong>Cookies de rendimiento:</strong> Nos ayudan a analizar
                  el tráfico y mejorar el sitio.
                </li>
                <li>
                  <strong>Cookies de funcionalidad:</strong> Permiten
                  personalizar la experiencia del usuario.
                </li>
                <li>
                  <strong>Cookies de marketing:</strong> Utilizadas para
                  personalizar los anuncios y promociones.
                </li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-extrabold text-gray-900">
                4. ¿Cómo puedes controlar las cookies?
              </h2>
              <p className="mt-4 text-base text-gray-500">
                Puedes controlar y gestionar las cookies a través de la
                configuración de tu navegador. Si prefieres no aceptar cookies,
                puedes configurarlo para bloquear todas o algunas cookies. Sin
                embargo, esto puede afectar algunas funcionalidades de nuestro
                sitio.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-extrabold text-gray-900">
                5. Consentimiento
              </h2>
              <p className="mt-4 text-base text-gray-500">
                Al continuar utilizando nuestro sitio web, das tu consentimiento
                para el uso de cookies según los términos de esta política. Si
                no estás de acuerdo, puedes deshabilitar las cookies siguiendo
                las instrucciones de tu navegador.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-extrabold text-gray-900">
                6. Cambios en la política de cookies
              </h2>
              <p className="mt-4 text-base text-gray-500">
                Podemos actualizar esta política de cookies para reflejar
                cambios en la legislación o en la forma en que utilizamos las
                cookies. Te informaremos de cualquier cambio mediante una
                notificación en nuestro sitio web.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
