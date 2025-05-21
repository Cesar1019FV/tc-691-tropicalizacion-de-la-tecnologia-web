import { ArrowRight } from "lucide-react"
import Link from "next/link"
import ProjectGrid from "../proyectos/project-grid"

interface Proyecto {
  id: string
  nombre: string
  descripcionCorta: string
  imagen: string
  categoria: string
  destacado?: boolean
}

interface FeaturedProjectsProps {
  proyectos: Proyecto[]
}

export default function FeaturedProjects({ proyectos }: FeaturedProjectsProps) {
  // Asegurarnos de que proyectos es un array
  const proyectosArray = Array.isArray(proyectos) ? proyectos : []

  // Filtrar solo los proyectos destacados
  const proyectosDestacados = proyectosArray.filter((proyecto) => proyecto.destacado)

  // Si no hay proyectos destacados, mostrar los primeros 3
  const proyectosMostrados = proyectosDestacados.length > 0 ? proyectosDestacados : proyectosArray.slice(0, 3)

  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 gap-4">
          <div>
            <span className="inline-block text-primary font-semibold mb-2 tracking-wider uppercase text-sm">
              Descubre
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Proyectos Destacados</h2>
          </div>
          <Link
            href="/proyectos"
            className="bg-white shadow-md hover:shadow-lg px-6 py-3 rounded-full text-primary hover:text-primary-dark font-medium inline-flex items-center group transition-all duration-300"
          >
            Ver todos{" "}
            <ArrowRight size={16} className="ml-1 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </div>

        <ProjectGrid proyectos={proyectosMostrados} />
      </div>
    </section>
  )
}
