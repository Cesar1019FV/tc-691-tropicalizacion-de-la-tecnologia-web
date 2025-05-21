import Link from "next/link"
import { BookOpen, Code, Users } from "lucide-react"

const features = [
  {
    title: "Proyectos",
    description: "Explora nuestros proyectos de impacto social y tecnológico en diferentes áreas.",
    icon: Users,
    href: "/proyectos",
    color: "from-blue-600 to-blue-800",
    iconBg: "bg-blue-600",
  },
  {
    title: "Cursos Públicos",
    description: "Accede a cursos gratuitos sobre tecnología, programación y más.",
    icon: BookOpen,
    href: "/cursos-publicos",
    color: "from-green-600 to-green-800",
    iconBg: "bg-green-600",
  },
  {
    title: "Simulador Junior",
    description: "Herramienta educativa para aprender programación de forma interactiva.",
    icon: Code,
    href: "/simulador-junior",
    color: "from-purple-600 to-purple-800",
    iconBg: "bg-purple-600",
  },
]

export default function FeatureLinks() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block text-primary font-semibold mb-2 tracking-wider uppercase text-sm">Explora</span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Nuestras Áreas</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Link key={index} href={feature.href} className="group h-full">
              <div className="bg-white rounded-2xl overflow-hidden h-full transform transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl shadow-xl relative">
                <div className={`h-2 bg-gradient-to-r ${feature.color}`}></div>
                <div className="p-8">
                  <div className="absolute right-8 top-8 opacity-5 text-9xl font-bold group-hover:opacity-10 transition-opacity">
                    {index + 1}
                  </div>
                  <div
                    className={`w-16 h-16 ${feature.iconBg} rounded-2xl flex items-center justify-center text-white mb-6 transform transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3 shadow-lg`}
                  >
                    <feature.icon size={32} />
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-gray-900 group-hover:text-primary transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
