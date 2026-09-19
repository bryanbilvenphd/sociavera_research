export type Publication = {
  id: string
  title: string
  abstract: string
  year: number
  tags: string[]
  authors: string
}

export const publications: Publication[] = [
  {
    id: "1",
    title: "Instrumen Kepercayaan Publik terhadap AI di Indonesia (IKAP-AI)",
    abstract:
      "Pengembangan dan validasi skala psikologis untuk mengukur kepercayaan masyarakat Indonesia terhadap sistem AI, dikalibrasi pada sampel responden nasional yang representatif.",
    year: 2026,
    tags: ["Behavioral AI Data", "Pre-registered"],
    authors: "Bilven, Roniver",
  },
  {
    id: "2",
    title: "Legitimasi Institusi dan Tata Kelola AI di Sektor Publik",
    abstract:
      "Kajian terapan tentang bagaimana legitimasi institusi memengaruhi penerimaan kebijakan AI, berdasarkan wawancara lintas lembaga pemerintah di Indonesia.",
    year: 2025,
    tags: ["Society & Politics", "Policy"],
    authors: "Bilven, Roniver",
  },
  {
    id: "3",
    title: "Bagaimana Manusia Menilai dan Mengandalkan Sistem AI Tertentu",
    abstract:
      "Studi eksperimental mengenai penilaian, kepercayaan, dan ketergantungan pengguna terhadap keluaran AI, sebagai dasar benchmark independen untuk sistem AI di Indonesia.",
    year: 2026,
    tags: ["Behavioral AI Data", "Pre-registered"],
    authors: "Roniver, Bilven",
  },
  {
    id: "4",
    title: "Polarisasi Publik dalam Wacana Kecerdasan Buatan",
    abstract:
      "Analisis bagaimana sistem politik dan masyarakat Indonesia merespons AI, termasuk dinamika polarisasi opini dan pembentukan sikap terhadap regulasi.",
    year: 2025,
    tags: ["Society & Politics", "Social Psychology"],
    authors: "Bilven, Roniver",
  },
  {
    id: "5",
    title: "Framing Kebijakan dan Dukungan Publik terhadap Regulasi AI",
    abstract:
      "Eksperimen survei nasional yang mengungkap bagaimana efek framing menggeser dukungan terhadap regulasi AI di berbagai kelompok demografis Indonesia.",
    year: 2024,
    tags: ["Society & Politics", "Policy", "Pre-registered"],
    authors: "Roniver, Bilven",
  },
  {
    id: "6",
    title: "Membangun Benchmark Independen untuk Sistem AI Indonesia",
    abstract:
      "Kerangka evaluasi dan aset dataset berbasis bukti terukur untuk menilai keandalan sistem AI dalam konteks bahasa dan budaya Indonesia.",
    year: 2026,
    tags: ["Behavioral AI Data", "AI Governance"],
    authors: "Bilven, Roniver",
  },
]

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
