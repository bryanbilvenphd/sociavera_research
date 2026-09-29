function MiniNetwork() {
  return (
    <svg viewBox="0 0 300 160" className="absolute inset-0 h-full w-full opacity-30" aria-hidden="true">
      <line x1="30" y1="120" x2="120" y2="60" stroke="#38BDF8" strokeOpacity="0.4" strokeWidth="1" />
      <line x1="120" y1="60" x2="220" y2="100" stroke="#38BDF8" strokeOpacity="0.4" strokeWidth="1" />
      <line x1="220" y1="100" x2="270" y2="40" stroke="#38BDF8" strokeOpacity="0.4" strokeWidth="1" />
      <circle cx="30" cy="120" r="3" fill="#38BDF8" />
      <circle cx="120" cy="60" r="4" fill="#38BDF8" />
      <circle cx="220" cy="100" r="3" fill="#1E3A5F" stroke="#38BDF8" />
      <circle cx="270" cy="40" r="4" fill="#38BDF8" />
    </svg>
  )
}

const ongoingStudies = [
  {
    title: "When AI Enters Politics",
    description:
      "Studi riset yang sedang berjalan, meneliti bagaimana kepercayaan publik, legitimasi institusi, dan polarisasi politik bergeser seiring masuknya kecerdasan buatan ke institusi politik Indonesia.",
    surveyUrl:
      "https://docs.google.com/forms/d/e/1FAIpQLSfa_Pd2Qjmd3xYDVMHlzYmV0Z53vyEFvisxCvvJ9QXW36YGug/viewform?usp=dialog",
  },
  {
    title: "How Humans Judge Frontier AI",
    description:
      "Studi riset akademik yang sedang berjalan, meneliti bagaimana masyarakat Indonesia menilai karakteristik, kepercayaan, dan keandalan sistem frontier AI. Studi ini dirancang untuk berkelanjutan dari tahun ke tahun, mengikuti perkembangan model AI terbaru.",
    surveyUrl:
      "https://docs.google.com/forms/d/e/1FAIpQLSfVnnxuj0MQZALbEmozXkK81wCTluhufjHxWbXBzkb05w-4Fw/viewform?usp=dialog",
  },
]

export function ApproachFeatured() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-16 lg:px-10">
      <div className="grid gap-6 lg:grid-cols-3">
        <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
          <h2 className="text-2xl font-semibold tracking-tight text-slate-900">Our Approach</h2>
          <p className="mt-3 text-pretty text-sm leading-relaxed text-slate-600">
            Kami mempelajari bagaimana orang benar-benar berpikir dan merasa tentang AI, bukan
            sekadar apakah mereka menggunakannya. Melalui survei yang dirancang secara cermat dan
            berlandaskan psikologi, kami mencari tahu apakah orang mempercayai AI, memahami cara
            kerjanya, dan merasa aman mengandalkannya. Hasilnya adalah bukti nyata yang bisa Anda
            gunakan untuk mengambil keputusan yang lebih baik, bukan sekadar tebakan.
          </p>
        </div>

        {ongoingStudies.map((study) => (
          <div
            key={study.title}
            className="relative flex flex-col overflow-hidden rounded-2xl bg-[#0F1B30] p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl sm:p-8"
          >
            <MiniNetwork />
            <div className="relative flex flex-1 flex-col">
              <p className="text-xs font-medium uppercase tracking-wide text-sky-300">
                Ongoing Research
              </p>
              <h2 className="mt-2 text-xl font-semibold leading-snug tracking-tight text-white">
                {study.title}
              </h2>
              <p className="mt-3 text-pretty text-sm leading-relaxed text-slate-300">
                {study.description}
              </p>
              <a
                href={study.surveyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex w-fit items-center gap-1.5 rounded-lg border border-sky-400/40 px-4 py-2 text-xs font-medium text-sky-300 transition-colors hover:bg-sky-400/10 hover:text-sky-200"
              >
                Ikut Isi Survei Ini →
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
