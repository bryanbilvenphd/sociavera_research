import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/hero-section"
import { ApproachFeatured } from "@/components/approach-featured"
import { WhoWeServe } from "@/components/who-we-serve"
import { Footer } from "@/components/footer"
import { Reveal } from "@/components/reveal"

export default function Page() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <HeroSection />
      <Reveal>
        <ApproachFeatured />
      </Reveal>
      <WhoWeServe />
      <Footer />
    </div>
  )
}
