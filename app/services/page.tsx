import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { PageGlow } from "@/components/page-glow"

const behavioralSteps = [
  { title: "Sesi Diskusi Awal", desc: "Merumuskan pertanyaan riset dan populasi target dalam 30 menit, tanpa biaya." },
  { title: "Desain Instrumen", desc: "Instrumen Human Judgment Measurement disesuaikan dengan produk AI dan konteks klien." },
  { title: "Pengumpulan Data", desc: "Panel responden Indonesia terverifikasi, direkrut sesuai kriteria populasi target." },
  { title: "Validasi & Analisis", desc: "Reliabilitas, validitas konstruk, dan pemodelan struktural sebelum temuan diinterpretasikan." },
  { title: "Laporan", desc: "Interpretasi naratif yang dapat ditindaklanjuti, dilengkapi lampiran teknis reliabilitas." },
]

const behavioralAudience = [
  "Perusahaan dengan chatbot atau asisten AI customer-facing, seperti bank/fintech, e-commerce, telko, dan startup AI lokal",
  "Perusahaan yang menggunakan AI untuk keputusan berisiko tinggi, seperti credit scoring, klaim asuransi, dan screening HR-tech",
  "Penyedia platform AI enterprise yang men-deploy solusi ke klien pemerintah maupun korporat",
]

const societyAudience = [
  "lembaga pemerintah",
  "lembaga donor demokrasi",
  "think tank",
  "universitas",
]

