export type Publication = {
  id: string
  title: string
  year: number | null
  status?: string
  authors: string
  url: string
}

export const publications: Publication[] = [
  {
    id: "bilven-2022-exclusive-victimhood",
    title:
      "Exclusive victimhood, higher ethnic and lower national identities predict less support for reconciliation among native and Chinese Indonesians through mutual prejudice",
    year: 2022,
    authors: "Bilven, B., Nyúl, B., & Kende, A.",
    url: "https://www.sciencedirect.com/science/article/pii/S0147176722001316",
  },
  {
    id: "bilven-2024-acknowledgement-victimhood",
    title:
      "Perception of perpetrators' acknowledgement of victimhood increases rather than decreases support for reconciliation with another victim group",
    year: 2024,
    authors: "Bilven, B., Sam Nariman, H., & Kende, A.",
    url: "https://www.tandfonline.com/doi/abs/10.1080/17467586.2024.2407924",
  },
  {
    id: "bilven-2024-comparative-victimhood",
    title:
      "Past, present and future: Colonial comparative victimhood hinders reconciliation with Chinese Indonesians through prejudice among natives",
    year: 2024,
    authors: "Bilven, B., Sam Nariman, H., & Kende, A.",
    url: "https://onlinelibrary.wiley.com/doi/pdf/10.1111/ajsp.12643",
  },
  {
    id: "how-humans-judge-frontier-ai",
    title: "How Humans Judge Frontier AI",
    year: null,
    status: "Sedang berjalan",
    authors: "Bilven, B.",
    url: "https://docs.google.com/forms/d/e/1FAIpQLSfVnnxuj0MQZALbEmozXkK81wCTluhufjHxWbXBzkb05w-4Fw/viewform?usp=dialog",
  },
  {
    id: "when-ai-enters-politics",
    title: "When AI Enters Politics",
    year: null,
    status: "Sedang berjalan",
    authors: "Bilven, B.",
    url: "https://docs.google.com/forms/d/e/1FAIpQLSfa_Pd2Qjmd3xYDVMHlzYmV0Z53vyEFvisxCvvJ9QXW36YGug/viewform?usp=dialog",
  },
]

export const stats = [
  { label: "Kredensial", value: "Ph.D.", change: "Psikologi Sosial, ELTE Budapest" },
  { label: "Publikasi", value: "3", change: "Jurnal internasional Q1/Q2" },
  { label: "Metodologi", value: "CFA · SEM", change: "Validitas & reliabilitas tervalidasi" },
  { label: "Fokus Riset", value: "6 Domain", change: "Konstruk psikometrik tervalidasi" },
]

export const divisions = [
  {
    name: "Behavioral AI Data",
    description:
      "Jasa riset yang secara ilmiah mengukur bagaimana manusia menilai, mempercayai, dan mengandalkan sistem AI tertentu.",
  },
  {
    name: "Society & Politics Research on AI",
    description:
      "Riset terapan mengenai bagaimana masyarakat dan sistem politik Indonesia merespons AI: kepercayaan publik, legitimasi institusi, polarisasi, serta tata kelola AI.",
  },
]

export const team = [
  {
    name: "Bryan Bilven, PhD",
    role: "Founder & Principal Researcher",
    detail: "PhD Psikologi Sosial — Eötvös Loránd University, Budapest, Hungaria.",
    initials: "BB",
  },
  {
    name: "Samuel Roniver",
    role: "Founder & Researcher",
    detail: "MA (Candidate) Psikologi — HSE University, Moscow, Rusia.",
    initials: "SR",
  },
]
