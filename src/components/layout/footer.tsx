import Link from "next/link"
import { Facebook, Instagram, Mail, MapPin, Phone } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary via-secondary to-primary"></div>
      <div className="absolute top-0 right-0 w-64 h-64 rounded-full bg-primary/10 blur-3xl -translate-y-1/2"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full bg-secondary/10 blur-3xl translate-y-1/2"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div className="lg:col-span-1">
            <h3 className="text-2xl font-bold mb-6">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">TC-691</span>
            </h3>
            <p className="text-gray-300 mb-6">
              Proyecto de Trabajo Comunal Universitario dedicado a la implementación de soluciones tecnológicas
              adaptadas al contexto local.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://facebook.com/tcu691"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white transition-colors bg-white/10 p-2 rounded-full hover:bg-white/20"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
              <a
                href="https://instagram.com/tcu691"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white transition-colors bg-white/10 p-2 rounded-full hover:bg-white/20"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a
                href="mailto:tcu.tropicalizacion@ucr.ac.cr"
                className="text-gray-300 hover:text-white transition-colors bg-white/10 p-2 rounded-full hover:bg-white/20"
                aria-label="Email"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-6 relative inline-block">
              Enlaces Rápidos
              <span className="absolute -bottom-2 left-0 w-1/2 h-0.5 bg-primary rounded-full"></span>
            </h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/"
                  className="text-gray-300 hover:text-white transition-colors inline-block hover:translate-x-1 duration-300"
                >
                  Inicio
                </Link>
              </li>
              <li>
                <Link
                  href="/proyectos"
                  className="text-gray-300 hover:text-white transition-colors inline-block hover:translate-x-1 duration-300"
                >
                  Proyectos
                </Link>
              </li>
              <li>
                <Link
                  href="/cursos-publicos"
                  className="text-gray-300 hover:text-white transition-colors inline-block hover:translate-x-1 duration-300"
                >
                  Cursos Públicos
                </Link>
              </li>
              <li>
                <Link
                  href="/simulador-junior"
                  className="text-gray-300 hover:text-white transition-colors inline-block hover:translate-x-1 duration-300"
                >
                  Simulador Junior
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-6 relative inline-block">
              Proyectos Destacados
              <span className="absolute -bottom-2 left-0 w-1/2 h-0.5 bg-primary rounded-full"></span>
            </h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/proyectos/admision"
                  className="text-gray-300 hover:text-white transition-colors inline-block hover:translate-x-1 duration-300"
                >
                  Admisión
                </Link>
              </li>
              <li>
                <Link
                  href="/proyectos/businternoGPS"
                  className="text-gray-300 hover:text-white transition-colors inline-block hover:translate-x-1 duration-300"
                >
                  BusInternoGPS
                </Link>
              </li>
              <li>
                <Link
                  href="/proyectos/deferia"
                  className="text-gray-300 hover:text-white transition-colors inline-block hover:translate-x-1 duration-300"
                >
                  DeFeria
                </Link>
              </li>
              <li>
                <Link
                  href="/proyectos/robotikids"
                  className="text-gray-300 hover:text-white transition-colors inline-block hover:translate-x-1 duration-300"
                >
                  Robotikids
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-6 relative inline-block">
              Contacto
              <span className="absolute -bottom-2 left-0 w-1/2 h-0.5 bg-primary rounded-full"></span>
            </h3>
            <address className="not-italic text-gray-300 space-y-3">
              <p className="flex items-start">
                <MapPin size={18} className="mr-2 mt-1 flex-shrink-0 text-primary" />
                <span>
                  Universidad de Costa Rica
                  <br />
                  Escuela de Ciencias de la Computación e Informática
                  <br />
                  San Pedro, Montes de Oca
                </span>
              </p>
              <p className="flex items-center">
                <Mail size={18} className="mr-2 flex-shrink-0 text-primary" />
                <a href="mailto:tcu.tropicalizacion@ucr.ac.cr" className="hover:text-white transition-colors">
                  tcu.tropicalizacion@ucr.ac.cr
                </a>
              </p>
              <p className="flex items-center">
                <Phone size={18} className="mr-2 flex-shrink-0 text-primary" />
                <span>(506) 2511-0000</span>
              </p>
            </address>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-400">
          <p>
            &copy; {new Date().getFullYear()} TC-691: Tropicalización de la Tecnología. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  )
}
