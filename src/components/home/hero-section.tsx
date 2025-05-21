"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { ArrowRight } from "lucide-react"
import { cn } from "@/lib/utils"

export default function HeroSection() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  return (
    <div className="relative min-h-screen flex items-center overflow-hidden pt-16">
      {/* Background with gradient overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/placeholder.svg?height=1080&width=1920"
          alt="Background"
          fill
          className="object-cover"
          priority
          unoptimized
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-secondary/80"></div>
      </div>

      {/* Geometric shapes for modern look */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-64 h-64 rounded-full bg-white/10 blur-2xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 rounded-full bg-white/5 blur-3xl"></div>
        <div className="absolute top-1/3 right-1/4 w-32 h-32 rounded-full bg-white/10 blur-xl"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl">
          <div className="bg-black/30 backdrop-blur-sm p-8 rounded-2xl shadow-2xl">
            <h1
              className={cn(
                "text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 opacity-0",
                isLoaded && "animate-fade-in",
              )}
            >
              <span className="block">TC-691:</span>
              <span className="block bg-clip-text text-transparent bg-gradient-to-r from-white to-white/90">
                Tropicalización de la Tecnología
              </span>
            </h1>

            <p
              className={cn("text-xl md:text-2xl text-white mb-8 opacity-0", isLoaded && "animate-slide-up delay-200")}
            >
              Adaptando soluciones tecnológicas al contexto local para generar impacto social positivo
            </p>

            <div className={cn("flex flex-wrap gap-4 opacity-0", isLoaded && "animate-slide-up delay-400")}>
              <Link
                href="/proyectos"
                className="bg-white text-primary hover:bg-white/90 px-8 py-4 rounded-xl font-medium inline-flex items-center transition-all duration-300 transform hover:translate-x-1 shadow-lg"
              >
                Ver proyectos <ArrowRight size={18} className="ml-2" />
              </Link>
              <Link
                href="/cursos-publicos"
                className="bg-transparent hover:bg-white/20 border-2 border-white px-8 py-4 rounded-xl font-medium inline-flex items-center text-white transition-all duration-300 shadow-lg"
              >
                Cursos públicos
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Modern decorative elements */}
      <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-black/20 to-transparent"></div>
      <div className="absolute top-0 right-0 w-full h-20 bg-gradient-to-b from-black/20 to-transparent"></div>
    </div>
  )
}
