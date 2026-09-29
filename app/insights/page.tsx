"use client"

import { useState } from "react"
import { Plus, Minus } from "lucide-react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { PageGlow } from "@/components/page-glow"

const insights = [
  {
    hook: "Masalahnya bukan orang kurang percaya AI, tapi percayanya tidak pas",
    teaser:
      "Orang yang terlalu percaya pada AI bisa salah memakainya. Orang yang terlalu curiga bisa tidak memakainya sama sekali.",
    body: "Lee dan See (2004) menjelaskan bahwa kepercayaan yang berlebihan bisa membuat orang salah memakai sistem otomatis, sedangkan ketidakpercayaan bisa membuat orang tidak memakainya. Bayangkan satu staf yang menerima semua jawaban AI, termasuk yang keliru, dan rekannya yang mengabaikan semua saran AI, termasuk yang tepat. Keduanya sama-sama merugi. Yang meleset bukan AI-nya, melainkan takaran kepercayaannya. Kecocokan antara kepercayaan dan kemampuan sistem ini disebut kalibrasi kepercayaan. Karena itu, bertanya “apakah Anda percaya?” saja tidak cukup. Tanyakan juga apakah kepercayaan itu sesuai dengan seberapa bisa diandalkan AI-nya.",
    sources: [
      "Lee, J. D., & See, K. A. (2004). Trust in automation: Designing for appropriate reliance. Human Factors, 46(1), 50-80. https://doi.org/10.1518/hfes.46.1.50_30392",
    ],
  },
  {
    hook: "Begitu robot tampak mandiri, ia disalahkan nyaris sama seperti manusia",
    teaser:
      "Dalam riset Furlough dkk. (2021), robot yang tidak mandiri nyaris tidak disalahkan saat tugas gagal, tapi robot yang mandiri disalahkan nyaris sama seperti manusia.",
    body: "Peserta membaca skenario kerja sama manusia dan robot yang berakhir gagal, lalu membagi kesalahan di antara manusia, robot, dan keadaan. Para peneliti menyimpulkan bahwa orang memperlakukan mesin sebagai pelaku sosial sebagian, dan makin mandiri mesinnya, makin besar porsi kesalahannya. Artinya, AI yang tampak bisa memutuskan sendiri kemungkinan lebih cepat dipersalahkan saat gagal, dan itu perlu diperhitungkan sebelum AI diberi kendali lebih besar. Apakah pola yang sama berlaku pada pengguna AI di Indonesia, itu yang ingin kami ukur.",
    sources: [
      "Furlough, C., Stokes, T., & Gillan, D. J. (2021). Attributing blame to robots: I. The influence of robot autonomy. Human Factors, 63(4), 592-602. https://doi.org/10.1177/0018720819880641",
    ],
  },
  {
    hook: "AI yang tampak punya perasaan bisa terasa lebih mengganggu",
    teaser:
      "Gray dan Wegner (2012) menemukan bahwa mesin yang dianggap bisa merasakan lebih menyeramkan daripada mesin yang cuma pintar.",
    body: "Dalam eksperimen mereka, komputer yang digambarkan bisa merasakan lapar dan takut dinilai lebih menyeramkan daripada komputer yang hanya bisa bertindak. Ketidaknyamanan muncul dari kesan punya perasaan, bukan dari kepintaran. Temuan ini masih diperdebatkan (MacDorman, 2024). Jadi jangan menebak, tanyakan langsung ke pengguna Anda.",
    sources: [
      "Gray, K., & Wegner, D. M. (2012). Feeling robots and human zombies: Mind perception and the uncanny valley. Cognition, 125(1), 125-130. https://doi.org/10.1016/j.cognition.2012.06.007",
      "MacDorman, K. F. (2024). Does mind perception explain the uncanny valley effect? A meta-regression analysis and (de)humanization experiment. Computers in Human Behavior: Artificial Humans, 2(1), 100065. https://doi.org/10.1016/j.chbah.2024.100065",
    ],
  },
  {
    hook: "Pakai AI belum berarti percaya AI",
    teaser:
      "Studi AWS 2026 menemukan bahwa 40% bisnis di Indonesia sudah memakai AI, tapi sebagian besar pengguna masih di tahap coba-coba.",
    body: "Menurut studi AWS dan Strand Partners tahun 2026, 40% bisnis di Indonesia sudah memakai AI. Tapi di antara yang sudah memakai, 56% masih menjajaki atau bereksperimen, dan hanya 12% yang menjadikan AI bagian inti dari strategi bisnisnya. Perlu dicatat, studi itu mengukur seberapa jauh AI dipakai, bukan seberapa orang mempercayainya. Justru di situ celahnya. Angka pemakaian tidak menjawab apakah karyawan dan pelanggan percaya pada hasil AI itu dengan takaran yang pas. Itu yang perlu ditanyakan langsung.",
    sources: [
      "Amazon Web Services. (2026, 6 Agustus). Indonesia's next wave of AI is taking shape [ringkasan studi Unlocking Indonesia's AI Potential 2026, dilakukan oleh Strand Partners]. https://www.aboutamazon.sg/news/aws/indonesias-next-wave-of-ai-is-taking-shape",
    ],
  },
  {
    hook: "Saat chatbot gagal, kepercayaan turun dan emosi ikut muncul",
    teaser:
      "Setelah chatbot gagal, pengguna melaporkan marah, frustrasi, merasa dikhianati, dan pasrah. Kepercayaan mereka pun ikut turun.",
    body: "Dua studi tahun 2024 tentang chatbot layanan pelanggan saling melengkapi. Dalam studi kualitatifnya, Zhang, Liang, dan Wu menemukan bahwa saat chatbot gagal, pengguna merasa marah, frustrasi, dikhianati, dan pasrah. Cara mereka menyikapinya pun berbeda. Ada yang mencari dukungan, mencoba menyelesaikan sendiri, menerima keadaan, atau menyerah. Lewat eksperimen, Følstad, Law, dan van As menemukan bahwa percakapan yang gagal menurunkan emosi sekaligus kepercayaan pengguna, dan keduanya cenderung pulih setelah tugas berikutnya berhasil.",
    sources: [
      "Zhang, R. W., Liang, X., & Wu, S.-H. (2024). When chatbots fail: Exploring user coping following a chatbots-induced service failure. Information Technology & People, 37(8), 175-195. https://doi.org/10.1108/ITP-08-2023-0745",
      "Følstad, A., Law, E. L.-C., & van As, N. (2024). Conversational breakdown in a customer service chatbot: Impact of task order and criticality on user trust and emotion. ACM Transactions on Computer-Human Interaction, 31(5), 1-52. https://doi.org/10.1145/3690383",
    ],
  },
  {
    hook: "Tahu skornya saja belum cukup, Anda perlu tahu alasannya",
    teaser:
      "Sebuah bank bertanya ke nasabah, “seberapa percaya Anda pada chatbot kami?” Hasilnya rata-rata 4 dari 5. Lalu apa yang bisa dilakukan bank dari angka itu?",
    body: "Hampir tidak ada. Bank tidak tahu kenapa nasabah memberi 4, dan tidak tahu apa yang perlu diperbaiki kalau suatu hari ada nasabah yang kecewa. Solusinya, tanyakan juga tiga hal, yaitu apakah chatbot dianggap paham urusan nasabah, apakah jawabannya bisa dipegang, dan apakah ia dianggap peduli pada kepentingan nasabah. Hasilnya bisa seperti ini. Nasabah menilai chatbot paham dan bisa dipegang, tapi kurang terasa peduli. Dari situ bank tahu apa yang perlu dibenahi.",
    sources: [
      "Mayer, R. C., Davis, J. H., & Schoorman, F. D. (1995). An integrative model of organizational trust. Academy of Management Review, 20(3), 709-734.",
    ],
  },
]

