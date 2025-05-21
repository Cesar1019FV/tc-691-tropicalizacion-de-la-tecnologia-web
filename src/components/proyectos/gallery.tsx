"use client"

import { useState } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight, X, ZoomIn } from "lucide-react"
import { cn } from "@/lib/utils"

interface GalleryProps {
  images: string[]
  alt: string
}

export default function Gallery({ images, alt }: GalleryProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [isLoading, setIsLoading] = useState(true)

  const openModal = (index: number) => {
    setCurrentIndex(index)
    setIsModalOpen(true)
    setIsLoading(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
  }

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1))
    setIsLoading(true)
  }

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1))
    setIsLoading(true)
  }

  const handleImageLoad = () => {
    setIsLoading(false)
  }

  // Si no hay imágenes, mostrar un placeholder
  if (!images || images.length === 0) {
    return (
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {[1, 2, 3].map((index) => (
          <div key={index} className="relative h-48 rounded-xl overflow-hidden bg-gray-200">
            <div className="absolute inset-0 flex items-center justify-center text-gray-400">No hay imagen</div>
          </div>
        ))}
      </div>
    )
  }

  return (
    <div>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {images.map((image, index) => (
          <div
            key={index}
            className="relative h-48 md:h-64 cursor-pointer rounded-xl overflow-hidden shadow-lg transform transition-all duration-300 hover:scale-[1.02] hover:shadow-xl group"
            onClick={() => openModal(index)}
          >
            <Image
              src={image || "/placeholder.svg?height=400&width=600"}
              alt={`${alt} - imagen ${index + 1}`}
              fill
              className="object-cover"
              unoptimized
            />
            <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <div className="bg-white/20 backdrop-blur-sm p-3 rounded-full">
                <ZoomIn className="text-white" size={24} />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Modal para vista ampliada */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4 backdrop-blur-sm">
          <button
            onClick={closeModal}
            className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors z-10 bg-black/50 p-2 rounded-full"
            aria-label="Cerrar galería"
          >
            <X size={24} />
          </button>

          <button
            onClick={goToPrevious}
            className="absolute left-4 text-white hover:text-gray-300 transition-colors z-10 bg-black/50 p-3 rounded-full"
            aria-label="Imagen anterior"
          >
            <ChevronLeft size={28} />
          </button>

          <div className="relative w-full max-w-5xl h-[80vh]">
            {isLoading && (
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-12 h-12 border-4 border-white border-t-transparent rounded-full animate-spin"></div>
              </div>
            )}
            <Image
              src={images[currentIndex] || "/placeholder.svg?height=800&width=1200"}
              alt={`${alt} - imagen ampliada ${currentIndex + 1}`}
              fill
              className={cn("object-contain transition-opacity duration-300", isLoading ? "opacity-0" : "opacity-100")}
              onLoad={handleImageLoad}
              unoptimized
            />
          </div>

          <button
            onClick={goToNext}
            className="absolute right-4 text-white hover:text-gray-300 transition-colors z-10 bg-black/50 p-3 rounded-full"
            aria-label="Imagen siguiente"
          >
            <ChevronRight size={28} />
          </button>

          <div className="absolute bottom-4 text-white text-sm bg-black/70 px-4 py-2 rounded-full backdrop-blur-sm">
            {currentIndex + 1} / {images.length}
          </div>
        </div>
      )}
    </div>
  )
}
