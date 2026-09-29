import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { OurTeam } from "@/components/our-team"
import { PageGlow } from "@/components/page-glow"

export default function TeamPage() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-[#0B1220]">
      <PageGlow color="teal" />
      <Navbar />
      <OurTeam />
      <Footer />
    </div>
  )
}
