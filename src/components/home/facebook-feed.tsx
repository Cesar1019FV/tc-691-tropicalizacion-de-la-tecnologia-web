"use client"

import { useEffect, useRef } from "react"
import { ExternalLink } from "lucide-react"

export default function FacebookFeed() {
  const fbContainerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Cargar el SDK de Facebook
    const loadFacebookSDK = () => {
      const script = document.createElement("script")
      script.src = "https://connect.facebook.net/es_LA/sdk.js#xfbml=1&version=v18.0"
      script.async = true
      script.defer = true
      script.crossOrigin = "anonymous"
      document.body.appendChild(script)

      // Definir FB globalmente
      window.FB = window.FB || {}
      window.fbAsyncInit = () => {
        if (typeof FB !== "undefined") {
          FB.init({
            appId: "", // No es necesario para el plugin de página
            xfbml: true,
            version: "v18.0",
          })
        }
      }
    }

    // Si el SDK de Facebook no está cargado, cargarlo
    if (!document.getElementById("facebook-jssdk")) {
      loadFacebookSDK()
    } else {
      // Si ya está cargado, renderizar el plugin
      if (window.FB) {
        window.FB.XFBML.parse(fbContainerRef.current)
      }
    }

    return () => {
      // Limpiar el script al desmontar
      const script = document.getElementById("facebook-jssdk")
      if (script) {
        script.remove()
      }
    }
  }, [])

  return (
    <section className="py-24 bg-gray-900 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block text-blue-400 font-semibold mb-2 tracking-wider uppercase text-sm">
            Conéctate
          </span>
          <h2 className="text-3xl md:text-4xl font-bold">Últimas Noticias</h2>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-white/10 backdrop-blur-md p-8 rounded-3xl shadow-2xl">
            <div
              ref={fbContainerRef}
              className="fb-page"
              data-href="https://www.facebook.com/Tropicalizacion/"
              data-tabs="timeline"
              data-width="500"
              data-height="700"
              data-small-header="false"
              data-adapt-container-width="true"
              data-hide-cover="false"
              data-show-facepile="true"
            >
              <blockquote cite="https://www.facebook.com/Tropicalizacion/" className="fb-xfbml-parse-ignore">
                <a href="https://www.facebook.com/Tropicalizacion/">Facebook</a>
              </blockquote>
            </div>

            <div className="mt-8 text-center">
              <p className="text-gray-300 mb-4">
                Síguenos en redes sociales para estar al día con nuestras actividades y proyectos.
              </p>
              <a
                href="https://www.facebook.com/Tropicalizacion/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full font-medium inline-flex items-center transition-colors shadow-lg"
              >
                Visitar página de Facebook <ExternalLink size={16} className="ml-2" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
