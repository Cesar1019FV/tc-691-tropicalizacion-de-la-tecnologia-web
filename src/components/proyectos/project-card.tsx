import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

interface ProjectCardProps {
  id: string
  nombre: string
  descripcionCorta: string
  imagen: string
  categoria: string
  index?: number
}

export default function ProjectCard({ id, nombre, descripcionCorta, imagen, categoria }: ProjectCardProps) {
  return (
    <div className="bg-white rounded-xl shadow-xl overflow-hidden h-full flex flex-col transform transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
      <div className="relative h-56 overflow-hidden group">
        <Image
          src={imagen || "/placeholder.svg?height=400&width=600"}
          alt={nombre}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-110"
          unoptimized
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        <div className="absolute top-3 right-3 z-10">
          <span className="bg-primary/90 backdrop-blur-sm text-white text-xs px-3 py-1.5 rounded-full font-medium shadow-lg">
            {categoria}
          </span>
        </div>
      </div>

      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-bold mb-2 text-gray-900">{nombre}</h3>
        <p className="text-gray-600 mb-4 flex-grow">{descripcionCorta}</p>

        <Link
          href={`/proyectos/${id}`}
          className="inline-flex items-center text-primary hover:text-primary-dark font-medium group"
        >
          <span>Ver más</span>
          <ArrowRight size={16} className="ml-1 transition-transform duration-300 group-hover:translate-x-1" />
        </Link>
      </div>
    </div>
  )
}
