import HeroSection from "@/components/home/hero-section"
import FeaturedProjects from "@/components/home/featured-projects"
import FacebookFeed from "@/components/home/facebook-feed"
import FeatureLinks from "@/components/home/feature-links"
import proyectos from "@/data/proyectos.json"

export default function Home() {
  // Asegurarnos de que proyectos es un array
  const proyectosArray = Array.isArray(proyectos) ? proyectos : []

  return (
    <>
      <HeroSection />
      <FeaturedProjects proyectos={proyectosArray} />
      <FeatureLinks />
      <FacebookFeed />
    </>
  )
}
