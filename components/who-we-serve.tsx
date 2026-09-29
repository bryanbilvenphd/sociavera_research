"use client"

import { useState } from "react"

const personas = [
  {
    label: "Perusahaan Chatbot & Asisten AI",
    sub: "Bank, fintech, e-commerce, telko, startup AI lokal",
    pain: "Pelanggan Anda memakai chatbot, tapi Anda tidak benar-benar tahu apakah mereka mempercayainya.",
    solution:
      "Kami mengukur calibrated trust dan reliance secara langsung, sehingga Anda tahu apakah pengguna terlalu mengandalkan AI Anda, mengabaikannya sama sekali, atau mempercayainya dengan tepat.",
  },
  {
    label: "Perusahaan dengan Keputusan Berisiko Tinggi",
    sub: "Credit scoring, AI klaim asuransi, penyaringan HR-tech",
    pain: "Keputusan AI Anda memengaruhi hidup orang, tapi Anda tidak bisa membuktikan pengguna menganggapnya adil.",
    solution:
      "Kami mengukur perceived fairness, legitimacy, dan perceived risk dengan metode pengukuran psikologi, menghasilkan bukti yang bisa dipaparkan kepada regulator dan pemangku kepentingan.",
  },
  {
    label: "Penyedia Platform AI Enterprise",
    sub: "Platform yang men-deploy AI ke klien pemerintah & korporat",
    pain: "Klien memakai platform AI Anda, tapi Anda belum tahu apa yang dirasakan pengguna akhirnya.",
    solution:
      "Kami bertanya langsung ke pengguna akhir di Indonesia. Hasilnya bisa Anda tunjukkan kepada klien yang bertanya apakah AI ini dipercaya dan dipakai oleh pengguna mereka.",
  },
  {
    label: "Pemerintah, Donor & Universitas",
    sub: "Donor demokrasi, think tank, institusi kebijakan",
    pain: "AI sedang membentuk ulang kepercayaan publik dan kehidupan politik, tapi keputusan diambil tanpa bukti empiris.",
    solution:
      "Kami menjalankan riset terapan yang berlandaskan psikometrik, sehingga keputusan kebijakan dan institusional berlandaskan data nyata, bukan asumsi.",
  },
]

export function WhoWeServe() {
  const [active, setActive] = useState(0)
  const current = personas[active]

  return (
    <section id="who-we-serve" className="scroll-mt-20 bg-[#0B1220] py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <h2 className="text-2xl font-semibold tracking-tight text-white">Who We Work With</h2>

        <div className="mt-10 grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="space-y-2">
            {personas.map((p, i) => (
              <button
                key={p.label}
                onClick={() => setActive(i)}
                className={`w-full rounded-xl border px-5 py-4 text-left transition-colors ${
                  i === active
                    ? "border-sky-400/50 bg-sky-400/10"
                    : "border-white/10 bg-white/[0.02] hover:border-white/20 hover:bg-white/[0.04]"
                }`}
              >
                <p
                  className={`text-sm font-semibold ${i === active ? "text-white" : "text-slate-300"}`}
                >
                  {p.label}
                </p>
                <p className="mt-1 text-xs text-slate-500">{p.sub}</p>
              </button>
            ))}
          </div>

          <div
            key={active}
            className="reveal-in rounded-2xl border border-white/10 bg-[#0F1B30] p-8"
          >
            <p className="text-xs font-medium uppercase tracking-wide text-rose-300">The Pain</p>
            <p className="mt-2 text-lg font-medium leading-snug text-white">{current.pain}</p>

            <p className="mt-6 text-xs font-medium uppercase tracking-wide text-sky-300">
              The SociaVera Approach
            </p>
            <p className="mt-2 text-sm leading-relaxed text-slate-300">{current.solution}</p>
          </div>
        </div>
      </div>
    </section>
  )
}
