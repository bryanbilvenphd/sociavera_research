export type Publication = {
  id: string
  title: string
  abstract: string
  year: number
  tags: string[]
  authors: string
  url: string
}

export const publications: Publication[] = [
  {
    id: "bilven-2022-exclusive-victimhood",
    title:
      "Exclusive victimhood, higher ethnic and lower national identities predict less support for reconciliation among native and Chinese Indonesians through mutual prejudice",
    abstract:
      "Studi survei daring (N=656) pada masyarakat native dan Tionghoa Indonesia. Menggunakan structural equation modeling, penelitian ini menunjukkan bahwa keyakinan viktimisasi eksklusif dan identitas etnis memprediksi prasangka yang lebih tinggi, sementara identitas nasional Indonesia memprediksi prasangka yang lebih rendah — yang pada gilirannya memprediksi dukungan rekonsiliasi antar kelompok.",
    year: 2022,
    tags: ["Social Psychology", "Intergroup Relations", "SEM", "Indonesia"],
    authors: "Bilven, B., Nyúl, B., & Kende, A.",
    url: "https://www.sciencedirect.com/science/article/pii/S0147176722001316",
  },
  {
    id: "bilven-2024-acknowledgement-victimhood",
    title:
      "Perception of perpetrators' acknowledgement of victimhood increases rather than decreases support for reconciliation with another victim group",
    abstract:
      "Studi survei (N=333) pada native Indonesia menguji apakah persepsi pengakuan viktimisasi oleh pelaku (Belanda) dan kelompok korban lain (Tionghoa Indonesia) memprediksi dukungan rekonsiliasi. Hasilnya berlawanan dengan ekspektasi: pengakuan viktimisasi oleh pelaku justru terkait dengan prasangka yang lebih tinggi, yang kemudian menurunkan dukungan rekonsiliasi.",
    year: 2024,
    tags: ["Social Psychology", "Post-colonialism", "Reconciliation", "Indonesia"],
    authors: "Bilven, B., Sam Nariman, H., & Kende, A.",
    url: "https://www.tandfonline.com/doi/abs/10.1080/17467586.2024.2407924",
  },
  {
    id: "bilven-2024-comparative-victimhood",
    title:
      "Past, present and future: Colonial comparative victimhood hinders reconciliation with Chinese Indonesians through prejudice among natives",
    abstract:
      "Dua studi (survei N=333 dan eksperimen N=300) menguji dampak keyakinan viktimisasi komparatif kolonial terhadap dukungan rekonsiliasi dengan Tionghoa Indonesia. Ditemukan hubungan tidak langsung melalui keyakinan viktimisasi eksklusif dan prasangka dalam model mediasi serial — dikonfirmasi secara eksperimental pada Studi 2.",
    year: 2024,
    tags: ["Social Psychology", "Experimental Design", "Post-colonialism", "Indonesia"],
    authors: "Bilven, B., Sam Nariman, H., & Kende, A.",
    url: "https://onlinelibrary.wiley.com/doi/pdf/10.1111/ajsp.12643",
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
