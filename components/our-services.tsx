const services = [
  {
    name: "Behavioral AI Data",
    tag: "Untuk perusahaan",
    description:
      "Kami mengukur bagaimana pengguna Anda mempercayai, menilai, dan mengandalkan sistem AI Anda — chatbot, mesin rekomendasi, model scoring, dan platform AI enterprise. Instrumen berlandaskan psikometrik, bukan tebakan.",
  },
  {
    name: "Society, Politics & AI Research",
    tag: "Untuk institusi",
    description:
      "Riset terapan tentang bagaimana kecerdasan buatan membentuk ulang kepercayaan publik, legitimasi institusi, dan kehidupan politik — untuk pemerintah, donor demokrasi, think tank, dan universitas.",
  },
]

export function OurServices() {
  return (
    <section id="services" className="scroll-mt-20 bg-slate-50 py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <h2 className="text-2xl font-semibold tracking-tight text-slate-900">Our Services</h2>
        <p className="mt-2 max-w-2xl text-sm leading-relaxed text-slate-600">
          Dua lini kerja, satu metode yang sama: riset berlandaskan psikometrik tentang
          bagaimana orang menilai, mempercayai, dan dibentuk oleh AI.
        </p>

        <div className="mt-8 grid gap-6 sm:grid-cols-2">
          {services.map((s) => (
            <div
              key={s.name}
              className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              <span className="inline-flex rounded-full bg-sky-50 px-3 py-1 text-xs font-medium text-sky-700">
                {s.tag}
              </span>
              <h3 className="mt-4 text-xl font-semibold tracking-tight text-slate-900">
                {s.name}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-600">{s.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
