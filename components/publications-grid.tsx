import { ArrowUpRight } from "lucide-react"
import { publications, type Publication } from "@/lib/research-data"

function PublicationCard({ pub }: { pub: Publication }) {
  return (
    <article className="group flex flex-col justify-between rounded-xl border border-white/10 bg-zinc-900/50 p-5 transition-colors hover:border-white/20 hover:bg-zinc-900/80">
      <h3 className="text-pretty text-base font-semibold leading-snug text-zinc-100">
        {pub.title}
      </h3>
      <div className="mt-4 flex items-center justify-between border-t border-white/5 pt-4">
        <div className="min-w-0 text-xs text-zinc-500">
          <span className="truncate">{pub.authors}</span>
          <span className="mx-1.5">·</span>
          <span>{pub.year ?? pub.status}</span>
        </div>
        <a
          href={pub.url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex shrink-0 items-center gap-1 text-sm font-medium text-zinc-300 transition-colors hover:text-white"
        >
          {pub.year ? "View Research" : "Ikut Survei"}
          <ArrowUpRight className="size-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </a>
      </div>
    </article>
  )
}

export function PublicationsGrid() {
  return (
    <section id="publications" className="scroll-mt-6">
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