export default function ServicesPage() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-[#0B1220]">
      <PageGlow color="sky" />
      <Navbar />
      <main className="mx-auto max-w-7xl px-6 py-16 lg:px-10">
        <h1 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Our Services</h1>
        <p className="mt-3 max-w-2xl text-base leading-relaxed text-slate-400">
          Dua lini kerja dengan satu metode yang sama, yaitu riset berlandaskan psikometrik tentang
          bagaimana orang menilai, mempercayai, dan dibentuk oleh AI.
        </p>

        {/* Behavioral AI Data */}
        <section className="mt-16">
          <div className="flex flex-wrap items-center gap-3">
            <span className="inline-flex rounded-full bg-sky-500/10 px-3 py-1 text-xs font-medium text-sky-300">
              Untuk perusahaan
            </span>
            <h2 className="text-2xl font-semibold tracking-tight text-white">
              Behavioral AI Data
            </h2>
          </div>
          <p className="mt-4 max-w-3xl text-sm leading-relaxed text-slate-300">
            Kami mengukur bagaimana pengguna Anda benar-benar menilai, mempercayai, dan
            mengandalkan sistem AI Anda, bukan sekadar berapa banyak yang memakainya.
            Menggunakan instrumen yang berlandaskan psikometrik (Human Judgment Measurement), kami
            mengukur enam domain, yaitu Perceived AI Characteristics, Perceived Agency, Human Judgment,
            Emotional Response, Calibrated Trust, dan Behavioral Reliance.
          </p>

          <div className="mt-8 grid gap-6 lg:grid-cols-2">
            <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-6">
              <h3 className="text-sm font-semibold uppercase tracking-wide text-sky-300">
                Pertanyaan yang Kami Jawab
              </h3>
              <ul className="mt-3 list-none space-y-2 text-sm leading-relaxed text-slate-300">
                <li className="flex gap-2">
                  <span className="shrink-0 text-sky-400">•</span>
                  <span>Apakah pengguna Anda mempercayai AI pada tingkat yang tepat, atau justru terlalu percaya, atau terlalu skeptis?</span>
                </li>
                <li className="flex gap-2">
                  <span className="shrink-0 text-sky-400">•</span>
                  <span>Faktor psikologis apa yang mendorong pengguna sampai menggunakan AI Anda?</span>
                </li>
                <li className="flex gap-2">
                  <span className="shrink-0 text-sky-400">•</span>
                  <span>Bagaimana penilaian terhadap AI berbeda berdasarkan usia, identitas, atau karakteristik sosial lainnya?</span>
                </li>
              </ul>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-6">
              <h3 className="text-sm font-semibold uppercase tracking-wide text-sky-300">
                Cocok Untuk
              </h3>
              <ul className="mt-3 list-none space-y-2 text-sm leading-relaxed text-slate-300">
                {behavioralAudience.map((item) => (
                  <li key={item} className="flex gap-2">
                    <span className="shrink-0 text-sky-400">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-8">
            <h3 className="text-sm font-semibold uppercase tracking-wide text-sky-300">
              Alur Kerja
            </h3>
            <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
              {behavioralSteps.map((step, i) => (
                <div key={step.title} className="rounded-xl border border-white/10 bg-white/[0.02] p-4">
                  <span className="text-xs font-semibold text-sky-400">0{i + 1}</span>
                  <p className="mt-1 text-sm font-semibold text-white">{step.title}</p>
                  <p className="mt-1 text-xs leading-relaxed text-slate-400">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Society, Politics & AI Research */}
        <section className="mt-16 border-t border-white/10 pt-16">
          <div className="flex flex-wrap items-center gap-3">
            <span className="inline-flex rounded-full bg-violet-500/10 px-3 py-1 text-xs font-medium text-violet-300">
              Untuk institusi
            </span>
            <h2 className="text-2xl font-semibold tracking-tight text-white">
              Society, Politics &amp; AI Research
            </h2>
          </div>
          <p className="mt-4 max-w-3xl text-sm leading-relaxed text-slate-300">
            Riset akademik-terapan pada persinggungan masyarakat, politik, dan kecerdasan buatan
            di Indonesia, mencakup topik sosial (kepercayaan, kohesi sosial, identitas, perilaku
            kolektif) maupun politik (legitimasi institusi, polarisasi, opini publik, tata
            kelola) yang bersentuhan dengan isu AI. Instrumen dan desain riset disesuaikan per
            proyek sesuai kebutuhan klien, bukan satu instrumen tunggal untuk semua topik.
          </p>

          <div className="mt-8 grid gap-6 lg:grid-cols-2">
            <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-6">
              <h3 className="text-sm font-semibold uppercase tracking-wide text-violet-300">
                Pertanyaan yang Kami Jawab
              </h3>
              <ul className="mt-3 list-none space-y-2 text-sm leading-relaxed text-slate-300">
                <li className="flex gap-2">
                  <span className="shrink-0 text-violet-400">•</span>
                  <span>Bagaimana publik mempersepsikan kebijakan dan regulasi AI?</span>
                </li>
                <li className="flex gap-2">
                  <span className="shrink-0 text-violet-400">•</span>
                  <span>Apakah kehadiran AI memengaruhi kepercayaan terhadap institusi?</span>
                </li>
                <li className="flex gap-2">
                  <span className="shrink-0 text-violet-400">•</span>
                  <span>Bagaimana AI berperan dalam polarisasi dan kohesi sosial?</span>
                </li>
              </ul>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-6">
              <h3 className="text-sm font-semibold uppercase tracking-wide text-violet-300">
                Cocok Untuk
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-300">
                Lembaga pemerintah, lembaga donor demokrasi, think tank, dan universitas.
              </p>
            </div>
          </div>

          <div className="mt-8 rounded-2xl border border-white/10 bg-white/[0.02] p-6">
            <h3 className="text-sm font-semibold uppercase tracking-wide text-violet-300">
              Output
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-slate-300">
              Laporan kebijakan, policy brief, dan publikasi akademik. Contoh studi yang sedang
              berjalan:{" "}
              <span className="font-semibold text-white">&ldquo;When AI Enters Politics&rdquo;</span>
              , meneliti bagaimana kepercayaan publik, legitimasi institusi, dan polarisasi
              politik bergeser seiring masuknya kecerdasan buatan ke institusi politik Indonesia.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
