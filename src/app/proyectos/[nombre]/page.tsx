import { notFound } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, ExternalLink } from "lucide-react"
import Gallery from "@/components/proyectos/gallery"
import proyectos from "@/data/proyectos.json"

interface ProyectoPageProps {
  params: {
    nombre: string
  }
}

export function generateStaticParams() {
  return proyectos.map((proyecto) => ({
    nombre: proyecto.id,
  }))
}

export default function ProyectoPage({ params }: ProyectoPageProps) {
  const proyecto = proyectos.find((p) => p.id === params.nombre)

  if (!proyecto) {
    notFound()
  }

  return (
    <div className="pt-32 pb-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <Link
            href="/proyectos"
            className="inline-flex items-center text-primary hover:text-primary-dark font-medium group bg-white shadow-md hover:shadow-lg px-5 py-2 rounded-full transition-all duration-300"
          >
            <ArrowLeft size={16} className="mr-1 transition-transform duration-300 group-hover:-translate-x-1" /> Volver
            a proyectos
          </Link>
        </div>

        <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
          <div className="relative h-72 md:h-[500px]">
            <Image
              src={proyecto.imagen || "/placeholder.svg?height=800&width=1200"}
              alt={proyecto.nombre}
              fill
              className="object-cover"
              priority
              unoptimized
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
            <div className="absolute bottom-0 left-0 p-8 text-white">
              <div className="inline-block bg-primary/90 backdrop-blur-sm px-4 py-1.5 rounded-full text-sm font-medium mb-4 shadow-lg">
                {proyecto.categoria.charAt(0).toUpperCase() + proyecto.categoria.slice(1)}
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-2">{proyecto.nombre}</h1>
              <p className="text-white/90 max-w-2xl">{proyecto.descripcionCorta}</p>
            </div>
          </div>

          <div className="p-8 md:p-12">
            <div className="max-w-4xl mx-auto">
              <div className="prose prose-lg max-w-none mb-12">
                <div className="flex items-center mb-6">
                  <div className="w-1.5 h-8 bg-primary rounded-full mr-3"></div>
                  <h2 className="text-3xl font-bold text-gray-900 m-0">Descripción</h2>
                </div>
                <p className="text-gray-700 leading-relaxed">{proyecto.descripcion}</p>
              </div>

              <div className="mb-12">
                <div className="flex items-center mb-6">
                  <div className="w-1.5 h-8 bg-primary rounded-full mr-3"></div>
                  <h2 className="text-3xl font-bold text-gray-900 m-0">Galería</h2>
                </div>
                <Gallery images={proyecto.galeria || []} alt={proyecto.nombre} />
              </div>

              <div>
                <div className="flex items-center mb-6">
                  <div className="w-1.5 h-8 bg-primary rounded-full mr-3"></div>
                  <h2 className="text-3xl font-bold text-gray-900 m-0">Enlaces de interés</h2>
                </div>
                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                  {proyecto.enlaces &&
                    proyecto.enlaces.map((enlace, index) => (
                      <a
                        key={index}
                        href={enlace.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center p-5 bg-gray-50 border border-gray-100 rounded-xl hover:bg-gray-100 transition-colors group shadow-md hover:shadow-lg"
                      >
                        <div className="flex-1">
                          <h3 className="font-medium text-gray-900">{enlace.titulo}</h3>
                        </div>
                        <ExternalLink
                          size={16}
                          className="text-gray-500 transition-transform duration-300 group-hover:translate-x-1"
                        />
                      </a>
                    ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
