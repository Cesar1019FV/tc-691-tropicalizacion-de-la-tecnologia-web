import Link from "next/link"
import { Home } from "lucide-react"

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center pt-16">
      <div className="text-center px-4">
        <h1 className="text-6xl font-bold text-primary mb-4">404</h1>
        <h2 className="text-2xl font-semibold mb-4">Página no encontrada</h2>
        <p className="text-gray-600 mb-8 max-w-md mx-auto">
          Lo sentimos, la página que estás buscando no existe o ha sido movida.
        </p>
        <Link
          href="/"
          className="inline-flex items-center bg-primary hover:bg-primary-dark text-white px-6 py-3 rounded-lg font-medium transition-colors"
        >
          <Home size={18} className="mr-2" /> Volver al inicio
        </Link>
      </div>
    </div>
  )
}
