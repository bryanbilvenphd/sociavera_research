"use client"

import { useState } from "react"
import { Mail, MapPin, ArrowUpRight, CheckCircle2 } from "lucide-react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { PageGlow } from "@/components/page-glow"

const CONTACT_EMAIL = "info@sociaveraresearch.com"

export default function ContactPage() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [subject, setSubject] = useState("")
  const [message, setMessage] = useState("")
  const [sent, setSent] = useState(false)

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    const body = `Nama: ${name}\nEmail: ${email}\n\n${message}`
    const mailto = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(
      subject || "Diskusi Studi SociaVera Research"
    )}&body=${encodeURIComponent(body)}`
    window.location.href = mailto
    setSent(true)
  }

  return (
    <div className="relative min-h-screen overflow-hidden bg-[#0B1220]">
      <PageGlow color="rose" />
      <Navbar />
      <main className="mx-auto max-w-6xl px-6 py-16 lg:px-10">
        <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr]">
          {/* Left: context panel */}
          <div>
            <p className="text-xs font-medium uppercase tracking-wide text-sky-300">
              Hubungi Kami
            </p>
            <h1 className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Diskusikan Studi Anda
            </h1>
            <p className="mt-4 text-sm leading-relaxed text-slate-400">
              Ceritakan kebutuhan riset Anda melalui formulir di samping. Kami akan menghubungi
              Anda kembali untuk sesi diskusi awal (30 menit) tanpa biaya, guna merumuskan
              pertanyaan riset dan populasi target yang tepat.
            </p>

            <div className="mt-8 space-y-4">
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.02] p-4 transition-colors hover:border-white/20 hover:bg-white/[0.04]"
              >
                <span className="flex size-10 shrink-0 items-center justify-center rounded-full bg-sky-400/10">
                  <Mail className="size-4 text-sky-300" />
                </span>
                <div className="min-w-0">
                  <p className="text-xs text-slate-500">Email</p>
                  <p className="text-sm font-medium text-white">{CONTACT_EMAIL}</p>
                </div>
              </a>

              <div className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.02] p-4">
                <span className="flex size-10 shrink-0 items-center justify-center rounded-full bg-sky-400/10">
                  <MapPin className="size-4 text-sky-300" />
                </span>
                <div className="min-w-0">
                  <p className="text-xs text-slate-500">Office</p>
                  <p className="text-sm font-medium text-white">
                    The Grandis No. 17, Royal Sumatra, Medan 20128, North Sumatra, Indonesia
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right: form panel */}
          <div className="rounded-2xl border border-white/10 bg-[#0F1B30] p-6 sm:p-8">
            {sent ? (
              <div className="flex flex-col items-center justify-center py-12 text-center">
                <CheckCircle2 className="size-12 text-sky-400" />
                <p className="mt-4 text-lg font-semibold text-white">Aplikasi email Anda telah dibuka</p>
                <p className="mt-2 max-w-sm text-sm leading-relaxed text-slate-400">
                  Pesan Anda sudah terisi otomatis di aplikasi email default Anda. Silakan tinjau
                  dan kirim dari sana ke {CONTACT_EMAIL}.
                </p>
                <button
                  onClick={() => setSent(false)}
                  className="mt-6 text-sm font-medium text-sky-300 hover:text-sky-200"
                >
                  ← Kembali ke formulir
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label htmlFor="name" className="text-xs font-medium text-slate-400">
                      Nama Lengkap
                    </label>
                    <input
                      id="name"
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="mt-1.5 w-full rounded-lg border border-white/10 bg-[#0B1220] px-3 py-2.5 text-sm text-white outline-none transition-colors focus:border-sky-400/50"
                      placeholder="Nama Anda"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="text-xs font-medium text-slate-400">
                      Alamat Email
                    </label>
                    <input
                      id="email"
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="mt-1.5 w-full rounded-lg border border-white/10 bg-[#0B1220] px-3 py-2.5 text-sm text-white outline-none transition-colors focus:border-sky-400/50"
                      placeholder="nama@perusahaan.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="text-xs font-medium text-slate-400">
                    Perihal
                  </label>
                  <input
                    id="subject"
                    type="text"
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    className="mt-1.5 w-full rounded-lg border border-white/10 bg-[#0B1220] px-3 py-2.5 text-sm text-white outline-none transition-colors focus:border-sky-400/50"
                    placeholder="mis. Studi Behavioral AI Data untuk perusahaan kami"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="text-xs font-medium text-slate-400">
                    Pertanyaan / Kebutuhan Riset
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={6}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="mt-1.5 w-full resize-none rounded-lg border border-white/10 bg-[#0B1220] px-3 py-2.5 text-sm text-white outline-none transition-colors focus:border-sky-400/50"
                    placeholder="Ceritakan kebutuhan riset Anda, produk AI yang ingin dievaluasi, populasi pengguna, atau pertanyaan spesifik yang ingin dijawab..."
                  />
                </div>

                <button
                  type="submit"
                  className="inline-flex w-full items-center justify-center gap-1.5 rounded-lg bg-sky-500 px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-sky-400 sm:w-auto"
                >
                  Kirim Pesan
                  <ArrowUpRight className="size-4" />
                </button>
              </form>
            )}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
