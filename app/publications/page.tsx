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
            Fokus riset Bryan berpusat pada psikologi sosial hubungan antarkelompok, khususnya
            bagaimana keyakinan viktimisasi kolektif, identitas etnis dan nasional, serta
            pengakuan atas penderitaan masa lalu memengaruhi prasangka dan dukungan terhadap
            rekonsiliasi. Studi-studi ini meneliti masyarakat native dan Tionghoa Indonesia dalam
            konteks pasca-kolonial, menggunakan survei dan desain eksperimen dengan structural
            equation modeling (SEM) untuk menguji jalur mediasi antara keyakinan, sikap, dan
            perilaku antarkelompok.
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
