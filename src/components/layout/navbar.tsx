"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X } from "lucide-react"
import { cn } from "@/lib/utils"

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  const isActive = (path: string) => {
    return pathname === path
  }

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled ? "bg-white shadow-lg py-2" : "bg-white/80 backdrop-blur-md py-4",
      )}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <Link href="/" className="flex-shrink-0 flex items-center">
              <span className="text-xl font-bold text-gray-900">TC-691</span>
            </Link>
          </div>

          {/* Desktop menu */}
          <div className="hidden md:flex md:items-center md:space-x-8">
            <Link
              href="/"
              className={cn(
                "font-medium transition-colors duration-300 text-gray-900 hover:text-primary",
                isActive("/") && "text-primary border-b-2 border-primary",
              )}
            >
              Inicio
            </Link>
            <Link
              href="/proyectos"
              className={cn(
                "font-medium transition-colors duration-300 text-gray-900 hover:text-primary",
                isActive("/proyectos") && "text-primary border-b-2 border-primary",
              )}
            >
              Proyectos
            </Link>
            <Link
              href="/cursos-publicos"
              className={cn(
                "font-medium transition-colors duration-300 text-gray-900 hover:text-primary",
                isActive("/cursos-publicos") && "text-primary border-b-2 border-primary",
              )}
            >
              Cursos Públicos
            </Link>
            <Link
              href="/simulador-junior"
              className={cn(
                "font-medium transition-colors duration-300 text-gray-900 hover:text-primary",
                isActive("/simulador-junior") && "text-primary border-b-2 border-primary",
              )}
            >
              Simulador Junior
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-900 hover:text-primary focus:outline-none transition-colors"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-lg">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link
              href="/"
              className={cn(
                "block px-3 py-2 rounded-md text-base font-medium text-gray-900 hover:bg-gray-100 hover:text-primary",
                isActive("/") && "bg-gray-100 text-primary",
              )}
              onClick={() => setIsMenuOpen(false)}
            >
              Inicio
            </Link>
            <Link
              href="/proyectos"
              className={cn(
                "block px-3 py-2 rounded-md text-base font-medium text-gray-900 hover:bg-gray-100 hover:text-primary",
                isActive("/proyectos") && "bg-gray-100 text-primary",
              )}
              onClick={() => setIsMenuOpen(false)}
            >
              Proyectos
            </Link>
            <Link
              href="/cursos-publicos"
              className={cn(
                "block px-3 py-2 rounded-md text-base font-medium text-gray-900 hover:bg-gray-100 hover:text-primary",
                isActive("/cursos-publicos") && "bg-gray-100 text-primary",
              )}
              onClick={() => setIsMenuOpen(false)}
            >
              Cursos Públicos
            </Link>
            <Link
              href="/simulador-junior"
              className={cn(
                "block px-3 py-2 rounded-md text-base font-medium text-gray-900 hover:bg-gray-100 hover:text-primary",
                isActive("/simulador-junior") && "bg-gray-100 text-primary",
              )}
              onClick={() => setIsMenuOpen(false)}
            >
              Simulador Junior
            </Link>
          </div>
        </div>
      )}
    </nav>
  )
}
