"use client"

import { useState } from "react"
import { X } from "lucide-react"
import { cn } from "@/lib/utils"

interface Categoria {
  id: string
  nombre: string
}

interface CategoryFilterProps {
  categorias: Categoria[]
  onFilterChange: (categoria: string | null) => void
}

export default function CategoryFilter({ categorias, onFilterChange }: CategoryFilterProps) {
  const [categoriaActiva, setCategoriaActiva] = useState<string | null>(null)

  const handleCategoriaClick = (categoriaId: string) => {
    const nuevaCategoria = categoriaActiva === categoriaId ? null : categoriaId
    setCategoriaActiva(nuevaCategoria)
    onFilterChange(nuevaCategoria)
  }

  return (
    <div className="mb-12">
      <h2 className="text-xl font-semibold mb-6">Filtrar por categoría</h2>
      <div className="flex flex-wrap gap-3">
        {categorias.map((categoria) => (
          <button
            key={categoria.id}
            onClick={() => handleCategoriaClick(categoria.id)}
            className={cn(
              "px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300",
              categoriaActiva === categoria.id
                ? "bg-primary text-white shadow-lg"
                : "bg-white text-gray-700 hover:bg-gray-100 shadow-md",
            )}
          >
            {categoria.nombre}
          </button>
        ))}
        {categoriaActiva && (
          <button
            onClick={() => {
              setCategoriaActiva(null)
              onFilterChange(null)
            }}
            className="px-5 py-2.5 rounded-full text-sm font-medium bg-red-500 text-white hover:bg-red-600 transition-all duration-300 inline-flex items-center shadow-md"
          >
            Limpiar filtros <X size={14} className="ml-1" />
          </button>
        )}
      </div>
    </div>
  )
}
