"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";

export default function ArrowBack() {
  const router = useRouter();

  // Función para regresar al dashboard de administración
  const handleBack = () => {
    router.push("/admin");
  };

  return (
    <Link
      href="/admin"
      className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
    >
      Volver al Dashboard
    </Link>
  );
}
