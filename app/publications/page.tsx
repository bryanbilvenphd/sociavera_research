import { Sidebar } from "@/components/sidebar"
import { Header } from "@/components/header"
import { PublicationsGrid } from "@/components/publications-grid"

export default function PublicationsPage() {
  return (
    <div className="flex min-h-screen bg-zinc-950 text-zinc-100">
      <Sidebar />
      <div className="flex min-w-0 flex-1 flex-col">
        <Header />
        <main className="flex-1 space-y-8 px-5 py-6 sm:px-8">
          <div>
             <h1 className="text-2xl font-semibold tracking-tight text-zinc-50">
              Publikasi Bryan Bilven, Ph.D.
            </h1>
            <p className="mt-2 text-sm text-zinc-400">
              Publikasi akademik peer-review pribadi oleh Founder &amp; Principal Researcher SociaVera Research.
            </p>
          </div>
          <PublicationsGrid />
        </main>
      </div>
    </div>
  )
}
