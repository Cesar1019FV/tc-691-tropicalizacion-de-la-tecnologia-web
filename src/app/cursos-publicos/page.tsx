import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export default function CursosPublicosPage() {
  return (
    <div className="pt-32 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="bg-white rounded-xl shadow-md p-8 md:p-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">Cursos Públicos</h1>
          <p className="text-xl text-gray-600 mb-8">
            Esta sección está en desarrollo. Próximamente encontrarás aquí todos nuestros cursos públicos.
          </p>

          <div className="w-24 h-24 mx-auto mb-8 rounded-full bg-gray-200 flex items-center justify-center">
            <span className="text-4xl text-gray-400">🚧</span>
          </div>

          <Link href="/" className="inline-flex items-center text-primary hover:text-primary-dark font-medium">
            <ArrowLeft size={16} className="mr-1" /> Volver al inicio
          </Link>
        </div>
      </div>
    </div>
  )
}
