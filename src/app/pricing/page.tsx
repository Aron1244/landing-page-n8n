"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

interface Plan {
  name: string;
  price: string;
  description: string;
  features: string[];
  cta: string;
  popular: boolean;
  id: number;
}

export default function PricingPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [userId, setUserId] = useState<string | null>(null);

  const plans: Plan[] = [
    {
      id: 1,
      name: "Plan Básico",
      price: "29",
      description: "Perfecto para comenzar con IA",
      features: [
        "100,000 tokens por mes",
        "Consultas estándar con el agente IA",
        "Acceso a funciones básicas",
        "Soporte por email",
        "Tiempo de respuesta estándar",
        "Historial de consultas básico",
      ],
      cta: "Comenzar ahora",
      popular: false,
    },
    {
      id: 2,
      name: "Plan Premium",
      price: "99",
      description: "Para usuarios que necesitan más potencia",
      features: [
        "500,000 tokens por mes",
        "Consultas avanzadas con el agente IA",
        "Acceso a todas las funciones",
        "Soporte prioritario 24/7",
        "Procesamiento prioritario",
        "Historial de consultas ilimitado",
        "Acceso anticipado a nuevas funciones",
        "Modelos de IA avanzados",
      ],
      cta: "Comenzar ahora",
      popular: true,
    },
  ];

  useEffect(() => {
    const id = localStorage.getItem("user_id");
    console.log("User ID from localStorage:", id); // Depuración
    setUserId(id);
  }, []);

  const handleSubscribe = async (planId: number) => {
    if (!userId) {
      setError("Debes iniciar sesión para suscribirte");
      router.push("/login");
      return;
    }

    setLoading(true);
    setError(null);

    try {
      // Verificar conexión a internet primero
      if (!navigator.onLine) {
        throw new Error("No hay conexión a internet");
      }

      // Datos que se enviarán a tu backend
      const payload = {
        plan_id: planId.toString(),
        user_id: userId,
      };

      console.log("Datos enviados a tu backend:", payload);

      const response = await fetch("http://localhost:8000/api/payments/create", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("auth_token")}`,
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(
          errorData.message ||
            `Error HTTP: ${response.status} ${response.statusText}`
        );
      }

      const paymentData = await response.json();
      console.log("Respuesta de tu backend:", paymentData);

      // Verificar si la respuesta contiene la URL de redirección
      if (!paymentData.redirect_url) {
        throw new Error("No se recibió la URL de PayPal en la respuesta");
      }

      // Redirigir al usuario a la URL de aprobación de PayPal
      window.location.href = paymentData.redirect_url;
    } catch (err) {
      console.error("Error en la suscripción:", err);
      setError(
        err instanceof Error
          ? err.message
          : "Ocurrió un error inesperado al procesar el pago"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-gray-50">
      {/* Header */}
      <div className="relative overflow-hidden">
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

        <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8 relative">
          <div className="text-center">
            <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
              <span className="block">Planes y Precios</span>
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600 mt-2">
                Elige el plan perfecto para ti
              </span>
            </h1>
            <p className="mt-6 max-w-2xl mx-auto text-xl text-gray-500">
              Precios transparentes y flexibles adaptados a tus necesidades.
              Comienza gratis y escala según tu crecimiento.
            </p>
          </div>
          <div className="mb-60"></div>
        </div>

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
      </div>

      {/* Pricing Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
          {error && (
            <div className="mb-8 p-4 bg-red-50 border-l-4 border-red-500 rounded">
              <div className="flex">
                <div className="flex-shrink-0">
                  <svg
                    className="h-5 w-5 text-red-500"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <div className="ml-3">
                  <p className="text-sm text-red-700">{error}</p>
                </div>
              </div>
            </div>
          )}

          <div className="grid md:grid-cols-2 gap-8 mt-16">
            {plans.map((plan) => (
              <div
                key={plan.name}
                className={`relative rounded-2xl ${
                  plan.popular
                    ? "bg-gradient-to-r from-indigo-600 to-purple-600 text-white"
                    : "bg-white text-gray-700"
                } shadow-xl`}
              >
                {plan.popular && (
                  <div className="absolute top-0 right-0 transform translate-x-2 -translate-y-2">
                    <div className="bg-gradient-to-r from-yellow-400 to-yellow-500 text-white text-sm font-semibold py-1 px-4 rounded-full shadow-lg">
                      Más Popular
                    </div>
                  </div>
                )}
                <div className="p-8">
                  <h3 className="text-2xl font-bold">{plan.name}</h3>
                  <p
                    className={`mt-2 ${
                      plan.popular ? "text-indigo-100" : "text-gray-500"
                    }`}
                  >
                    {plan.description}
                  </p>
                  <div className="mt-6">
                    <span className="text-5xl font-extrabold">
                      ${plan.price}
                    </span>
                    <span
                      className={`${
                        plan.popular ? "text-indigo-100" : "text-gray-500"
                      } ml-2`}
                    >
                      /mes
                    </span>
                  </div>

                  <ul className="mt-8 space-y-4">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-center">
                        <span
                          className={`inline-flex items-center justify-center w-5 h-5 mr-3 rounded-full ${
                            plan.popular
                              ? "bg-white text-indigo-600"
                              : "bg-indigo-600 text-white"
                          }`}
                        >
                          ✓
                        </span>
                        <span
                          className={
                            plan.popular ? "text-indigo-100" : "text-gray-600"
                          }
                        >
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>

                  <button
                    onClick={() => handleSubscribe(plan.id)}
                    disabled={loading}
                    className={`mt-8 w-full py-3 px-6 rounded-xl text-lg font-semibold transition-all duration-200 ${
                      plan.popular
                        ? "bg-white text-indigo-600 hover:bg-gray-50"
                        : "bg-gradient-to-r from-indigo-600 to-purple-600 text-white hover:opacity-90"
                    } ${loading ? "opacity-70 cursor-not-allowed" : ""}`}
                  >
                    {loading ? "Procesando..." : plan.cta}
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* FAQ Section */}
          <div className="mt-24">
            <h2 className="text-3xl font-bold text-center text-gray-900">
              Preguntas Frecuentes
            </h2>
            <div className="mt-12 grid gap-8 md:grid-cols-2">
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <h3 className="text-lg font-semibold text-gray-900">
                  ¿Cómo funciona el pago con PayPal?
                </h3>
                <p className="mt-2 text-gray-600">
                  Al hacer clic en "Comenzar ahora", serás redirigido a PayPal
                  para completar tu pago de forma segura. Una vez completado,
                  serás redirigido de vuelta a nuestra plataforma con tu
                  suscripción activada.
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <h3 className="text-lg font-semibold text-gray-900">
                  ¿Puedo cancelar mi suscripción?
                </h3>
                <p className="mt-2 text-gray-600">
                  Sí, puedes cancelar tu suscripción en cualquier momento desde
                  tu panel de control. La cancelación será efectiva al final del
                  período de facturación actual.
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <h3 className="text-lg font-semibold text-gray-900">
                  ¿Qué métodos de pago aceptan?
                </h3>
                <p className="mt-2 text-gray-600">
                  Actualmente aceptamos pagos a través de PayPal, lo que te
                  permite usar tu tarjeta de crédito/débito o saldo de PayPal.
                  Estamos trabajando para añadir más opciones de pago en el
                  futuro.
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <h3 className="text-lg font-semibold text-gray-900">
                  ¿Cómo sé que mi pago fue exitoso?
                </h3>
                <p className="mt-2 text-gray-600">
                  Recibirás una confirmación por correo electrónico y verás tu
                  nuevo plan activo inmediatamente en tu panel de control.
                  También puedes verificar el estado en la sección de pagos de
                  tu cuenta.
                </p>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="mt-24 text-center">
            <h2 className="text-3xl font-bold text-gray-900">
              ¿Necesitas un plan personalizado?
            </h2>
            <p className="mt-4 text-xl text-gray-500">
              Contáctanos para discutir opciones personalizadas para grandes
              equipos y empresas.
            </p>
            <button className="mt-8 inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-gradient-to-r from-indigo-600 to-purple-600 hover:opacity-90 md:py-4 md:text-lg md:px-10">
              Contactar Ventas
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
