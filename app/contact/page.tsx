"use client"

import { useState } from "react"
import { Mail, ArrowUpRight } from "lucide-react"
import { Sidebar } from "@/components/sidebar"
import { Header } from "@/components/header"

const CONTACT_EMAIL = "info@sociaveraresearch.com"

export default function ContactPage() {
  const [name, setName] = useState("")
  const [subject, setSubject] = useState("")
  const [message, setMessage] = useState("")

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    const body = `Nama: ${name}\n\n${message}`
    const mailto = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(
      subject || "Diskusi Studi — SociaVera Research"
    )}&body=${encodeURIComponent(body)}`
    window.location.href = mailto
  }

  return (
    <div className="flex min-h-screen bg-zinc-950 text-zinc-100">
      <Sidebar />
      <div className="flex min-w-0 flex-1 flex-col">
        <Header />
        <main className="flex-1 px-5 py-6 sm:px-8">
          <div className="mx-auto max-w-xl">
            <h1 className="text-2xl font-semibold tracking-tight text-zinc-50">
              Diskusikan Studi Anda
            </h1>
            <p className="mt-2 text-sm leading-relaxed text-zinc-400">
              Ceritakan kebutuhan riset Anda — kami akan menghubungi Anda untuk sesi diskusi awal
              (30 menit) tanpa biaya.
            </p>
              <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="mt-4 inline-flex items-center gap-2 rounded-lg border border-white/10 bg-zinc-900/50 px-4 py-2 text-sm text-zinc-300 transition-colors hover:border-white/20 hover:text-white"
            >
              <Mail className="size-4 text-zinc-500" />
              {CONTACT_EMAIL}
            </a>

            <form
              onSubmit={handleSubmit}
              className="mt-6 space-y-4 rounded-xl border border-white/10 bg-zinc-900/50 p-5"
            >
              <div>
                <label htmlFor="name" className="text-xs font-medium text-zinc-400">
                  Nama
                </label>
                <input
                  id="name"
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="mt-1.5 w-full rounded-lg border border-white/10 bg-zinc-950/60 px-3 py-2 text-sm text-zinc-100 outline-none focus:border-indigo-400/50"
                  placeholder="Nama Anda"
                />
              </div>

              <div>
                <label htmlFor="subject" className="text-xs font-medium text-zinc-400">
                  Perihal
                </label>
                <input
                  id="subject"
                  type="text"
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  className="mt-1.5 w-full rounded-lg border border-white/10 bg-zinc-950/60 px-3 py-2 text-sm text-zinc-100 outline-none focus:border-indigo-400/50"
                  placeholder="mis. Studi Behavioral AI Data untuk perusahaan kami"
                />
              </div>

              <div>
                <label htmlFor="message" className="text-xs font-medium text-zinc-400">
                  Pesan
                </label>
                <textarea
                  id="message"
                  required
                  rows={5}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="mt-1.5 w-full resize-none rounded-lg border border-white/10 bg-zinc-950/60 px-3 py-2 text-sm text-zinc-100 outline-none focus:border-indigo-400/50"
                  placeholder="Ceritakan kebutuhan riset Anda..."
                />
              </div>

              <button
                type="submit"
                className="inline-flex items-center gap-1.5 rounded-lg bg-zinc-100 px-4 py-2 text-sm font-medium text-zinc-900 transition-colors hover:bg-white"
              >
                Kirim via Email
                <ArrowUpRight className="size-4" />
              </button>
              <p className="text-xs text-zinc-600">
                Tombol ini akan membuka aplikasi email Anda dengan pesan sudah terisi.
              </p>
            </form>
          </div>
        </main>
      </div>
    </div>
  )
}
