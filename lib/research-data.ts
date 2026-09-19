export type Publication = {
  id: string
  title: string
  abstract: string
  year: number
  tags: string[]
  authors: string
}

export const publications: Publication[] = []

export const stats = [
  { label: "Total Publikasi", value: "0", change: "Belum ada publikasi" },
  { label: "Pra-registrasi", value: "3", change: "AsPredicted / OSF" },
  { label: "Policy Brief", value: "0", change: "Belum ada brief" },
  { label: "Dataset Aktif", value: "0", change: "Belum ada dataset" },
]

export const divisions = [
  {
    name: "Behavioral AI Data",
    description:
      "Evaluasi penelitian, pembangunan aset dataset, dan pengembangan benchmark independen bagi sistem AI di Indonesia — berdasarkan bukti terukur tentang bagaimana manusia menilai, mempercayai, dan mengandalkan AI.",
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
