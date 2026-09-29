import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { PublicationsGrid } from "@/components/publications-grid"
import { PageGlow } from "@/components/page-glow"

export default function PublicationsPage() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-[#0B1220]">
      <PageGlow color="amber" />
      <Navbar />
      <main className="mx-auto max-w-7xl px-6 py-16 lg:px-10">
        <div>
          <p className="max-w-2xl text-sm leading-relaxed text-slate-300">
            Fokus riset Bryan berpusat pada psikologi sosial, mencakup human judgment, social
            judgment, dan calibrated trust, serta hubungan antarkelompok, group dynamics, dan
            intergroup attitude. Studi-studi ini menggunakan survei dan desain eksperimen dengan
            structural equation modeling (SEM) untuk menguji jalur mediasi.
          </p>
        </div>
        <div className="mt-10">
          <PublicationsGrid />
        </div>
      </main>
      <Footer />
    </div>
  )
}
