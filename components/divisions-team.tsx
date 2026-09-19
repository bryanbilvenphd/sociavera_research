import { Mail, MapPin } from "lucide-react"
import { divisions, team } from "@/lib/research-data"

export function DivisionsTeam() {
  return (
    <div className="grid gap-4 lg:grid-cols-3">
      <section className="lg:col-span-2">
        <h2 className="mb-4 text-lg font-semibold tracking-tight text-zinc-100">Divisi Kami</h2>
        <div className="grid gap-4 sm:grid-cols-2">
          {divisions.map((division) => (
            <article
              key={division.name}
              className="rounded-xl border border-white/10 bg-zinc-900/50 p-5 transition-colors hover:border-white/20"
            >
              <h3 className="text-base font-semibold leading-snug text-zinc-100">
                {division.name}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-zinc-400">{division.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section>
        <h2 className="mb-4 text-lg font-semibold tracking-tight text-zinc-100">Tim Kami</h2>
        <div className="space-y-3">
          {team.map((member) => (
            <article
              key={member.name}
              className="flex gap-3 rounded-xl border border-white/10 bg-zinc-900/50 p-4"
            >
              <div className="flex size-10 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-indigo-500 to-violet-600 text-sm font-semibold text-white">
                {member.initials}
              </div>
              <div className="min-w-0 leading-tight">
                <p className="text-sm font-semibold text-zinc-100">{member.name}</p>
                <p className="text-xs text-indigo-300">{member.role}</p>
                <p className="mt-1 text-xs leading-relaxed text-zinc-500">{member.detail}</p>
              </div>
            </article>
          ))}

          <div className="rounded-xl border border-white/10 bg-zinc-900/50 p-4">
            <p className="text-xs font-medium uppercase tracking-wider text-zinc-600">Kontak</p>
            <a
              href="mailto:info@sociaveraresearch.org"
              className="mt-2 flex items-center gap-2 text-sm text-zinc-300 transition-colors hover:text-white"
            >
              <Mail className="size-4 text-zinc-500" />
              info@sociaveraresearch.org
            </a>
            <p className="mt-2 flex items-start gap-2 text-xs leading-relaxed text-zinc-500">
              <MapPin className="mt-0.5 size-4 shrink-0" />
              The Grandis No. 17, Royal Sumatra, Medan 20128, North Sumatra, Indonesia
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
