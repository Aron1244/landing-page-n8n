"use client"

import type React from "react"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"

type User = {
  id: number
  name: string
  email: string
  role?: string
  has_access?: boolean
}

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const [isAuthorized, setIsAuthorized] = useState(false)
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

        const response = await fetch(`http://localhost:8000/api/user/${userId}`)

        if (!response.ok) {
          throw new Error("Error al obtener información del usuario")
        }

        const userData: User = await response.json()

        // Verificar si el usuario es administrador
        if (userData.role !== "admin") {
          router.push("/")
          return
        }

        setIsAuthorized(true)
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

  if (!isAuthorized) {
    return null // El useEffect redirigirá, esto es solo para evitar un flash de contenido
  }

  return <div className="bg-gray-100 min-h-screen">{children}</div>
}

