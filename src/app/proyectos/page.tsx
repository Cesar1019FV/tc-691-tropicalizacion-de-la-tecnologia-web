"use client"

import { useState } from "react"
import ProjectGrid from "@/components/proyectos/project-grid"
import CategoryFilter from "@/components/proyectos/category-filter"
import proyectos from "@/data/proyectos.json"

// Asegurarnos de que proyectos es un array
const proyectosArray = Array.isArray(proyectos) ? proyectos : []

// Extraer categorías únicas de los proyectos
const categorias = Array.from(new Set(proyectosArray.map((proyecto) => proyecto.categoria))).map((id) => {
  // Mapear IDs de categoría a nombres más amigables
  const nombresCategorias: Record<string, string> = {
    educacion: "Educación",
    movilidad: "Movilidad",
    emprendimiento: "Emprendimiento",
    comercio: "Comercio",
    tecnologia: "Tecnología",
    sostenibilidad: "Sostenibilidad",
    agricultura: "Agricultura",
  }

  return {
    id,
    nombre: nombresCategorias[id] || id.charAt(0).toUpperCase() + id.slice(1),
  }
})

export default function ProyectosPage() {
  const [filtroCategoria, setFiltroCategoria] = useState<string | null>(null)

  const handleFilterChange = (categoria: string | null) => {
    setFiltroCategoria(categoria)
  }

  return (
    <div className="pt-32 pb-16 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Nuestros Proyectos</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Conoce los proyectos activos del TCU-691 que buscan adaptar la tecnología a las necesidades locales.
          </p>
        </div>

        <CategoryFilter categorias={categorias} onFilterChange={handleFilterChange} />
        <ProjectGrid proyectos={proyectosArray} filtroCategoria={filtroCategoria} />
      </div>
    </div>
  )
}