function InsightCard({ insight }: { insight: (typeof insights)[number] }) {
  const [open, setOpen] = useState(false)

  return (
    <div className="rounded-2xl border border-white/10 bg-[#0F1B30] p-6 transition-colors hover:border-white/20">
      <h3 className="text-lg font-semibold leading-snug text-white">{insight.hook}</h3>
      <p className="mt-2 text-sm leading-relaxed text-slate-400">{insight.teaser}</p>

      {open && (
        <p className="mt-4 border-t border-white/5 pt-4 text-sm leading-relaxed text-slate-300">
          {insight.body}
        </p>
      )}

      {open && insight.sources && (
        <div className="mt-3 rounded-lg bg-white/[0.03] p-3">
          <p className="text-[11px] font-medium uppercase tracking-wide text-slate-500">Sumber</p>
          <ul className="mt-1.5 list-none space-y-1.5">
            {insight.sources.map((src) => (
              <li key={src} className="text-xs leading-relaxed text-slate-400">
                {src}
              </li>
            ))}
          </ul>
        </div>
      )}

      <button
        onClick={() => setOpen(!open)}
        className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-sky-300 transition-colors hover:text-sky-200"
      >
        {open ? (
          <>
            Tampilkan lebih sedikit <Minus className="size-3.5" />
          </>
        ) : (
          <>
            Pelajari lebih lanjut <Plus className="size-3.5" />
          </>
        )}
      </button>
    </div>
  )
}

export default function InsightsPage() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-[#0B1220]">
      <PageGlow color="violet" />
      <Navbar />
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-10">
        <p className="text-xs font-medium uppercase tracking-wide text-sky-300">
          SociaVera Insights
        </p>
        <h1 className="mt-2 max-w-2xl text-3xl font-bold tracking-tight text-white sm:text-4xl">
          Sepintar apa pun AI, manusialah yang menilainya.
        </h1>
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-slate-400">
          Wawasan singkat berbasis bukti tentang bagaimana orang mempersepsikan, mempercayai, dan
          mengandalkan sistem AI, bersumber dari psikologi, ilmu perilaku, dan riset kami
          sendiri.
        </p>

        <div className="mt-12 grid gap-5 sm:grid-cols-2">
          {insights.map((insight) => (
            <InsightCard key={insight.hook} insight={insight} />
          ))}
        </div>
      </div>
      <Footer />
    </div>
  )
}
