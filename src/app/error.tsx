"use client"

import { useEffect } from "react"
import Link from "next/link"
import { Home, RefreshCw } from "lucide-react"

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error("Error:", error)
  }, [error])

  return (
    <div className="min-h-[70vh] flex items-center justify-center pt-16">
      <div className="text-center px-4">
        <h1 className="text-4xl font-bold text-red-600 mb-4">¡Ups! Algo salió mal</h1>
        <p className="text-gray-600 mb-8 max-w-md mx-auto">
          Ha ocurrido un error al cargar esta página. Por favor, intenta recargar o vuelve al inicio.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <button
            onClick={reset}
            className="inline-flex items-center bg-primary hover:bg-primary-dark text-white px-6 py-3 rounded-lg font-medium transition-colors"
          >
            <RefreshCw size={18} className="mr-2" /> Intentar de nuevo
          </button>
          <Link
            href="/"
            className="inline-flex items-center bg-gray-200 hover:bg-gray-300 text-gray-800 px-6 py-3 rounded-lg font-medium transition-colors"
          >
            <Home size={18} className="mr-2" /> Volver al inicio
          </Link>
        </div>
      </div>
    </div>
  )
}
