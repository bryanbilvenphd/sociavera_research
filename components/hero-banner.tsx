import { ArrowUpRight } from "lucide-react"

const focusAreas = ["Behavioral AI Data", "Calibrated Trust", "AI Trust Research"]

export function HeroBanner() {
  return (
    <section className="relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-zinc-900 via-zinc-900 to-indigo-950/50 p-6 sm:p-8">
      <div
        className="pointer-events-none absolute -right-20 -top-24 size-72 rounded-full bg-indigo-500/20 blur-3xl"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -bottom-28 left-10 size-72 rounded-full bg-violet-600/10 blur-3xl"
        aria-hidden="true"
      />
      <div className="relative max-w-2xl">
        <span className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-zinc-300">
          SociaVera Research
        </span>
        <h1 className="mt-4 text-balance text-2xl font-semibold tracking-tight text-zinc-50 sm:text-3xl">
          Apakah pengguna Anda benar-benar mempercayai AI Anda — atau sekadar terpaksa memakainya?
        </h1>
        <p className="mt-3 text-pretty text-sm leading-relaxed text-zinc-400 sm:text-base">
          Kami mengukur kalibrasi kepercayaan pengguna Indonesia terhadap sistem AI Anda — bukan
          skor kepuasan biasa, tapi bukti psikometrik tervalidasi tentang kapan pengguna terlalu
          percaya, dan kapan mereka tidak percaya sama sekali.
        </p>
        <div className="mt-5 flex flex-wrap items-center gap-2">
          {focusAreas.map((area) => (
            <span
              key={area}
              className="rounded-full border border-white/10 bg-zinc-950/40 px-3 py-1 text-xs text-zinc-300"
            >
              {area}
            </span>
          ))}
        </div>
        <a
          href="#contact"
          className="mt-6 inline-flex items-center gap-1.5 rounded-lg bg-zinc-100 px-4 py-2 text-sm font-medium text-zinc-900 transition-colors hover:bg-white"
        >
          Diskusikan Studi Anda
          <ArrowUpRight className="size-4" />
        </a>
      </div>
    </section>
  )
}
