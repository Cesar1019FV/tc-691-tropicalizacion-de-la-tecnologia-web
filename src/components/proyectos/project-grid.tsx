import ProjectCard from "./project-card"

interface Proyecto {
  id: string
  nombre: string
  descripcionCorta: string
  imagen: string
  categoria: string
  destacado?: boolean
}

interface ProjectGridProps {
  proyectos: Proyecto[]
  filtroCategoria?: string
  mostrarSoloDestacados?: boolean
}

export default function ProjectGrid({ proyectos, filtroCategoria, mostrarSoloDestacados = false }: ProjectGridProps) {
  // Asegurarnos de que proyectos es un array
  const proyectosArray = Array.isArray(proyectos) ? proyectos : []

  // Filtrar proyectos según los criterios
  const proyectosFiltrados = proyectosArray.filter((proyecto) => {
    // Filtrar por categoría si se especifica
    const pasaFiltroCategoria = !filtroCategoria || proyecto.categoria === filtroCategoria

    // Filtrar por destacados si se solicita
    const pasaFiltroDestacados = !mostrarSoloDestacados || proyecto.destacado

    return pasaFiltroCategoria && pasaFiltroDestacados
  })

  if (proyectosFiltrados.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-gray-500">No se encontraron proyectos que coincidan con los criterios de búsqueda.</p>
      </div>
    )
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {proyectosFiltrados.map((proyecto, index) => (
        <ProjectCard
          key={proyecto.id}
          id={proyecto.id}
          nombre={proyecto.nombre}
          descripcionCorta={proyecto.descripcionCorta}
          imagen={proyecto.imagen}
          categoria={proyecto.categoria}
          index={index}
        />
      ))}
    </div>
  )
}
