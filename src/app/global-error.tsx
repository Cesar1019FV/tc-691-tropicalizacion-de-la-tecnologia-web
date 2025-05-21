"use client"

import { useEffect } from "react"

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error("Global error:", error)
  }, [error])

  return (
    <html lang="es">
      <body>
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
          <div className="text-center px-4">
            <h1 className="text-4xl font-bold text-red-600 mb-4">¡Error crítico!</h1>
            <p className="text-gray-700 mb-8 max-w-md mx-auto">
              Ha ocurrido un error grave en la aplicación. Por favor, intenta recargar la página.
            </p>
            <button
              onClick={reset}
              className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg font-medium transition-colors"
            >
              Intentar de nuevo
            </button>
          </div>
        </div>
      </body>
    </html>
  )
}
