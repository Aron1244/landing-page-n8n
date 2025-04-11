"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"

type User = {
  id: number
  name: string
  email: string
  role?: string
  has_access?: boolean
}

export default function AdminDashboard() {
  const [user, setUser] = useState<User | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const router = useRouter()

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const token = localStorage.getItem("auth_token")
        const userId = localStorage.getItem("user_id")

        if (!token || !userId) {
          router.push("/login")
          return
        }

        const response = await fetch(`http://localhost:8000/api/users/${userId}`)

        if (!response.ok) {
          throw new Error("Error al obtener información del usuario")
        }

        const userData = await response.json()

        // Verificar si el usuario es administrador
        if (userData.role !== "admin") {
          router.push("/")
          return
        }

        setUser(userData)
      } catch (error) {
        console.error("Error de autenticación:", error)
        router.push("/login")
      } finally {
        setIsLoading(false)
      }
    }

    checkAuth()
  }, [router])

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-indigo-600"></div>
      </div>
    )
  }

  if (!user) {
    return null // El useEffect redirigirá, esto es solo para evitar un flash de contenido
  }

  return (
    <div className="py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-gray-900">Panel de Administración</h1>

        <div className="mt-8">
          <div className="bg-white shadow overflow-hidden sm:rounded-lg">
            <div className="px-4 py-5 sm:px-6 bg-gradient-to-r from-indigo-600 to-purple-600">
              <h2 className="text-lg leading-6 font-medium text-white">Bienvenido, {user.name}</h2>
              <p className="mt-1 max-w-2xl text-sm text-indigo-100">Panel de control para administradores</p>
            </div>

            <div className="border-t border-gray-200">
              <div className="px-4 py-5 sm:p-6">
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                  {/* Tarjeta de Gestión de Usuarios */}
                  <div className="bg-white overflow-hidden shadow rounded-lg border">
                    <div className="px-4 py-5 sm:p-6">
                      <div className="flex items-center">
                        <div className="flex-shrink-0 bg-indigo-500 rounded-md p-3">
                          <svg
                            className="h-6 w-6 text-white"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
                            />
                          </svg>
                        </div>
                        <div className="ml-5 w-0 flex-1">
                          <dl>
                            <dt className="text-sm font-medium text-gray-500 truncate">Gestión de Usuarios</dt>
                            <dd>
                              <div className="text-lg font-medium text-gray-900">Administrar usuarios</div>
                            </dd>
                          </dl>
                        </div>
                      </div>
                      <div className="mt-5">
                        <Link
                          href="/admin/users"
                          className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                        >
                          Ver usuarios
                        </Link>
                      </div>
                    </div>
                  </div>

                  {/* Tarjeta de Gráfico de Usuarios */}
                  <div className="bg-white overflow-hidden shadow rounded-lg border">
                    <div className="px-4 py-5 sm:p-6">
                      <div className="flex items-center">
                        <div className="flex-shrink-0 bg-indigo-500 rounded-md p-3">
                          <svg
                            className="h-6 w-6 text-white"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
                            />
                          </svg>
                        </div>
                        <div className="ml-5 w-0 flex-1">
                          <dl>
                            <dt className="text-sm font-medium text-gray-500 truncate">Gráfico de Usuarios</dt>
                            <dd>
                              <div className="text-lg font-medium text-gray-900">Ver gráfico de usuarios con acceso</div>
                            </dd>
                          </dl>
                        </div>
                      </div>
                      <div className="mt-5">
                        <Link
                          href="/admin/accesschart"
                          className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                        >
                          Ver gráfico
                        </Link>
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
  )
}

