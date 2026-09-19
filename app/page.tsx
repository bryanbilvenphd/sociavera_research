import { Sidebar } from "@/components/sidebar"
import { Header } from "@/components/header"
import { HeroBanner } from "@/components/hero-banner"
import { StatsWidget } from "@/components/stats-widget"
import { PublicationsGrid } from "@/components/publications-grid"

export default function Page() {
  return (
    <div className="flex min-h-screen bg-zinc-950 text-zinc-100">
      <Sidebar />
      <div className="flex min-w-0 flex-1 flex-col">
        <Header />
        <main className="flex-1 space-y-8 px-5 py-6 sm:px-8">
          <HeroBanner />
          <StatsWidget />
          <PublicationsGrid />
        </main>
      </div>
    </div>
  )
}
