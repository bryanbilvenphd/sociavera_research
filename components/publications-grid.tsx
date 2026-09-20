import { ArrowUpRight } from "lucide-react"
import { publications, type Publication } from "@/lib/research-data"

const tagStyles: Record<string, string> = {
  "AI Governance": "border-indigo-500/30 bg-indigo-500/10 text-indigo-300",
  "Social Psychology": "border-emerald-500/30 bg-emerald-500/10 text-emerald-300",
  "Pre-registered": "border-amber-500/30 bg-amber-500/10 text-amber-300",
  "Frontier AI": "border-violet-500/30 bg-violet-500/10 text-violet-300",
  Policy: "border-sky-500/30 bg-sky-500/10 text-sky-300",
}

function tagClass(tag: string) {
  return tagStyles[tag] ?? "border-white/10 bg-white/5 text-zinc-300"
}

function PublicationCard({ pub }: { pub: Publication }) {
  return (
    <article className="group flex flex-col rounded-xl border border-white/10 bg-zinc-900/50 p-5 transition-colors hover:border-white/20 hover:bg-zinc-900/80">
      <div className="flex flex-wrap items-center gap-1.5">
        {pub.tags.map((tag) => (
          <span
            key={tag}
            className={`rounded-full border px-2.5 py-0.5 text-xs font-medium ${tagClass(tag)}`}
          >
            {tag}
          </span>
        ))}
      </div>
      <h3 className="mt-3 text-pretty text-base font-semibold leading-snug text-zinc-100">
        {pub.title}
      </h3>
      <p className="mt-2 flex-1 text-sm leading-relaxed text-zinc-400">{pub.abstract}</p>
      <div className="mt-4 flex items-center justify-between border-t border-white/5 pt-4">
        <div className="min-w-0 text-xs text-zinc-500">
          <span className="truncate">{pub.authors}</span>
          <span className="mx-1.5">·</span>
          <span>{pub.year}</span>
        </div>
        
          href={pub.url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex shrink-0 items-center gap-1 text-sm font-medium text-zinc-300 transition-colors hover:text-white"
        >
          View Research
          <ArrowUpRight className="size-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </a>
      </div>
    </article>
  )
}

export function PublicationsGrid() {
  return (
    <section id="publications" className="scroll-mt-6">
      <div className="mb-4 flex items-center justify-between">
        <h2 className="text-lg font-semibold tracking-tight text-zinc-100">
          Research Publications
        </h2>
      </div>
      {publications.length === 0 ? (
        <div className="flex flex-col items-center justify-center rounded-xl border border-dashed border-white/10 bg-zinc-900/40 px-6 py-16 text-center">
          <p className="text-sm font-medium text-zinc-300">Belum ada publikasi riset</p>
          <p className="mt-1 max-w-sm text-sm text-zinc-500">
            Publikasi riset akan ditampilkan di sini setelah tersedia.
          </p>
        </div>
      ) : (
        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
          {publications.map((pub) => (
            <PublicationCard key={pub.id} pub={pub} />
          ))}
        </div>
      )}
    </section>
  )
}
