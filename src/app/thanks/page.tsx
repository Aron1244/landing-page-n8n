"use client"

import { useState, useEffect } from "react"
import { useRouter, useSearchParams } from "next/navigation"
import Link from "next/link"

export default function ThanksPage() {
  const [userName, setUserName] = useState<string>("")
  const [isLoading, setIsLoading] = useState(true)
  const router = useRouter()
  const searchParams = useSearchParams()

  useEffect(() => {
    const status = searchParams?.get("status") || ""
    const userId = searchParams?.get("user") || ""

    // Verificar si la página se cargó con los parámetros correctos
    if (status !== "success" || !userId) {
      router.push("/")
      return
    }

    const fetchUserData = async () => {
      try {
        const response = await fetch(`http://localhost:8000/api/user/${userId}`)

        if (!response.ok) {
          throw new Error("Error al obtener datos del usuario")
        }

        const userData = await response.json()
        setUserName(userData.name)
      } catch (error) {
        console.error("Error:", error)
      } finally {
        setIsLoading(false)
      }
    }

    fetchUserData()
  }, [router, searchParams])

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-indigo-600"></div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div className="bg-white overflow-hidden shadow-xl rounded-lg">
          {/* Encabezado con gradiente */}
          <div className="bg-gradient-to-r from-indigo-600 to-purple-600 px-6 py-8 text-center">
            <div className="inline-block p-3 bg-white/20 rounded-full mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-10 w-10 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h1 className="text-3xl font-extrabold text-white">¡Gracias por tu suscripción!</h1>
            <p className="mt-2 text-lg text-indigo-100">
              {userName ? `¡Hola ${userName}! ` : ""}Tu pago ha sido procesado con éxito.
            </p>
          </div>

          {/* Contenido */}
          <div className="px-6 py-8 text-center">
            <p className="text-gray-700 mb-6">
              Tu suscripción está activa y ahora tienes acceso completo a todas las funcionalidades de nuestra
              plataforma.
            </p>

            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <Link
                href="/"
                className="inline-flex items-center justify-center px-5 py-2 border border-transparent text-base font-medium rounded-md text-white bg-gradient-to-r from-indigo-600 to-purple-600 shadow-sm hover:from-indigo-700 hover:to-purple-700"
              >
                Ir al inicio
              </Link>
              <Link
                href="/profile"
                className="inline-flex items-center justify-center px-5 py-2 border border-indigo-600 text-base font-medium rounded-md text-indigo-600 bg-white hover:bg-indigo-50"
              >
                Ver mi perfil
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
